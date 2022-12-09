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

const PokemonUniquePage = () => {

  const listeTab = [
    {
      status: 'Stats'
    },
    {
      status: 'Evolutions'
    },
    {
      status: 'Resistances'
    }
  ]
  const [status, setStatus] = useState('Overview');
  const setStatusFilter = status => {
    setStatus(status);
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewColumn}>
        <View style={styles.viewPokemon}></View>
        <Image style={styles.imagePokemon}
               source={{
                 uri: item.image,
               }}
        />
        <Text style={styles.textPokedexId}>{item.pokedexId}</Text>
        <Text style={styles.textNamePokemon}>{item.name}</Text>
        <Text style={styles.textTypePokemon}>Type {item.apiTypes[0].name}</Text>
        <View style={styles.viewRow}>
          {
            listeTab.map(e => (
              <TouchableOpacity style={status === e.status ? styles.btnTabAcitve : styles.btn} onPress={() => setStatusFilter(e.status)}>
                <Text>{e.status}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        {status == "Stats" ?
          <View style={styles.viewDetail}>
            <Text style={styles.textDetail}>HP : {item.stats.HP}</Text>
            <Text style={styles.textDetail}>Attack : {item.stats.attack}</Text>
            <Text style={styles.textDetail}>Defense : {item.stats.defense}</Text>
            <Text style={styles.textDetail}>Special attack : {item.stats.special_attack}</Text>
            <Text style={styles.textDetail}>Special defense : {item.stats.special_defense}</Text>
            <Text style={styles.textDetail}>Speed : {item.stats.speed}</Text>
          </View> : null}
        {status == "Evolutions" ?
          <View style={styles.viewDetail}>
          </View> : null}
        {status == "Resistances" ?
          <View style={styles.viewDetail}>
            <FlatList data={item.apiResistances} renderItem={({item}) => (
              <View style={styles.viewResistance}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>Damage multiplier : {item.damage_multiplier}</Text>
                <Text>Damage relation : {item.damage_relation}</Text>
              </View>
            )}
            />
          </View> : null}
      </View>
    </SafeAreaView>
  );
}

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
    flex: 1,
    height: 200,
    width: 200,
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
    borderRadius: 200,
    position: 'relative',
    top: 150,
  },
  imagePokemon: {
    height: 200,
    width: 200,
    position: 'absolute',
    top: 100,
  },
  textPokedexId: {
    margin: 50,
    textAlign: 'center',
    top: 60,
    fontWeight: '100',
  },
  textNamePokemon: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    top: 50,
  },
  textTypePokemon: {
    top: 50,
    fontWeight: '200',
  },
  viewRow: {
    top: 100,
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
    top: 120,
    margin: 5,
    flexDirection: 'column',
  },
  textDetail: {
    textAlign: 'center',
    margin: 5,
  },
  viewResistance: {
    padding: 5,
  },
});
export default PokemonUniquePage;
