import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import firebase from 'react-native-firebase'
import { Button } from '@components/widgets';
import { FormInput } from '@components/widgets/SafeSpace/FormInput';
import { colors, measures } from '@common/styles';

export class CreateBounty extends React.Component {
    
    static navigationOptions = { title: 'Create Bounty' };

    state = {
        title: '',
        description: '',
        category: ''
    }

    onChange = name => value => {
        this.setState({[name]: value})
    }
    
    
    onPressCreate() {
        global.console.log(this.state)
        firebase.firestore().collection('Bounties').add({
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
            creationDate: new Date()
          })
          this.props.navigation.goBack();
    }


    render() {
        return (
            <View style={styles.container}>
                <FormInput name={'title'} label={'Title'} onChange={this.onChange}/>
                <FormInput name={'description'} label={'Description'} onChange={this.onChange}/>
                <FormInput name={'category'} label={'Category'} onChange={this.onChange}/>
                <Button onPress={() => this.onPressCreate()}>Submit</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        // alignItems: 'stretch',
        // justifyContent: 'space-between',
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