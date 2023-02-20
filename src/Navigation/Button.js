import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({title, Press}) {
  return (
    <TouchableOpacity onPress={Press}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
