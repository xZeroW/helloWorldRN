import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

const stackNavigator = createStackNavigator();

export default function Routes() {
  return(
  <NavigationContainer>
    <stackNavigator.Navigator>
      <stackNavigator.Screen name="Home" component={Home} />
    </stackNavigator.Navigator>
  </NavigationContainer>
  );
}