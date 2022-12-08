import AsyncStorage from '@react-native-async-storage/async-storage';

export const getActualUser = async () => {
  let json = await AsyncStorage.getItem('userConnectedId');
  return json;
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

export const getFavoritesOfUser = async id => {
  let favorites = await getFavorites();
  favorites = favorites.filter(favorite => {
    if (favorite.userId === parseInt(id, 10)) {
      return favorite;
    }
  });
  return favorites;
};

export const getFavorites = async () => {
  let json = await AsyncStorage.getItem('favorites');
  let favorites = JSON.parse(json);
  return favorites;
};

export const saveFavorites = async (id, favorites) => {
  const data = await getFavorites();
  // favorites = [54, 65, 78, 64, 7, 67, 34, 22];
  data.forEach(favorite => {
    if (favorite.userId === parseInt(id, 10)) {
      favorite.favorites = favorites;
    }
  });
  const json = JSON.stringify(data);
  // await AsyncStorage.setItem('favorites', json);
};
