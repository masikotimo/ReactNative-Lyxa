import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PhoneInput from "react-native-phone-input";
import { TouchableHighlight } from "react-native-gesture-handler";
import SegmentedControlTab from "react-native-segmented-control-tab";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      countrycode: "+256777127289",
      btnText: "I am here to Socialise",
    };
  }

  handlesubmit = () => {
    const value = this._form.getCountryCode();
    var countrycodex = "+" + value;
    this.setState({ countrycode: countrycodex });
  };
  componentDidMount() {
    this.handlesubmit();
  }

  handleIndexChange = (index) => {
    if (index === 0) {
      this.setState({
        ...this.state,
        selectedIndex: index,
        btnText: "I am here to Socialise",
      });
    } else {
      this.setState({
        ...this.state,
        selectedIndex: index,
        btnText: "I am here to organise lit parties",
      });
    }
  };
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
          <Text style={styles.belowText}>{this.state.btnText}</Text>
        </View>
        <View style={styles.tab}>
          <SegmentedControlTab
            values={["User", "Event's Provider"]}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTabTextStyle={styles.activeTabTextStyle}
            // selectedIndex={0}
            allowFontScaling={false}
          />
        </View>
        <View style={styles.lowerContentView}>
          <View style={styles.form}>
            <Text style={styles.TextLabels}>Phone </Text>
            {/* <TextInput
              style={[[styles.TextLabels, styles.TextValues]]}
            ></TextInput> */}
            <PhoneInput
              style={[[styles.TextLabels, styles.TextValues, styles.pullphone]]}
              ref={(c) => (this._form = c)}
              initialCountry="ug"
              value={this.state.countrycode}
              onSelectCountry={() => this.handlesubmit()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainerStyle: {
    color: "red",
  },
  tabStyle: {
    //custom styles
    backgroundColor: "#eeeef0",
    height: hp("8%"),
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,

    elevation: 2,
    marginLeft: 2,
  },
  tabTextStyle: {
    //custom styles
    color: "black",
    fontWeight: "bold",
  },
  activeTabStyle: {
    //custom styles
    backgroundColor: "white",
  },
  activeTabTextStyle: {
    //custom styles
    color: "black",
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  },

  container: {
    height: hp("100%"),
    width: wp("100%"),
  },
  tab: {
    marginTop: wp("4%"),

    width: wp("80%"),
    marginLeft: wp("6%"),
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    marginRight: wp("8"),
  },
  TextValues: {
    color: "grey",
    marginLeft: wp("-5"),
    width: wp("2"),
    fontSize: wp("4.5"),
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
    width: wp("3"),

    borderBottomColor: "grey",
    color: "black",
  },
  pullphone: {
    marginLeft: wp("-40%"),
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
