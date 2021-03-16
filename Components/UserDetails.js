import React from "react";
import { View, Text } from "react-native";

const UserDetails = ({ navigation }) => {
  console.log(navigation.getParam("dob").age);
  console.log(navigation.getParam("name").first);
  console.log(navigation.getParam("name").last);
  console.log(navigation.getParam("picture").medium);
  console.log(navigation.getParam("location").coordinates.latitude);
  console.log(navigation.getParam("location").coordinates.longitude);
  return (
    <View>
      <Text>Userspaage</Text>
    </View>
  );
};

export default UserDetails;
