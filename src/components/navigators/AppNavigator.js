import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import TabNavigator from './TabNavigator';
import PokemonUniquePage from "../screens/PokemonUniquePage";
import AboutUsPage from '../screens/AboutUsPage';

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoginPage">
      <Stack.Screen name="TabNav" component={TabNavigator} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="PokemonPage" component={PokemonUniquePage} />
      <Stack.Screen name="AboutUsPage" component={AboutUsPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
