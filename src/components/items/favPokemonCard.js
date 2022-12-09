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
import {useNavigation} from '@react-navigation/native';

const FavPokemonItem = props => {
  const navigation = useNavigation();

  const {styles} = props;
  const {item} = props;
  const {deleteMe} = props;

  const [pokemon, setPokemon] = useState({apiTypes: []});
  const [color, setColor] = useState('white');

  const loadPokemon = async () => {
    let pokemonApi = await getUniquePokemon(item);
    getColorFromType(pokemonApi.apiTypes[0].name);
    setPokemon(pokemonApi);
  };

  const typeAndColor = [
    {
      type: 'Normal',
      color: '#ADA594',
    },
    {
      type: 'Combat',
      color: '#A55239',
    },
    {
      type: 'Vol',
      color: '#9BADF6',
    },
    {
      type: 'Poison',
      color: '#B45AA4',
    },
    {
      type: 'Sol',
      color: '#D7B55A',
    },
    {
      type: 'Roche',
      color: '#BDA55A',
    },
    {
      type: 'Insecte',
      color: '#ADBD20',
    },
    {
      type: 'Spectre',
      color: '#6363B5',
    },
    {
      type: 'Acier',
      color: '#ADADC6',
    },
    {
      type: 'Plante',
      color: '#7CCE51',
    },
    {
      type: 'Feu',
      color: '#F85230',
    },
    {
      type: 'Eau',
      color: '#399CFF',
    },
    {
      type: 'Électrik',
      color: '#FFC631',
    },
    {
      type: 'Psy',
      color: '#FF72A5',
    },
    {
      type: 'Glace',
      color: '#5BCEE7',
    },
    {
      type: 'Dragon',
      color: '#8858F5',
    },
    {
      type: 'Ténèbres',
      color: '#725A4A',
    },
    {
      type: 'Fée',
      color: '#E09AE3',
    },
  ];

  const getColorFromType = async type => {
    typeAndColor.forEach(element => {
      if (element.type === type) {
        setColor(element.color);
      }
    });
  };

  useEffect(() => {
    loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonPage', {item: pokemon})}>
      <View style={[styles.item, {backgroundColor: color}]}>
        <View style={styles.headerPokemonCard}>
          <Image style={styles.imageItem} source={{uri: pokemon.image}} />
          <View style={styles.rightHeaderPokemonCard}>
            <Text style={styles.itemText}>{pokemon.name}</Text>
            <Text style={styles.itemNumberText}>
              Pokemon n°{pokemon.pokedexId}
            </Text>
            <View style={styles.typeContainer}>
              <Text> Type{pokemon.apiTypes.length > 1 ? 's' : ''}: </Text>
              <TypePokemon pokemon={pokemon} />
            </View>
          </View>
          <TouchableOpacity style={styles.deleteBtn} onPress={deleteMe}>
            <Ionicons size={25} name="close-outline"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavPokemonItem;

const TypePokemon = ({pokemon}) => {
  return pokemon.apiTypes.map((type, index) => (
    <Image style={{width: 20, height: 20}} source={{uri: type.image}} />
  ));
};
