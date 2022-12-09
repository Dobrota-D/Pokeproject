/* eslint-disable prettier/prettier */
import {React, useState, useEffect, useMemo, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {getAllPokemons} from './src/components/helpers/apiHelper';

import AppNavigator from './src/components/navigators/AppNavigator';

const App = () => {
  const [list, setList] = useState([]);

  const getPokemons = async () => {
    setList(await getAllPokemons());
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const displayList = useMemo(() => {
    return list;
  }, [list]);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
