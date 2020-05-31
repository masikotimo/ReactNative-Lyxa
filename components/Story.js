import React, { Component } from "react";
import { Text, View } from "react-native";
import Story from "react-native-story";

const stories = [
  {
    id: "4",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Ugur Erdal",
    avatar: require("../assets/images/lyxaShort.jpg"),
  },
  {
    id: "2",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Mustafa",
    avatar: require("../assets/images/lyxaShort.jpg"),
  },
  {
    id: "5",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Emre Yilmaz",
    avatar: require("../assets/images/lyxaShort.jpg"),
  },
  {
    id: "3",
    source: require("../assets/images/lyxaShort.jpg"),
    user: "Cenk Gun",
    avatar: require("../assets/images/lyxaShort.jpg"),
  },
];

export class Storys extends Component {
  render() {
    return (
      <Story
        unPressedBorderColor="#e95950"
        pressedBorderColor="#ebebeb"
        stories={stories}
      />
    );
  }
}

export default Storys;
