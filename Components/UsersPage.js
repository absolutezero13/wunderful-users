import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () =>
      await fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((data) =>
          setUsers((prevUsers) => setUsers([...prevUsers, data.results[0]]))
        );

    getUser();
    setInterval(getUser, 5000);

    return clearInterval(getUser);
  }, []);

  console.log(users);

  return (
    <View>
      <Text style={{ color: "#b1b8c5", paddingLeft: 20, fontSize: 25 }}>
        PROFILES
      </Text>
      <ScrollView>
        {users &&
          users.map((user) => {
            return (
              <View
                key={user.login.uuid}
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#dbe0e5",
                }}
              >
                <Image
                  source={{
                    uri: user.picture.thumbnail,
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
                  {user.name.first + ", " + user.dob.age}
                </Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default UsersPage;
