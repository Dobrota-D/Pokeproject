import React, {useCallback, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';

const LoginPage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = useCallback(() => {
    if (!email || !password) {
      Alert.alert('Merci de compléter le formulaire');
      return;
    }
  }, [email, password]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Connexion</Text>
        <TextInput
          value={email}
          onChangeText={setemail}
          style={styles.input}
          placeholder={'Prénom'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={[styles.input, styles.errorInput]}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
          <Text>Connexion</Text>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginBottom: 20,
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
