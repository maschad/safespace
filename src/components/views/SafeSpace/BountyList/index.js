import React from 'react';
import { StyleSheet, Image, View, TextInput, FlatList } from 'react-native';
import { colors, measures } from '@common/styles';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export class BountyList extends React.Component {
  state = {
    bounties: [
      {
        title: 'Dalton James is wanted for robbery',
        image: 'https://i.redd.it/elvci10jmub21.jpg',
        total: '5'
      },
      {
        title: 'Kellon Davis is wanted for Arson',
        image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwivjO-_7vrjAhVTZM0KHXy_Co0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-user-computer-icons-gravatar-blog-happy-woman-1025974%2F&psig=AOvVaw3Ek1EqY2XIJuHvMap15W50&ust=1565614425327456',
        total: '10'
      }
    ],
  };

  fiatBalance(balance) {
    return Number(this.props.prices.usd * balance);
  }

  addkeysToBounty = bounties => {
      return bounties.map((bounty, index) =>{
          return Object.assign(bounty, {key: index})
      })
  }

  onPressMakeFund = () => {
    this.props.navigation.navigate('SendCoins', {...this.props});
  }


  onPressCreate() {
   
  }

  renderItem = ({item}) => {
      return (
        <ListItem avatar onPress={this.onPressMakeFund}>
        <Left>
          <Thumbnail source={{ uri: item.image }} />
        </Left>
        <Body>
          <Text>{item.title}</Text>
          <Text note>Doing what you like will always keep you happy . .</Text>
        </Body>
        <Right>
          <Text note>{item.total} ETH</Text>
          <Text note>{this.fiatBalance(item.total).toFixed(2)} $USD</Text> 
        </Right>
      </ListItem>   
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
