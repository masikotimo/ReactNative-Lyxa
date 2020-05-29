import React, { Component } from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          style={styles.Image}
          source={require("../assets/images/lyxaShort.jpg")}
        />
        <View style={styles.upperView}>
          <Text style={styles.upperText}> Welcome To Lyxa</Text>
          <Text style={styles.belowText}> I am here to Socialise?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    width: wp("100%"),
  },
  Image: {
    height: hp("30%"),
    width: wp("100%"),
  },
  upperView: {
    marginTop: wp("5"),
  },
  upperText: {
    alignContent: "center",
    fontSize: wp("6"),
    marginLeft: wp("-40"),
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  },
  belowText: {
    fontSize: wp("5"),
    marginLeft: wp("5"),
    marginTop: wp("3"),
    color: "grey",
  },
});
export default Signup;
