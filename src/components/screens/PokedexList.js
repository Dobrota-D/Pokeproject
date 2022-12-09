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

import { getAllPokemons } from '../helpers/apiHelper';
import PokedexTile from "./PokedexTile";


const background = require('../../assets/img/bgdex.jpg');
const backgroundpkm = require('../../assets/img/pkballbg.png');
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
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground source={background} style={styles.ImageBackground}>
                    <FlatList style={styles.list}
                        data={displayList}
                        renderItem={({ item }) => (
                            <>
                                <PokedexTile pokemon={item}/>
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
