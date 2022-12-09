import {React, useState, useEffect, useMemo, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Dimensions,
  Pressable,
} from 'react-native';
import {getUniquePokemon} from '../helpers/apiHelper';

const PokemonUniquePage = () => {
  const listeTab = [
    {
      status: 'Stats',
    },
    {
      status: 'Evolutions',
    },
    {
      status: 'Resistances',
    },
  ];
  const [status, setStatus] = useState('Overview');
  const setStatusFilter = status => {
    setStatus(status);
  };

  const item = {
    apiEvolutions: [],
    apiGeneration: 1,
    apiPreEvolution: {name: 'Piafabec', pokedexIdd: 21},
    apiResistances: [
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Normal'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Combat'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Vol'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Poison'},
      {damage_multiplier: 0, damage_relation: 'immune', name: 'Sol'},
      {damage_multiplier: 2, damage_relation: 'vulnerable', name: 'Roche'},
      {damage_multiplier: 0.5, damage_relation: 'resistant', name: 'Insecte'},
      {damage_multiplier: 0, damage_relation: 'immune', name: 'Spectre'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Acier'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Feu'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Eau'},
      {damage_multiplier: 0.5, damage_relation: 'resistant', name: 'Plante'},
      {damage_multiplier: 2, damage_relation: 'vulnerable', name: 'Électrik'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Psy'},
      {damage_multiplier: 2, damage_relation: 'vulnerable', name: 'Glace'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Dragon'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Ténèbres'},
      {damage_multiplier: 1, damage_relation: 'neutral', name: 'Fée'},
    ],
    apiResistancesWithAbilities: [],
    apiTypes: [
      {
        image:
          'https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png',
        name: 'Normal',
      },
      {
        image:
          'https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png',
        name: 'Vol',
      },
    ],
    id: 22,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
    name: 'Rapasdepic',
    pokedexId: 22,
    resistanceModifyingAbilitiesForApi: [],
    slug: 'Rapasdepic',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    stats: {
      HP: 65,
      attack: 90,
      defense: 65,
      special_attack: 61,
      special_defense: 61,
      speed: 100,
    },
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewColumn}>
        <View style={styles.viewPokemon} />
        <Image
          style={styles.imagePokemon}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.textPokedexId}>{item.pokedexId}</Text>
        <Text style={styles.textNamePokemon}>{item.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textTypePokemon}>
            Type {item.apiTypes[0].name}
          </Text>
          <Image
            source={{uri: item.apiTypes[0].image}}
            style={{width: 20, height: 20, top: 23, margin: 5}}
          />
        </View>
        <View style={styles.viewRow}>
          {listeTab.map(e => (
            <TouchableOpacity
              style={status === e.status ? styles.btnTabAcitve : styles.btn}
              onPress={() => setStatusFilter(e.status)}>
              <Text>{e.status}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {status == 'Stats' ? (
          <View style={styles.viewDetail}>
            <Text style={styles.textDetail}>HP : {item.stats.HP}</Text>
            <Text style={styles.textDetail}>Attack : {item.stats.attack}</Text>
            <Text style={styles.textDetail}>
              Defense : {item.stats.defense}
            </Text>
            <Text style={styles.textDetail}>
              Special attack : {item.stats.special_attack}
            </Text>
            <Text style={styles.textDetail}>
              Special defense : {item.stats.special_defense}
            </Text>
            <Text style={styles.textDetail}>Speed : {item.stats.speed}</Text>
          </View>
        ) : null}
        {status == 'Evolutions' ? <View style={styles.viewDetail} /> : null}
        {status == 'Resistances' ? (
          <View style={styles.viewDetail}>
            <FlatList
              data={item.apiResistances}
              renderItem={({item}) => (
                <View style={styles.viewResistance}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: 'antiquewhite',
                      padding: 5,
                    }}>
                    {item.name}
                  </Text>
                  <Text>Damage multiplier : {item.damage_multiplier}</Text>
                  <Text>Damage relation : {item.damage_relation}</Text>
                </View>
              )}
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  viewColumn: {
    alignItems: 'center',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
  },
  viewPokemon: {
    height: 200,
    width: 200,
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
    borderRadius: 200,
    position: 'relative',
    top: 110,
  },
  imagePokemon: {
    height: 200,
    width: 200,
    position: 'absolute',
    top: 60,
  },
  textPokedexId: {
    margin: 50,
    textAlign: 'center',
    top: 20,
    fontWeight: '100',
  },
  textNamePokemon: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    top: 20,
  },
  textTypePokemon: {
    top: 30,
    fontWeight: '200',
  },
  viewRow: {
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  btnTabAcitve: {
    backgroundColor: 'antiquewhite',
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    padding: 10,
  },
  viewDetail: {
    top: 80,
    margin: 5,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
  },
  textDetail: {
    margin: 10,
  },
  viewResistance: {
    padding: 5,
  },
});
export default PokemonUniquePage;
