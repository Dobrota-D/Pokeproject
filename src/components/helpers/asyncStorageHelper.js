import AsyncStorage from '@react-native-async-storage/async-storage';

export const getActualUser = async () => {
  let userId = await AsyncStorage.getItem('userConnectedId');
  return userId;
};

export const setActualUser = async id => {
  await AsyncStorage.setItem('userConnectedId', JSON.stringify(id));
};

export const getUsers = async () => {
  let json = (await AsyncStorage.getItem('users')) ?? '[]';
  if (json === []) {
    return json;
  }
  const data = JSON.parse(json);
  return data;
};

export const addUser = async user => {
  let users = await getUsers();
  users = [...users, user];
  const json = JSON.stringify(users);
  await AsyncStorage.setItem('users', json);
};

export const deleteUser = async id => {
  let users = await getUsers();
  users = users.filter(user => user.id !== id);
  const json = JSON.stringify(users);
  await AsyncStorage.setItem('users', json);
};

export const getFavorites = async id => {
  let json = await AsyncStorage.getItem(`favorites_${id}`);
  let favorites = await JSON.parse(json);
  if (favorites === null) {
    await saveFavorites(id, []);
  }
  return favorites;
};

export const saveFavorites = async (id, favorites) => {
  // favorites = [54, 65, 78, 64, 7, 67, 34, 22];
  const json = JSON.stringify(favorites);
  await AsyncStorage.setItem(`favorites_${id}`, json);
};
