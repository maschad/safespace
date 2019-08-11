import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Card, Container, Content, Footer, Text } from "native-base";
import { Wallet as WalletUtils } from "@common/utils";
import { colors, measures } from "@common/styles";

export class CreateMnemonics extends React.Component {
  static navigationOptions = { title: "Create Wallet" };

  state = { mnemonics: null };

  componentDidMount() {
    const mnemonics = WalletUtils.generateMnemonics();
    this.setState({ mnemonics });
  }

  onPressProceed() {
    const { mnemonics } = this.state;
    const {
      walletName,
      walletDescription
    } = this.props.navigation.state.params;
    this.props.navigation.navigate("ConfirmMnemonics", {
      mnemonics,
      walletName,
      walletDescription
    });
  }

  onPressReveal() {
    const mnemonics = WalletUtils.generateMnemonics();
    this.setState({ mnemonics });
  }

  renderMnemonic = (mnemonic, index) => (
    <View style={styles.mnemonic} key={index}>
      <Button dark rounded>
        <Text style={{ fontSize: 10, lineHeight: 22 }}>{index + 1}</Text>
        <Text style={styles.text}>{mnemonic}</Text>
      </Button>
    </View>
  );

  renderBody() {
    const { mnemonics } = this.state;
    if (mnemonics) {
      return (
        <View style={styles.mnemonicsContainer}>
          {mnemonics.map(this.renderMnemonic)}
        </View>
      );
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
            <View style={styles.}>
                <Text>Your Password</Text>
                <Text>Has Been Genereted</Text>
            </View>
          <Card style={styles.card}>
            <Text style={styles.message}>
              You'll need to use this as your{" "}
              <Text style={{ fontWeight: "bold" }}>
              secure password.
              </Text>Save it.
            </Text>
            {this.renderBody()}
          </Card>
        </Content>

        <TouchableOpacity
          style={styles.button}
          onPress={this._onPressGetStarted}
        >
          <Text style={styles.buttonText}>Continues</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: colors.defaultBackground,
    padding: measures.defaultPadding
  },
  message: {
    color: colors.black,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 12,
    marginHorizontal: 32
  },
  mnemonicsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    // maxWidth: "80%"
  },
  mnemonic: {
    marginHorizontal: 4,
    marginVertical: 10
  },
  buttonsContainer: {
    width: "100%",
    justifyContent: "flex-end",
    height: 104
  },
  text: {
    fontSize: 10,
    marginLeft: -20,
    color: "white"
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
  },
  card: {
    borderRadius: 5
  }
});
