import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import UsersPage from "./Components/UsersPage";

const App = () => {
  return (
    <View style={styles.container}>
      <UsersPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});
export default App;
