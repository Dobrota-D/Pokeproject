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

import {getAllPokemons} from '../helpers/apiHelper';
import PokedexTile from './PokedexTile';

const background = require('../../assets/img/bgdex.jpg');
const PokedexList = () => {
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
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.ImageBackground}>
          <FlatList
            style={styles.list}
            data={displayList}
            renderItem={({item}) => (
              <>
                <PokedexTile pokemon={item} />
              </>
            )}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});

export default PokedexList;
