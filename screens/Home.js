import React from "react";
import { StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import { Block, theme } from "galio-framework";
import Storys from "../components/Story";
import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");
import BlurCard from "../components/blurCard";

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <BlurCard />
        <Storys />
        <Block flex>
          <Block flex row>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              Users Nearby
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                // fontSize: 20,
                marginTop: 15,
                marginLeft: 150,

                color: "#ff726f",
              }}
            >
              Filter
            </Text>
          </Block>
          <Block flex row>
            <Card
              item={articles[0]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={articles[1]} />
          </Block>
          <Block flex row>
            <Card
              item={articles[3]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={articles[4]} />
          </Block>
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
