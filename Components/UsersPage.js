import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const UsersPage = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = () =>
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) =>
          setUsers((prevUsers) => {
            return setUsers([
              ...prevUsers,
              { key: data.results[0].login.uuid, value: data.results[0] },
            ]);
          })
        );
    getUser();
    const getUserInterval = setInterval(getUser, 5000);
    return () => clearInterval(getUserInterval);
  }, []);
  return (
    <View>
      <Text style={{ color: "#b1b8c5", paddingLeft: 20, fontSize: 25 }}>
        PROFILES
      </Text>

      {users ? (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("userDetails", item.value)}
            >
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  marginBottom: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#dbe0e5",
                }}
              >
                <Image
                  source={{
                    uri: item.value.picture.thumbnail,
                  }}
                  style={{ width: 52, height: 52, borderRadius: 50 }}
                />
                <Text
                  style={{
                    color: "#6374f3",
                    fontWeight: "bold",
                    marginLeft: 10,
                    fontSize: 20,
                  }}
                >
                  {item.value.name.first + ", " + item.value.dob.age}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Loading..</Text>
      )}
    </View>
  );
};

export default UsersPage;
