import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Wallet as WalletUtils } from "@common/utils";

const landingImage = require("./Community.png");

export class GetStarted extends Component {
 
  _onPressGetStarted = () => {
    this.props.navigation.navigate("CreateMnemonics");
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={landingImage} />
        </View>

        <View style={styles.card}>
          <Text style={[styles.defaultText, styles.h1]}>Safe Space</Text>
          <Text style={[styles.defaultText, styles.h3]}>
            Let's Keep Our Communities Safe.
          </Text>
          <Text style={[styles.defaultText]}>
            Leave Tips on Crimes Anonymously.
          </Text>
          <Text style={[styles.defaultText]}>Get Paid Anonymously.</Text>
        </View>

        <TouchableOpacity 
            style={styles.button}
            onPress={this._onPressGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  landingImage: {
    position: "absolute",
    top: 36,
    bottom: 0,
    left: 0,
    right: 0,
    width: "20%",
    height: "20%",
    resizeMode: "cover"
  },
  defaultText: {
    color: "#000000",
    fontSize: 14,
    alignSelf: "center"
  },
  h1: {
    fontWeight: "600",
    fontSize: 36
  },
  h3: {
    fontWeight: "600",
    fontSize: 18
  },
  card: {
    paddingTop: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  button: {
    backgroundColor: "#000000",
    position: "absolute",
    bottom: 26,
    borderRadius: 26,
    paddingVertical: 13,
    paddingHorizontal: 109.5
  },
  buttonText: {
    color: "white",
    alignItems: "center"
  }
});
