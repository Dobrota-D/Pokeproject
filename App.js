/* eslint-disable prettier/prettier */
import {React, useState, useEffect, useMemo, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {getAllPokemons} from './src/components/helpers/apiHelper';

import axios from 'axios';

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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={displayList}
          renderItem={({item}) => (
            <>
              <Text> {item.name} </Text>
              <Image
                style={{height: 100, width: 100}}
                source={{
                  uri: item.image,
                }}
              />
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
// Second Exercice

export default App;
