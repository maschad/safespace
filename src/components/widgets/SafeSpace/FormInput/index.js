import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
export const FormInput = function({label, onChange, name}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={{borderColor: '#000', borderWidth: 1}} onChangeText={onChange(name)}/>
    </View>
  );
};
