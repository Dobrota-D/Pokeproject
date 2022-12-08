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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  getActualUser,
  getFavoritesOfUser,
  saveFavorites,
} from '../helpers/asyncStorageHelper';
import FavPokemonItem from '../items/favPokemonCard';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [actualUserId, setActualUserId] = useState(0);

  const loadFavorites = useCallback(async () => {
    setActualUserId(await getActualUser());
    const favoritesStorage = await getFavoritesOfUser(actualUserId);
    setFavorites(favoritesStorage[0].favorites);
  }, [actualUserId, setActualUserId, setFavorites]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  useEffect(() => {
    saveFavorites(actualUserId, favorites);
  }, [favorites, actualUserId]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.titlePage}> Favoris </Text>
        <FlatList
          scrollEnabled={true}
          style={styles.list}
          data={favorites}
          renderItem={({item}) => (
            <FavPokemonItem
              styles={styles}
              item={item}
              deleteMe={() => {
                setFavorites(favorites.filter(element => element !== item));
              }}
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
    backgroundColor: '#B0AFAF',
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
    backgroundColor: 'white',
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
