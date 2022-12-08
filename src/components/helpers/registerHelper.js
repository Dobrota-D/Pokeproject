import {AsyncStorage} from '@react-native-community/async-storage';

export const registerHelper = async user => {
  await AsyncStorage.setItem('register', JSON.stringify(user));
};

export const getRegister = async () => {
  const user = await AsyncStorage.getItem('register');
  console.log(JSON.parse(user));
};
