import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeycodeInput } from "react-native-keycode";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export class Verification extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <KeyboardAwareScrollView
            behavior="padding"
            style={{}}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
          >
            <View style={styles.upperView}>
              <Text style={styles.upperText}> Confirm Your Number</Text>
              <Text style={styles.belowText}>
                We just sent a 6 digit code via your SMS to {"\n"}
                {"\n"} +256 777 127 289 .
                <Text style={styles.innerText}>Not my number?</Text>{" "}
              </Text>

              <KeycodeInput
                defaultValue="0000"
                tintColor="black"
                style={styles.keycode}
              />
            </View>

            <TouchableOpacity>
              <Image
                style={styles.Accountimage}
                source={require("../assets/images/grey.jpeg")}
              />
            </TouchableOpacity>

            <View style={styles.lowerView}>
              <Text style={styles.lowerText}>
                Resend Code <Text style={styles.notBold}>in 0:14</Text>
              </Text>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    width: wp("100%"),
  },
  keycode: { marginTop: wp("10%") },
  upperView: {
    marginTop: wp("20%"),
    marginLeft: wp("8"),
  },
  upperText: {
    alignContent: "center",
    fontSize: wp("6"),
    // marginLeft: wp("-40"),
    fontWeight: "bold",
    // justifyContent: "center",
    // textAlign: "center",
    color: "black",
  },
  lowerView: {
    marginTop: wp("6%"),

    alignContent: "center",
    justifyContent: "center",
  },
  lowerText: {
    alignContent: "center",
    fontSize: wp("4"),
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "grey",
  },
  belowText: {
    fontSize: wp("4"),
    // marginLeft: wp("5"),
    marginTop: wp("3"),
    color: "grey",
  },
  notBold: { fontWeight: "normal" },
  innerText: {
    color: "red",
    fontWeight: "bold",
  },
  Accountimage: {
    width: wp("20"),
    height: wp("20"),
    marginLeft: wp("40"),
    marginTop: wp("20%"),
    borderRadius: 60,
  },
});
export default Verification;
