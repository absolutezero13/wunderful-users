import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
const UserDetails = ({ navigation }) => {
  const age = navigation.getParam("dob").age;
  const firstName = navigation.getParam("name").first;
  const lastName = navigation.getParam("name").last;
  const picture = navigation.getParam("picture").large;
  const gender = navigation.getParam("gender");
  const lat = navigation.getParam("location").coordinates.latitude;
  const long = navigation.getParam("location").coordinates.longitude;
  const country = navigation.getParam("location").country;
  const state = navigation.getParam("location").state;

  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.user}>
        <Image
          source={{
            uri: picture,
          }}
          style={styles.userImage}
        />
        <View style={{ marginLeft: 25 }}>
          <Text style={styles.userInfoText}>Name</Text>
          <Text style={styles.nameText}>{firstName + " " + lastName}</Text>
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: +lat,
          longitude: +long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{ latitude: +lat, longitude: +long }}
          title={state}
          description={country}
        />
      </MapView>
      <Text style={styles.locationText}>Location</Text>
      <View style={{ flexDirection: "row", height: "30%" }}>
        <View style={styles.genderContainer}>
          <Text style={styles.userInfoText}>Gender</Text>
          {gender === "female" ? (
            <Icon style={styles.genderIcon} name="venus" size={50} />
          ) : (
            <Icon style={styles.genderIcon} name="mars" size={50} />
          )}
        </View>
        <View style={styles.ageContainer}>
          <Text style={styles.userInfoText}>Age</Text>
          <Text> {age} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    paddingVertical: 30,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  userInfoText: {
    color: "#b1b8c5",
    fontSize: 16,
    fontWeight: "bold",
  },

  nameText: {
    color: "#6374f3",
    fontSize: 20,
    fontWeight: "bold",
  },
  map: {
    width: "100%",
    height: 300,
  },
  locationText: {
    position: "absolute",
    top: 170,
    left: 10,
    color: "#b1b8c5",
    fontWeight: "bold",
    fontSize: 16,
  },
  genderContainer: {
    padding: 10,
    width: "35%",
    backgroundColor: "white",
  },
  ageContainer: {
    padding: 10,
    width: "65%",
    backgroundColor: "yellow",
  },
  genderIcon: {
    alignSelf: "center",
    marginTop: 30,
    color: "#6374f3",
  },
});

export default UserDetails;
