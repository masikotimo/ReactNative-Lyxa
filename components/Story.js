import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Story from "react-native-story";

const stories = [
  {
    id: "1",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Add Story",
    avatar: require("../assets/images/redbtn.png"),
  },
  {
    id: "4",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Timothy",
    avatar: require("../assets/images/texture.jpeg"),
  },
  {
    id: "2",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Masiko",
    avatar: require("../assets/images/horse.jpg"),
  },
  {
    id: "5",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Innocent",
    avatar: require("../assets/images/me.jpg"),
  },
  {
    id: "3",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Adwong",
    avatar: require("../assets/images/lyxaShort.jpg"),
  },
];

export class Storys extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          Stories
        </Text>
        <Story
          unPressedBorderColor="#e95950"
          pressedBorderColor="#ebebeb"
          stories={stories}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    borderTopWidth: 1,
    borderTopColor: "#D3D3D3",
  },
});

export default Storys;
