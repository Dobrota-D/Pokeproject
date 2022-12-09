/* eslint-disable prettier/prettier */
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
  ImageBackground,
} from 'react-native';
import {
  getActualUser,
  getFavorites,
  saveFavorites,
} from '../helpers/asyncStorageHelper';
import FavPokemonItem from '../items/favPokemonCard';

const backgroundImage = require('../../assets/img/backgroundFavPage.jpg');

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [actualUserId, setActualUserId] = useState(0);

  const loadFavorites = async () => {
    const userIdStorage = await getActualUser();
    setActualUserId(userIdStorage);
    const favoritesStorage = await getFavorites(userIdStorage);
    setFavorites(favoritesStorage);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(actualUserId, favorites);
  }, [favorites]);

  if (!favorites) {
    return null;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={backgroundImage} resizeMode={'cover'} />
      <View style={styles.container}>
        <Text style={styles.titlePage}> Favoris </Text>
        <FlatList
          scrollEnabled={true}
          style={styles.list}
          data={favorites}
          renderItem={({item, index}) => (
            <FavPokemonItem
              key={index}
              styles={styles}
              item={item}
              deleteMe={() =>
                setFavorites(favorites.filter(element => element !== item))
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  list: {
    width: '90%',
    flex: 1,
  },
  item: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  deleteBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(232, 94, 94, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 15,
  },
  deleteBtnText: {
    paddingVertical: 7,
  },
  itemText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '600',
  },
  imageItem: {
    width: 60,
    height: 60,
    marginLeft: 16,
  },
  titlePage: {
    fontSize: 30,
    marginVertical: 16,
  },
  headerPokemonCard: {
    marginVertical: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightHeaderPokemonCard: {
    marginRight: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemNumberText: {
    fontSize: 10,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FavoritePage;
