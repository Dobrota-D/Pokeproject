import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import FavoritePage from '../screens/FavoritesPokemonPage';
import TabNavigator from './TabNavigator';

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TabNav">
      <Stack.Screen name="TabNav" component={TabNavigator} />
      {/* <Stack.Screen name="Favorite" component={FavoritePage} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
