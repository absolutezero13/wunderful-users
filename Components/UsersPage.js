import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const UsersPage = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(true);
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
    //setInterval(getUser, 10000);
    return () => clearInterval(getUser);
  }, []);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <Text
          style={{
            color: "#b1b8c5",
            fontSize: 25,
          }}
        >
          PROFILES
        </Text>

        <Icon
          onPress={() => setVisible(!visible)}
          name="bars"
          size={30}
          color="#6374f3"
          style={{ marginLeft: "auto" }}
        />
      </View>

      {users && visible ? (
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
                <Icon
                  name="chevron-right"
                  size={30}
                  color="#97a2ac"
                  style={{ marginLeft: "auto" }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        visible && <Text>Loading..</Text>
      )}
      <Icon
        style={{ alignSelf: "center" }}
        name="ellipsis-h"
        size={25}
        color="#b1b8c5"
      />
    </View>
  );
};

export default UsersPage;
