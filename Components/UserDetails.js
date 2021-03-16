import React from "react";
import { View, Text } from "react-native";
impo;
import { MapView, Permissions } from "expo";
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
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 26,
          longitude: 45,
          latitudeDelta: 0.0992,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
    </View>
  );
};

export default UserDetails;
