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


const bgImage = require('./src/assets/img/bgpokedex.jpg');
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={bgImage} style={styles.ImageBackground}>
          <FlatList
            data={displayList}
            renderItem={({ item }) => (
              <>
                <Text> {item.name} </Text>
                <Image
                  style={{ height: 100, width: 100 }}
                  source={{
                    uri: item.image,
                  }}
                />
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
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity : 1
  },

});

export default App;
