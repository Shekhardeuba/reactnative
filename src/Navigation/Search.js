import {View, Text} from 'react-native';
import React from 'react';
import Button from './Button';
export default function Search(props) {
  return (
    <View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          textTransform: 'uppercase',
        }}>
        Search
      </Text>
      <Button
        title="go to setting "
        Press={() => props.navigation.navigate('Setting')}
      />
    </View>
  );
}
