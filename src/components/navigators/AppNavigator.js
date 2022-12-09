import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import FavoritePage from '../screens/FavoritesPokemonPage';
import TabNavigator from './TabNavigator';

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoginPage">
      <Stack.Screen name="TabNav" component={TabNavigator} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
