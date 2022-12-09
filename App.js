/* eslint-disable prettier/prettier */
import { React, useState, useEffect, useMemo } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import { getAllPokemons } from './src/components/helpers/apiHelper';
import PokedexList from "./src/components/screens/PokedexList";


const bgImage = require('./src/assets/img/bgdex.jpg');
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
      <PokedexList>

      </PokedexList>
  );
};




export default App;
