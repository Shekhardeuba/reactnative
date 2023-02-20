import React from 'react';
import { View } from 'react-native';
import Store from './comp/Store';
import {Provider} from 'react-redux';

const App = () => {
  return (
      <Provider store = {Store}>

      </Provider>
    
  )
};