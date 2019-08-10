import React from 'react';
import { View, Text, TextInput } from 'react-native';
export const FormInput = function(props) {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput style={{borderColor: '#000', borderWidth: 1}}/>
    </View>
  );
};
