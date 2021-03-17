import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
const UserDetails = ({ navigation }) => {
  const age = navigation.getParam("dob").age;
  const firstName = navigation.getParam("name").first;
  const lastName = navigation.getParam("name").last;
  const picture = navigation.getParam("picture").large;
  const lat = navigation.getParam("location").coordinates.latitude;
  const long = navigation.getParam("location").coordinates.longitude;
  console.log(navigation.getParam("picture"));
  console.log(lat, long);
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 30,
          paddingVertical: 30,
        }}
      >
        <Image
          source={{
            uri: picture,
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View style={{ marginLeft: 25 }}>
          <Text style={{ color: "#b1b8c5", fontSize: 16 }}>Name</Text>
          <Text style={{ color: "#6374f3", fontSize: 20, fontWeight: "bold" }}>
            {firstName + " " + lastName}
          </Text>
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: +lat,
          longitude: +long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: "100%",
          height: 300,
        }}
      >
        {/* <Text>Location</Text> */}
        <Marker coordinate={{ latitude: +lat, longitude: +long }} />
      </MapView>
      <View style={{ flexDirection: "row" }}>
        <View style={{ height: 220, width: "40%", backgroundColor: "red" }}>
          <Text>gender</Text>
        </View>

        <View style={{ width: "60%", backgroundColor: "yellow" }}>
          <Text>row</Text>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;
