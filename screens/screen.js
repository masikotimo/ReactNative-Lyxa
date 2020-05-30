import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../components/Login";

const ScreenStack = createStackNavigator(
  {
    Login: Login,
  },
  {
    initialRouteName: "Login",
  }
);

const ScreenContainer = createAppContainer(ScreenStack);
export default ScreenContainer;
