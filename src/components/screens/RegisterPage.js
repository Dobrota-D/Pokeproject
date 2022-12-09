// import des paquets
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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

//import des fonction Asynchelper
import {addUser, getUsers, setActualUser} from '../helpers/asyncStorageHelper';

const RegisterPage = () => {
  const [email, setemail] = useState('');
  const [pseudo, setpseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [users, setUsers] = useState([]);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const navigation = useNavigation();

  const validateConfirmPassword = useCallback(() => {
    setIsConfirmPasswordValid(password === confirmPassword);
  }, [confirmPassword, password]);

  const validatePassword = useCallback(() => {
    setIsPasswordValid(password.length > 3);

    validateConfirmPassword();
  }, [password, validateConfirmPassword]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setUsers(await getUsers());
  };

  const submit = async () => {
    if (
      !email ||
      !pseudo ||
      !password ||
      !confirmPassword ||
      !isPasswordValid ||
      !isConfirmPasswordValid
    ) {
      Alert.alert('Merci de compléter le formulaire');
      return;
    }
    let id = Math.random();
    await addUser({
      id: id,
      email: email,
      pseudo: pseudo,
      password: password,
    });
    await setActualUser(id);
    Alert.alert(
      'Bonjour ' +
        pseudo +
        ' votre email est ' +
        email +
        ', votre mot de passe est ' +
        password,
    );
    navigation.navigate('TabNav');
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <View style={styles.viewstyle}>
          <Text style={styles.titleText}>Inscription</Text>
          <Text style={styles.corText}>
            Entrez vos informations pour vous connecter
          </Text>
          <TextInput
            value={email}
            onChangeText={em => setemail(em)}
            style={styles.input}
            placeholder={'Entrer votre adresse mail'}
            placeholderTextColor="grey"
          />
          <TextInput
            value={pseudo}
            onChangeText={pseu => setpseudo(pseu)}
            style={styles.input}
            placeholder={'Entrer votre pseudo'}
            placeholderTextColor="grey"
          />
          <TextInput
            value={password}
            onChangeText={pass => setPassword(pass)}
            style={[styles.input, !isPasswordValid && styles.errorInput]}
            placeholder={'Entrer votre Mot de passe'}
            secureTextEntry={true}
            onEndEditing={validatePassword}
          />
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={[styles.input, !isConfirmPasswordValid && styles.errorInput]}
            placeholder={'Confirmer votre mot de passe'}
            secureTextEntry={true}
            onEndEditing={validateConfirmPassword}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={submit}>
            <Text>Inscription</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitBtsignin}
            onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{color: 'blue'}}>Retour connexion</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  viewstyle: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  titleText: {
    color: 'black',
    fontSize: 40,
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
  submitBtsignin: {
    alignContent: 'space-around',
    height: 40,
    marginVertical: 20,
    alignSelf: 'center',

    placeholderTextColor: 'green',
  },
});

export default RegisterPage;
