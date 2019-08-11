import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import firebase from 'react-native-firebase';
import { Button } from '@components/widgets';
import { FormInput } from '@components/widgets/SafeSpace/FormInput';
import { colors, measures } from '@common/styles';
import { firebaseService } from '../../../../firebase/service';

import BountyItem from "../BountyItem"

export class BountyList extends React.Component {
  state = {
    bounties: [],
  };

  refresh = () => {
    firebaseService.getAllBounties().then(item => {
      global.console.log('item', item);
        this.setState({bounties: this.addkeysToBounty(item)});
    });
  };

  addkeysToBounty = bounties => {
      return bounties.map(bounty =>{
          return Object.assign(bounty, {key: bounty.walletAddress})
      })
  }

  componentDidMount() {
    this.refresh()
  }


  onPressCreate() {
   
  }

  renderItem = ({item}) => {
      return (
          <BountyItem title={item.title} description={item.description} category={item.category} walletAddress={item.walletAddress}/>
        //   <View>
        //     <Text>{item.title}</Text>
        //      <Text>{item.description}</Text>
        //      <Text>{item.category}</Text>
        //      <Text>{item.walletAddress}</Text>
        //   </View>      
      );
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontWeight: "bold"}}>BountyList</Text>
      <FlatList renderItem={this.renderItem} data={this.state.bounties} />    
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
    justifyContent: 'space-around',
  },
  message: {
    color: colors.black,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: measures.defaultMargin,
    marginHorizontal: 32,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
  },
});
