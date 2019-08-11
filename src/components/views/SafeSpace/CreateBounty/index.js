import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Button } from '@components/widgets';
import { FormInput } from '@components/widgets/SafeSpace/FormInput';
import { colors, measures } from '@common/styles';

export class CreateBounty extends React.Component {
    
    static navigationOptions = { title: 'Create Bounty' };
    
    
    onPressCreate() {
        const { walletName, walletDescription } = this.props.navigation.state.params;
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Do you already have a wallet to configure?</Text>
                <FormInput label={'Title'}/>
                <FormInput label={'Description'}/>
                <FormInput label={'Category'}/>
                <Button onPress={() => this.onPressCreate()}>No, create new</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
        padding: measures.defaultPadding,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    message: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32
    },
    buttonsContainer: {
        justifyContent: 'space-between'
    }
});