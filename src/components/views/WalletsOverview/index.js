import React from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { HeaderIcon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { General as GeneralActions, Wallets as WalletActions, Prices as PricesActions } from '@common/actions';
import NoWallets from './NoWallets';
import TotalBalance from './TotalBalance';
import WalletCard from './WalletCard';
import { Body, Container, Content } from 'native-base';

// External libraries
import * as _ from 'lodash';

@inject('prices', 'wallets')
@observer
export class WalletsOverview extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Safe Space',
        headerLeft: (
            <HeaderIcon
                name='add'
                size='large'
                color={colors.white}
                onPress={() => navigation.navigate('NewWalletName')} />
        ),
        headerRight: (
            <HeaderIcon
                name='settings'
                size='medium'
                type='md'
                color={colors.white}
                onPress={() => navigation.navigate('Settings')} />
        )
    });

    get loading() {
        return this.props.prices.loading || this.props.wallets.loading;
    }

    componentDidMount() {
        this.populate();
    }

    async populate() {
        try {
            await Promise.all([
                WalletActions.loadWallets(),
                PricesActions.getPrice()
            ]);
        } catch (e) {
            GeneralActions.notify(e.message, 'long');
        }
    }

    onPressWallet(wallet) {
        if (this.loading) return;
        WalletActions.selectWallet(wallet);
        this.props.navigation.navigate('WalletDetails', { wallet });
    }

    onPressCreateBounty = () => {
        this.props.navigation.navigate('CreateBounty');
    }

    renderItem = ({ item }) => <WalletCard wallet={item} onPress={() => this.onPressWallet(item)} />

    renderBody = (list) => (!list.length && !this.loading) ? <NoWallets /> : (
        <FlatList
            style={styles.content}
            data={list}
            refreshControl={<RefreshControl refreshing={this.loading} onRefresh={() => this.populate()} />}
            keyExtractor={(item, index) => String(index)}
            renderItem={this.renderItem} />
    );

    render() {
        const { list } = this.props.wallets;
        return (
            <Container>
                <Body>
                    <Content padder>
                    { _.isEmpty(list) ? null : <TotalBalance wallets={list} />}
                        {this.renderBody(list)}
                    </Content>
                </Body>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey
    },
    content: {
        marginTop: measures.defaultMargin
    }
});