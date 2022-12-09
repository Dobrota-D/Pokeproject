/* eslint-disable prettier/prettier */
import { React, useState, useEffect, useMemo } from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    View,
    Image,
    SafeAreaView,
    ImageBackground, TouchableOpacity, Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const PokedexTile = (props) => {
    const {pokemon} = props


    return (
        <TouchableOpacity >
            <View style={styles.container}>
            <Image style={styles.pkmimg} source={{uri:pokemon.sprite}}/>
            <Text>{pokemon.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth / 2 - 10,
        height: windowWidth / 2 - 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    pkmimg: {
        height: 75,
        width: 75,
    },
    pkmbg: {
        height: 75,
        width: 75,
    },
});

export default PokedexTile;
