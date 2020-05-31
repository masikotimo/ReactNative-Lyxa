import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Verification from "../components/Verification";
import Introduce from "../components/Introduce";
import Signup from "../components/Signup";
import Header from "../components/Header";

import {
  FontAwesome,
  Feather,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Home" search options />
        <Home />
      </View>
    );
  }
}
class IntroduceScreen extends React.Component {
  render() {
    return <Introduce />;
  }
}
class SignupScreen extends React.Component {
  render() {
    return <Signup />;
  }
}
class VerificationScreen extends React.Component {
  render() {
    return <Verification />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        ),
      },
    },
    Introduce: {
      screen: IntroduceScreen,
      navigationOptions: {
        tabBarLabel: "Introduce",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialIcons name="event" size={25} color={tintColor} />
          </View>
        ),
      },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        tabBarLabel: "Welcome",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <AntDesign name="wechat" size={25} color={tintColor} />
          </View>
        ),
      },
    },
    Verification: {
      screen: VerificationScreen,
      navigationOptions: {
        tabBarLabel: "Verification",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialIcons name="account-circle" size={25} color={tintColor} />
          </View>
        ),

        // labeled: true,
      },
    },
  },
  {
    initialRouteName: "Home",
    activeColor: "black",
    inactiveColor: "grey",
    barStyle: { backgroundColor: "white" },
    labeled: true,
  }
);

const ScreenContainer = createAppContainer(TabNavigator);
export default ScreenContainer;
