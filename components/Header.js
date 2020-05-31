import React from "react";

import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  View,
} from "react-native";
import { Button, Block, NavBar, Text, theme } from "galio-framework";

import Icon from "./Icon";
import Input from "./Input";
import Tabs from "./Tabs";
import argonTheme from "../constants/Theme";
import { FontAwesome, Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({ isWhite, style }) => (
  <TouchableOpacity style={[styles.button, style]}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="bell"
      color={argonTheme.COLORS[isWhite ? "WHITE" : "ICON"]}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const BasketButton = ({ isWhite, style }) => (
  <TouchableOpacity style={[styles.button, style]}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="basket"
      color={argonTheme.COLORS[isWhite ? "WHITE" : "ICON"]}
    />
  </TouchableOpacity>
);

const SearchButton = ({ isWhite, style }) => (
  <TouchableOpacity style={[styles.button, style]}>
    <Icon
      size={16}
      family="Galio"
      name="search-zoom-in"
      color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
  renderRight = () => {
    const { white, title } = this.props;

    if (title === "Title") {
      return [
        <BellButton key="chat-title" isWhite={white} />,
        <BasketButton key="basket-title" isWhite={white} />,
      ];
    }

    switch (title) {
      case "Home":
        return [
          <BellButton key="chat-home" isWhite={white} />,
          <BasketButton key="basket-home" isWhite={white} />,
        ];
      case "Deals":
        return [
          <BellButton key="chat-categories" />,
          <BasketButton key="basket-categories" />,
        ];
      case "Categories":
        return [
          <BellButton key="chat-categories" isWhite={white} />,
          <BasketButton key="basket-categories" isWhite={white} />,
        ];
      case "Category":
        return [
          <BellButton key="chat-deals" isWhite={white} />,
          <BasketButton key="basket-deals" isWhite={white} />,
        ];
      case "Profile":
        return [
          <BellButton key="chat-profile" isWhite={white} />,
          <BasketButton key="basket-deals" isWhite={white} />,
        ];
      case "Product":
        return [
          <SearchButton key="search-product" isWhite={white} />,
          <BasketButton key="basket-product" isWhite={white} />,
        ];
      case "Search":
        return [
          <BellButton key="chat-search" isWhite={white} />,
          <BasketButton key="basket-search" isWhite={white} />,
        ];
      case "Settings":
        return [
          <BellButton key="chat-search" isWhite={white} />,
          <BasketButton key="basket-search" isWhite={white} />,
        ];
      default:
        break;
    }
  };
  renderSearch = () => {
    return (
      <View>
        <Input
          right
          color="black"
          style={styles.search}
          placeholder="    Search for friends or users"
          placeholderTextColor={"#8898AA"}
          iconContent={
            // <Icon
            //   size={16}
            //   color={theme.COLORS.MUTED}
            //   name="microphone"
            //   family="ArgonExtra"
            // />
            <FontAwesome name="microphone" size={16} color="black" />
          }
        />
        <View style={{ marginTop: 10 }}>
          <View style={{ marginTop: wp("-13"), marginLeft: wp("6") }}>
            <Feather name="search" size={16} color="grey" />
          </View>
        </View>
      </View>
    );
  };
  renderOptions = () => {
    const { optionLeft, optionRight } = this.props;

    return (
      <Block row style={styles.options}>
        <Button shadowless style={[styles.tab, styles.divider]}>
          <Block row middle>
            <Icon
              name="diamond"
              family="ArgonExtra"
              style={{ paddingRight: 8 }}
              color={argonTheme.COLORS.ICON}
            />
            <Text size={16} style={styles.tabTitle}>
              {optionLeft || "Beauty"}
            </Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab}>
          <Block row middle>
            <Icon
              size={16}
              name="bag-17"
              family="ArgonExtra"
              style={{ paddingRight: 8 }}
              color={argonTheme.COLORS.ICON}
            />
            <Text size={16} style={styles.tabTitle}>
              {optionRight || "Fashion"}
            </Text>
          </Block>
        </Button>
      </Block>
    );
  };
  renderTabs = () => {
    const { tabs, tabIndex } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;

    if (!tabs) return null;

    return <Tabs data={tabs || []} initialIndex={tabIndex || defaultTab} />;
  };
  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {options ? null : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
  };
  render() {
    const {
      back,
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      ...props
    } = this.props;

    const noShadow = [
      "Search",
      "Categories",
      "Deals",
      "Pro",
      "Profile",
    ].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: "rgba(0,0,0,0)" } : null,
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor },
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={false}
          title="Hi Becky"
          style={navbarStyles}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: "center" }}
          left={
            <Icon
              name={back ? "chevron-left" : "menu"}
              family="entypo"
              size={20}
              onPress={this.handleLeftPress}
              color={
                iconColor ||
                (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)
              }
              style={{ marginTop: 2 }}
            />
          }
          leftStyle={{ paddingVertical: 12, flex: 0.2 }}
          titleStyle={[
            styles.title,
            { color: argonTheme.COLORS[white ? "WHITE" : "HEADER"] },
            titleColor && { color: titleColor },
          ]}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: "relative",
  },
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: "absolute",
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "400",
    color: argonTheme.COLORS.HEADER,
  },
});

export default Header;
