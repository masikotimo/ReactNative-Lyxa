import React from "react";

import PropTypes from "prop-types";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { argonTheme } from "../constants";

class Card extends React.Component {
  render() {
    const { item, horizontal, full, style, ctaColor, imageStyle } = this.props;

    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle,
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [
      styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow,
    ];

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback>
          <Block flex style={imgContainer}>
            <Image source={{ uri: item.image }} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Block style={styles.cardDescription}>
            <Image
              style={styles.Accountimage}
              source={{ uri: item.profileImage }}
            />
            <Text size={14} style={styles.cardTitle}>
              {item.title}
            </Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 1,
  },
  Accountimage: {
    width: wp("10"),
    height: wp("10"),
    // marginLeft: wp("34"),
    marginTop: wp("-15"),
    borderRadius: 60,
  },
  cardTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6,
    marginTop: -30,
    marginLeft: 40,
    color: "white",
    fontWeight: "bold",
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: "hidden",
  },
  image: {
    borderRadius: 20,
  },
  horizontalImage: {
    height: 122,
    width: "auto",
  },
  horizontalStyles: {
    // borderTopRightRadius: 0,
    // borderBottomRightRadius: 0,
    borderRadius: 20,
  },
  verticalStyles: {
    // borderBottomRightRadius: 0,
    // borderBottomLeftRadius: 0,
    borderRadius: 20,
  },
  fullImage: {
    height: 300,
    borderRadius: 20,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default Card;
