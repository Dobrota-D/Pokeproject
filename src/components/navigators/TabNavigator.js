import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoritePage from '../screens/FavoritesPokemonPage';
import AboutUsPage from '../screens/AboutUsPage';
import PokedexList from '../screens/PokedexList';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      initialRouteName="TodosList">
      <Tab.Screen
        name="Pokedex"
        component={PokedexList}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoris"
        component={FavoritePage}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="star-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="À propos"
        component={AboutUsPage}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="alert-circle-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
