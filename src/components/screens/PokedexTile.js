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
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {getUniquePokemon} from '../helpers/apiHelper';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const PokedexTile = props => {
  const {pokemon} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonPage', {item: pokemon})}>
      <View style={styles.container}>
        <Image style={styles.pkmimg} source={{uri: pokemon.sprite}} />
        <Text>{pokemon.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 3 - 10,
    height: windowWidth / 3 - 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  pkmimg: {
    height: 100,
    width: 100,
  },
  pkmbg: {
    height: 75,
    width: 75,
  },
});

export default PokedexTile;
