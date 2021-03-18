import React from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react/cjs/react.development";
const UserDetails = ({ navigation }) => {
  // Destructuring data from navigation
  const age = navigation.getParam("dob").age;
  const picture = navigation.getParam("picture").large;
  const gender = navigation.getParam("gender");
  const { first: firstName, last: lastName } = navigation.getParam("name");
  const { country, state } = navigation.getParam("location");
  console.log(age);
  // states for more accurate coordinates
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  //Getting correct map position with forward geocoding
  useEffect(() => {
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${state}-${country}&key=464c6c87db6640a6a97a0c58d929e13d`
    )
      .then((res) => res.json())
      .then((data) => {
        setLong(data.results[0].geometry.lng);
        setLat(data.results[0].geometry.lat);
      });
  });
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
      {lat && long ? (
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
      ) : (
        <View style={styles.loader}>
          <Text>Loading...</Text>
        </View>
      )}
      <Text style={styles.locationText}>Location</Text>
      <View style={{ flexDirection: "row", height: "38%" }}>
        <View style={styles.genderContainer}>
          <Text style={styles.userInfoText}>Gender</Text>
          {gender === "female" ? (
            <Icon style={styles.genderIcon} name="venus" size={50} />
          ) : (
            <Icon style={styles.genderIcon} name="mars" size={50} />
          )}
        </View>
        <View style={styles.ageContainer}>
          <Text style={styles.ageText}>Age</Text>
          <Text style={styles.age}> {age} yo </Text>
          <View
            style={{
              ...styles.visualAge,
              height: `${age * 1.2}%`,
            }}
          ></View>
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
    height: "41%",
  },
  locationText: {
    position: "absolute",
    top: 170,
    left: 10,
    color: "#b1b8c5",
    fontWeight: "bold",
    fontSize: 16,
  },
  loader: {
    height: "41%",
    alignItems: "center",
    justifyContent: "center",
  },
  genderContainer: {
    padding: 10,
    width: "35%",
    backgroundColor: "white",
  },
  ageContainer: {
    padding: 0,
    width: "65%",
  },
  genderIcon: {
    alignSelf: "center",
    marginTop: 30,
    color: "#6374f3",
  },
  age: {
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  ageText: {
    color: "#b1b8c5",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  visualAge: {
    alignSelf: "flex-end",
    width: "100%",
    backgroundColor: "red",
    backgroundColor: "rgba(99,116,243,0.6)",
  },
});

export default UserDetails;
