import {View, Text} from 'react-native';
import React from 'react';
import Button from './Button';

export default function Home(props) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="go to Search "
        Press={() => props.navigation.navigate('Search')}
      />
    </View>
  );
}
