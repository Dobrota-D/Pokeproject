// import des paquets
import React, {useCallback, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';

//import fonction AsyncStorage
import {getUsers, setActualUser} from '../helpers/asyncStorageHelper';

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
      Alert.alert('Merci de compléter la connexion');
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
      Alert.alert('LOGIN ERROR');
    }

    console.log(filt);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Connexion</Text>
        <TextInput
          value={email}
          onChangeText={em => setemail(em)}
          style={styles.input}
          placeholder={'Email'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={password}
          onChangeText={pass => setPassword(pass)}
          style={[styles.input]}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={submit}>
          <Text>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate('RegisterPage')}>
          <Text>Inscription</Text>
        </TouchableOpacity>
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
  titleText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    borderColor: 'grey',
    backgroundColor: '#b8b8b8',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    paddingHorizontal: 10,
    height: 50,
  },
  errorInput: {
    borderColor: 'red',
  },
  submitBtn: {
    width: 200,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginPage;
