// import des paquets
import React, {useCallback, useState} from 'react';
<<<<<<< Updated upstream
import {registerHelper, getRegister} from '../helpers/registerHelper';
=======
<<<<<<< Updated upstream
=======
import {useNavigation} from '@react-navigation/native';
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import {
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';

//import des fonction Asynchelper
// import {registerHelper, getRegister} from '../helpers/registerHelper';
import {addUser, getUsers} from '../helpers/asyncStorageHelper';

const RegisterPage = () => {
  const [email, setemail] = useState('');
  const [pseudo, setpseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

<<<<<<< Updated upstream
  getRegister();

  const submit = () => {
=======
<<<<<<< Updated upstream
  const onSubmit = useCallback(() => {
=======
  getUsers();

  const submit = () => {
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    registerHelper({
=======
<<<<<<< Updated upstream

=======
    addUser({
>>>>>>> Stashed changes
      email: email,
      pseudo: pseudo,
      password: password,
    });
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    Alert.alert(
      'Bonjour ' +
        pseudo +
        ' votre email est ' +
        email +
        ', votre mot de passe est ' +
        password,
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Inscription</Text>
        <TextInput
          value={email}
          onChangeText={em => setemail(em)}
          style={styles.input}
          placeholder={'e-mail'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={pseudo}
          onChangeText={pseu => setpseudo(pseu)}
          style={styles.input}
          placeholder={'pseudo'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={password}
          onChangeText={pass => setPassword(pass)}
          style={[styles.input, !isPasswordValid && styles.errorInput]}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
          onEndEditing={validatePassword}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={[styles.input, !isConfirmPasswordValid && styles.errorInput]}
          placeholder={'Confirmation du mot de passe'}
          secureTextEntry={true}
          onEndEditing={validateConfirmPassword}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={submit}>
          <Text>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate('LoginPage')}>
          <Text>Retour connexion</Text>
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

export default RegisterPage;
