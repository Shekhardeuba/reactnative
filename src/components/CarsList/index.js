import {View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import CarItems from '../Caritems';
import cars from './cars';
import styles from './styles';

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItems car={item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
