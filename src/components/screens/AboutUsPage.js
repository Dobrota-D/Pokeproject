import React, {useCallback, useState} from 'react';
import {Users} from '../model/user';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AboutUsPage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const submit = () => {
    const userTest = Users.filter(
      user => user.email === email && user.password === password,
    );
    console.log(userTest);
    if (userTest.length > 0) {
      navigation.navigate('TabNav');
    } else if (!email || !password) {
      Alert.alert('Merci de compléter la connexion');
      return;
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.titleContainer}> Qu'est-ce que c'est ?</Text>
          <Text style={styles.description}>
            Cette application est une Pokédex réalisée en React Native avec
            l'API Pokebuild. Elle permet d'afficher des informations sur les
            différents Pokémon de la série.
          </Text>
          <Text style={styles.titleContainer}> Nos fonctionnalités </Text>
          <Text style={styles.description}>
            Affichage des informations de base sur les Pokémon (nom, numéro de
            l'édition, type, etc.) Recherche de Pokémon par nom ou numéro
            d'édition Affichage des attaques et talents des Pokémon Possibilité
            de marquer les Pokémon comme favoris pour un accès rapide
          </Text>
          <Text style={styles.titleContainer}> Qui sommes-nous ?</Text>
          <View style={styles.developpersContainer}>
            <Text style={styles.nameDev}>Mathieu DA MOTA LONGO</Text>
            <Text style={styles.nameDev}> Johanna TARENTO </Text>
            <Text style={styles.nameDev}> Kévin DOBROTA </Text>
            <Text style={styles.nameDev}> Léo GRÉGORI </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    fontSize: 22,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: '600',
  },
  containerView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  developpersContainer: {
    marginVertical: 8,
    flexDirection: 'column',
    width: '80%',
    alignItems: 'center',
  },
  description: {
    width: '80%',
    fontSize: 16,
    textAlign: 'center',
  },
  nameDev: {
    marginBottom: 6,
  },
});

export default AboutUsPage;
