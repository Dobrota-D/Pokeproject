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
import {
  getFavorites,
  getActualUser,
  saveFavorites,
} from '../helpers/asyncStorageHelper';

const PokemonUniquePage = ({route, navigation}) => {
  const [favorites, setFavorites] = useState([]);
  const [actualUserId, setActualUserId] = useState(0);

  const loadFavorites = async () => {
    const userIdStorage = await getActualUser();
    setActualUserId(userIdStorage);
    const favoritesStorage = await getFavorites(userIdStorage);
    console.log(favoritesStorage);
    setFavorites(favoritesStorage);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(actualUserId, favorites);
  }, [favorites]);

  const checkFavorite = async id => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(element => element !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

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
  const [status, setStatus] = useState('Stats');
  const setStatusFilter = status => {
    setStatus(status);
  };
  const {item} = route.params;
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
          <TouchableOpacity
            style={styles.favoritesButton}
            onPress={() => checkFavorite(item.pokedexId)}>
            <Text>
              {!favorites.includes(item.pokedexId)
                ? 'Ajouter aux favoris'
                : 'Retirer des favoris'}{' '}
            </Text>
          </TouchableOpacity>
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
    height: 250,
  },
  textDetail: {
    margin: 10,
  },
  viewResistance: {
    padding: 5,
  },
  favoritesButton: {
    top: 30,
  },
});
export default PokemonUniquePage;
