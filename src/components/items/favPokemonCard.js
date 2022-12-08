import {React, useState, useEffect, useMemo, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';
import {getUniquePokemon} from '../helpers/apiHelper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavPokemonItem = props => {
  const {styles} = props;
  const {item} = props;
  const {deleteMe} = props;

  const [pokemon, setPokemon] = useState({apiTypes: []});

  const loadPokemon = async () => {
    let pokemonApi = await getUniquePokemon(item);
    setPokemon(pokemonApi);
  };

  useEffect(() => {
    loadPokemon();
  }, [item]);

  const displayTypes = () => {
    return pokemon.apiTypes.map((type, index) => (
      <Image style={{width: 20, height: 20}} source={{uri: type.image}} />
    ));
  };

  return (
    <View style={styles.item}>
      <View style={styles.headerPokemonCard}>
        <Image style={styles.imageItem} source={{uri: pokemon.image}} />
        <View style={styles.rightHeaderPokemonCard}>
          <Text style={styles.itemText}>{pokemon.name}</Text>
          <Text style={styles.itemNumberText}>
            Pokemon n°{pokemon.pokedexId}
          </Text>
          <View style={styles.typeContainer}>
            <Text> Type{pokemon.apiTypes.length > 1 ? 's' : ''}: </Text>
            {displayTypes()}
          </View>
        </View>
        <TouchableOpacity style={styles.deleteBtn} onPress={deleteMe}>
          <Ionicons size={25} name="close-outline"></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavPokemonItem;
