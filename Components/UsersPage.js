import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const UsersPage = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const getUser = () => {
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
    };
    getUser();
    const userInterval = setInterval(getUser, 5000);
    return () => clearInterval(userInterval);
  }, []);

  // Doesnt work
  // useFocusEffect(
  //   useCallback(() => {
  //     const getUser = () => {
  //       fetch("https://randomuser.me/api")
  //         .then((res) => res.json())
  //         .then((data) =>
  //           setUsers((prevUsers) => {
  //             return setUsers([
  //               ...prevUsers,
  //               { key: data.results[0].login.uuid, value: data.results[0] },
  //             ]);
  //           })
  //         );

  //       console.log("cleanup?");
  //     };
  //     getUser();
  //     const userInterval = setInterval(getUser, 5000);
  //     return () => clearInterval(userInterval);
  //   }, [])
  // );
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PROFILES</Text>
        <Button
          title="Clear All"
          onPress={() => setUsers([])}
          style={styles.button}
        />
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
              <View style={styles.user}>
                <Image
                  source={{
                    uri: item.value.picture.medium,
                  }}
                  style={styles.userImage}
                />
                <Text style={styles.username}>
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
//// STYLES ////
const styles = StyleSheet.create({
  home: {
    backgroundColor: "white",
  },
  button: {
    marginLeft: 10,
    height: 20,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerText: {
    color: "#b1b8c5",
    fontSize: 25,
  },
  user: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingBottom: 20,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dbe0e5",
  },
  userImage: {
    width: 52,
    height: 52,
    borderRadius: 50,
  },
  username: {
    color: "#6374f3",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 20,
  },
});
export default UsersPage;
