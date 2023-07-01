/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';
import InitialStack from './src/stack/initialStack'
import 'react-native-gesture-handler';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <InitialStack />
    </View>
  )
}


export default App;
