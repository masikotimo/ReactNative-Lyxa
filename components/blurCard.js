import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, StatusBar } from "react-native";
import { CardOne, CardFour } from "react-native-card-ui";
import Swiper from "react-native-swiper";
const { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { styles } from "styles/LoginStyle";

const colors = ["#5C6BC0", "#009688", "#F44336"];
export class BlurCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View // last card
          style={styles.lastcard}
        />

        <View // second card
          style={styles.secondcard}
        >
          <CardFour
            onClicked={() => {
              alert("Buy now");
            }}
            image={require("../assets/images/texture.jpeg")}
            date={"27 Nov"}
            off={"Mike Grit Party"}
            offText={"3 mutual friends ."}
            buttonText={"BUY NOW!"}
          />
        </View>
        <View // frontmost card
          style={styles.frontmost}
        >
          <CardFour
            onClicked={() => {
              alert("Buy now");
            }}
            image={require("../assets/images/horse.jpg")}
            date={"27 Nov"}
            off={"Mike Grit Party"}
            offText={"3 mutual friends ."}
            buttonText={"BUY NOW!"}
          />
        </View>
        <Swiper
          index={2}
          autoplay={false}
          containerStyle={{ marginTop: 300 }}
          activeDot={
            <View
              style={{
                backgroundColor: "rgb(255,127,80)",
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
        >
          <View style={styles.slide}></View>
          <View style={styles.slide}></View>
          <View style={styles.slide}></View>
          <View style={styles.slide}></View>
          <View style={styles.slide}></View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: wp("80%"),
    height: hp("40px"),
    marginTop: 30,
    // justifyContent: "center",
    // alignItems: "center",
    // borderBottomWidth: 2,
    // borderBottomColor: "grey",

    marginLeft: 20,
  },
  text: {
    fontSize: 40,
  },
  lastcard: {
    // marginTop: 50,
    backgroundColor: colors[2],
    width: 300,
    height: 260,
    position: "absolute",
    opacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 0.8 }],
    zIndex: 1,
    right: 18,
    borderRadius: 20,
  },
  secondcard: {
    width: 300,
    height: 150,
    position: "absolute",
    zIndex: 2,
    left: 20,
    // backgroundColor: colors[1], // Green
    opacity: 0.6,
    transform: [{ scale: 0.9 }],
    borderRadius: 20,
  },
  frontmost: {
    width: 300,
    height: 150,
    borderRadius: 20,
    position: "absolute",
    zIndex: 3,
    // left: 0,
    left: 0,
    // backgroundColor: colors[0], // Blue
    opacity: 1,
    transform: [{ scale: 1.0 }],
  },
  image: {
    width: width,
    height: height,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default BlurCard;
