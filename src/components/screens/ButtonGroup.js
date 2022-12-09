import {React, useState, useEffect, useMemo, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Dimensions,
  Pressable,
} from 'react-native';

const ButtonGroupe = ({buttons, doSomeThingAfterClick}) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (item, id) => {
    setClickedId(id);
    doSomeThingAfterClick(item);
  };

  return (
    <View style={styles.view}>
      {buttons.map((buttonLabel, index) => {
        return (
          <View>
            <TouchableOpacity
              onPress={item => handleClick(item, index)}
              key={index}
              style={index === clickedId ? styles.buttonActive : styles.button}>
              <Text>{buttonLabel}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: 'gray',
  },
  button: {
    backgroundColor: 'transparent',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  pageActive: {
    top: 50,
    display: 'flex',
  },
  page: {
    display: 'none',
  },
});

export default ButtonGroupe;
