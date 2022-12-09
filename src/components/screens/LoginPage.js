// import des paquets
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
  StyleSheet,
  View,
} from 'react-native';

//import fonction AsyncStorage
import {getUsers} from '../helpers/asyncStorageHelper';

const LoginPage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setUsers(await getUsers());
  };

  //submit du bouton connexion
  const submit = async () => {
    if (!email || !password) {
      Alert.alert('Merci de compléter le formulaire de connexion');
      return;
    }
    const user = await getUsers();
    //console.log(user);
    const filt = user.filter(
      el => el.email === email && el.password === password,
    );

    if (filt.length > 0) {
      navigation.navigate('TabNav');
    } else {
      Alert.alert('Login ou mot de passe incorrecte');
    }

    console.log(filt);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
        }}
      />
      <Text style={styles.title2Text}>PokéFactory</Text>
      <ScrollView style={styles.container}>
        <View style={styles.viewstyle}>
          <Text style={styles.titleText}>Connexion</Text>
          <Text style={styles.corText}>
            Entrez vos informations pour vous connecter
          </Text>
          <View style={{marginVertical: 20}}>
            <TextInput
              value={email}
              onChangeText={em => setemail(em)}
              style={styles.input}
              placeholder={'Entrer votre adresse mail'}
              placeholderTextColor="grey"
            />
            <TextInput
              value={password}
              onChangeText={pass => setPassword(pass)}
              style={[styles.input]}
              placeholder={'Entrer votre mot de passe'}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.submitBtn} onPress={submit}>
              <Text>Connexion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitBtsignup}
              onPress={() => navigation.navigate('RegisterPage')}>
              <Text style={{color: 'blue'}}>Inscription</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitBtabout}
              onPress={() => navigation.navigate('AboutUsPage')}>
              <Text style={{color: 'blue'}}>À propos de nous</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    paddingTop: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  img: {
    marginVertical: 10,
    width: 190,
    height: 190,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title2Text: {
    color: 'black',
    fontSize: 38,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  corText: {
    color: 'grey',
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderColor: 'grey',
    backgroundColor: '#b8b8b8',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 20,
    paddingHorizontal: 10,
    height: 50,
    fontWeight: 'bold',
    fontSize: 13,
  },
  errorInput: {
    borderColor: 'red',
  },
  submitBtn: {
    width: 250,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtsignup: {
    alignContent: 'space-around',
    height: 40,
    left: 30,
    marginVertical: 20,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    placeholderTextColor: 'green',
  },
  submitBtabout: {
    alignContent: 'space-around',
    height: 40,
    right: 30,
    marginVertical: -58,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
});

export default LoginPage;
