import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Linha 1 */}
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Image source={require("./assets/person.png")} style={styles.icon} />
          <Text style={styles.text}>person</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "orange" }]}>
          <Image source={require("./assets/map.png")} style={styles.icon} />
          <Text style={styles.text}>map</Text>
        </View>
      </View>

      {/* Linha 2 */}
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Image source={require("./assets/heart.png")} style={styles.icon} />
          <Text style={styles.text}>heart</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "gold" }]}>
          <Image source={require("./assets/globe.png")} style={styles.icon} />
          <Text style={styles.text}>globe</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    resizeMode: "contain",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});