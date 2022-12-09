/* eslint-disable prettier/prettier */
import {React, useState, useEffect, useMemo} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import AppNavigator from './src/components/navigators/AppNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { getAllPokemons } from "./src/components/helpers/apiHelper";

const bgImage = require('./src/assets/img/bgdex.jpg');
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
