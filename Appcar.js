import {StyleSheet, View} from 'react-native';
import React from 'react';
import CarsList from './src/components/CarsList';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
     <Header />
      <CarsList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
