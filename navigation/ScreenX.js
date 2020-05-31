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
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-person"}
            />
          </View>
        ),
        // activeColor: "#f60c0d",
        // inactiveColor: "#f65a22",
        // barStyle: { backgroundColor: "white" },
      },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        tabBarLabel: "Welcome",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-person"}
            />
          </View>
        ),
        // activeColor: "#615af6",
        // inactiveColor: "#46f6d7",
        // barStyle: { backgroundColor: "white" },
      },
    },
    Verification: {
      screen: VerificationScreen,
      navigationOptions: {
        tabBarLabel: "Verification",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-person"}
            />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    activeColor: "black",
    inactiveColor: "grey",
    barStyle: { backgroundColor: "white" },
  }
);

const ScreenContainer = createAppContainer(TabNavigator);
export default ScreenContainer;
