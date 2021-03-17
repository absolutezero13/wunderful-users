import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
const UserDetails = ({ navigation }) => {
  const age = navigation.getParam("dob").age;
  const firstName = navigation.getParam("name").first;
  const lastName = navigation.getParam("name").last;
  const picture = navigation.getParam("picture").large;
  const lat = navigation.getParam("location").coordinates.latitude;
  const long = navigation.getParam("location").coordinates.longitude;
  const gender = navigation.getParam("gender");

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
        <Marker coordinate={{ latitude: +lat, longitude: +long }} />
      </MapView>
      <Text
        style={{
          position: "absolute",
          top: 170,
          left: 10,
          color: "#b1b8c5",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Location
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ height: 220, width: "40%", backgroundColor: "red" }}>
          <Text style={{ color: "#b1b8c5", fontWeight: "bold", fontSize: 16 }}>
            Gender
          </Text>

          {gender === "female" ? (
            <Icon name="venus" size={30} color="#b1b8c5" />
          ) : (
            <Icon name="mars" size={30} color="#b1b8c5" />
          )}
        </View>

        <View style={{ width: "60%", backgroundColor: "yellow" }}>
          <Text style={{ color: "#b1b8c5" }}>Age</Text>
          <Text> {age} </Text>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;
