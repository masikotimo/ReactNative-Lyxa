import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

class Introduction extends Component {
  state = {
    image: null,
  };
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      //   console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  render() {
    let { image } = this.state;
    return (
      <View>
        <StatusBar hidden={false} />
        <ScrollView>
          <KeyboardAwareScrollView
            behavior="padding"
            style={{}}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
          >
            <View style={styles.upperView}>
              <Text style={styles.upperText}> Introduce yourself</Text>
              <Text style={styles.belowText}>
                {" "}
                This is how you'll show up to others
              </Text>
            </View>

            {image === null ? (
              <Image
                style={styles.Accountimage}
                source={require("../assets/images/camera.png")}
              />
            ) : (
              <Image source={{ uri: image }} style={styles.Accountimage} />
            )}
            <TouchableOpacity onPress={this._pickImage}>
              <Image
                style={styles.ChangeAccountimage}
                source={require("../assets/images/redbtn.png")}
              />
            </TouchableOpacity>

            <View style={styles.lowerContentView}>
              <View style={styles.form}>
                <Text style={styles.TextLabels}>Full Name </Text>
                <TextInput
                  style={[[styles.TextLabels, styles.TextValues]]}
                  placeholder="John"
                ></TextInput>
              </View>
              <View style={styles.form}>
                <Text style={styles.TextLabels}>User Name </Text>
                <TextInput
                  style={[styles.TextLabels, styles.TextValues]}
                  placeholder="Doe"
                ></TextInput>
              </View>
              <View style={styles.form}>
                <Text style={styles.TextLabels}>Bio </Text>
                <SafeAreaView style={[styles.TextLabels, styles.TextValues]}>
                  <TextInput
                    style={[styles.TextLabels, styles.safeview, styles.safe]}
                    placeholder="I am a loving dark skin"
                  ></TextInput>
                </SafeAreaView>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.Accountimagex}
                  source={require("../assets/images/grey.jpeg")}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    width: wp("100%"),
  },
  upperView: {
    marginTop: wp("15"),
  },
  upperText: {
    alignContent: "center",
    fontSize: wp("6"),
    marginLeft: wp("-28"),
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  },
  belowText: {
    fontSize: wp("5"),
    marginLeft: wp("9"),
    color: "grey",
  },
  Accountimage: {
    width: wp("30"),
    height: wp("30"),
    marginLeft: wp("34"),
    marginTop: wp("5"),
    borderRadius: 60,
  },
  Accountimagex: {
    width: wp("20"),
    height: wp("20"),
    marginLeft: wp("30"),
    marginTop: wp("20%"),
    borderRadius: 60,
  },
  ChangeAccountimage: {
    width: wp("10"),
    height: wp("10"),
    marginLeft: wp("54"),
    marginTop: wp("-7"),
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    marginRight: wp("8"),
  },
  lowerContentView: {
    marginTop: wp("15"),
    marginLeft: wp("10"),
  },
  TextLabels: {
    flex: 1,
    fontSize: wp("5"),
    paddingBottom: wp("3"),
    paddingTop: wp("3"),

    borderBottomColor: "grey",
    color: "black",
  },
  safeview: {
    color: "grey",
  },
  safe: {
    flex: 0,
  },
  TextValues: {
    color: "grey",
    marginLeft: wp("-5"),
    width: wp("2"),
    fontSize: wp("4.5"),
  },
  GreenTickimage: {
    width: wp("7"),
    height: wp("7"),
    marginLeft: wp("5"),
    marginTop: wp("4"),
  },
  subscriptionValue: {
    marginTop: wp("-7"),
  },
  viewImage: {
    marginTop: wp("-5"),
  },
  // //   subscriptionLabel: {
  // //     marginRight: wp("-20"),
  //   },
});

export default Introduction;
