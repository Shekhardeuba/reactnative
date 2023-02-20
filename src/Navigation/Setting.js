import {View, Text} from 'react-native';
import React from 'react';
import Button from './Button';

export default function Setting(props) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title = "go to Home " Press = {() => props.navigation.navigate('Home')} />
    </View>
  );
}
