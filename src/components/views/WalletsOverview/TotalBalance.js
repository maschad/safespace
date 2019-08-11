import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { colors, measures } from '@common/styles';
import { Wallet as WalletUtils } from '@common/utils';
import { Card, CardItem, Body, Left, Right } from 'native-base';

@inject('prices')
@observer

export default class TotalBalance extends React.Component {

    get balance() {
        const { wallets } = this.props;
        const balances = wallets.map(({ balance }) => balance);
        if (balances.some(el => !el)) return 0;
        const balance = WalletUtils.reduceBigNumbers(balances).toString();
        return Number(WalletUtils.formatBalance(balance));
    }
    
    get fiatBalance() {
        return Number(this.props.prices.usd * this.balance);
    }

    render() {
        return (
            <Card>
                <CardItem header>
                    <Left>
                        <Text style={styles.title}>Your wallet: </Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={styles.balance}>ETH {this.balance.toFixed(3)}</Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text style={styles.fiatBalance}>US$ {this.fiatBalance.toFixed(2)}</Text>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: measures.fontSize,
        color: colors.black
    },
    balance: {
        fontSize: measures.fontSizeMedium + 10,
        fontWeight: 'bold',
        color: colors.black
    },
    fiatBalance: {
        fontSize: measures.fontSizeMedium - 3,
        color: colors.gray
    }
});