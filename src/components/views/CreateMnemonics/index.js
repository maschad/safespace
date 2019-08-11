import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Container, Content, Footer, Text } from 'native-base';
import { Wallet as WalletUtils } from '@common/utils';
import { colors, measures } from '@common/styles';

export class CreateMnemonics extends React.Component {
    
    static navigationOptions = { title: 'Create Wallet' };

    state = { mnemonics: null };

    onPressProceed() {
        const { mnemonics } = this.state;
        const { walletName, walletDescription } = this.props.navigation.state.params;
        this.props.navigation.navigate('ConfirmMnemonics', { mnemonics, walletName, walletDescription });
    }

    onPressReveal() {
        const mnemonics = WalletUtils.generateMnemonics();
        this.setState({ mnemonics });
    }

    renderMnemonic = (mnemonic, index) => (
        <View style={styles.mnemonic} key={index}>
            <Button dark rounded>
                <Text style={{ fontSize: 10, lineHeight: 22}}>{index + 1}</Text>
                <Text style={styles.text}>{mnemonic}</Text>
            </Button>
        </View>
    );

    renderBody() {
        const { mnemonics } = this.state;
        if (!mnemonics) return <Button onPress={() => this.onPressReveal()} dark><Text>Reveal</Text></Button>;
        return (
            <View style={styles.mnemonicsContainer}>
                {mnemonics.map(this.renderMnemonic)}
            </View>
        );
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <Text style={styles.message}>Here's a list of words.</Text>
                        <Text style={styles.message}>You'll need to use this as your <Text style={{ fontWeight: 'bold' }}></Text>secure password.</Text>
                        <Text style={styles.message}>Save it.</Text> 
                    </Card>
                    {this.renderBody()}
                    <Footer>
                        <View style={styles.buttonsContainer}>
                            {this.state.mnemonics && (
                                <Button onPress={() => this.onPressProceed()} dark><Text style={styles.text}>Proceed</Text></Button>
                            )}
                        </View>
                    </Footer>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.defaultBackground,
        padding: measures.defaultPadding
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    mnemonicsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '80%'
    },
    mnemonic: {
        margin: 4
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        height: 104
    },
    text: {
        fontSize: 10,
        color: 'white'
    }
});