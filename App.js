import React from "react";
import ScreenContainer from "./screens/screen";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/index";
import { PersistGate } from "redux-persist/lib/integration/react";
import OnBoardScreen from "./components/OnBoardScreen";
import Introduction from "./components/Introduce";
import Signup from "./components/Signup";
export default class App extends React.Component {
  render() {
    console.disableYellowBox = true; //@TODO Temporarily disabled for production
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Signup />
        </PersistGate>
      </Provider>
    );
  }
}
