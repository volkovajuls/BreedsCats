import React from 'react';
import { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import 'react-native-gesture-handler';
import { dataBreeds } from '../../api/breeds';
import CatBreed from './component/CatBreed'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App({ navigation }) {
  const [breeds, setBreeds] = useState();

  const loadDataBreeds = async () => {
    const loadBreeds = await dataBreeds();

    setBreeds(loadBreeds);
  };

  useEffect(() => {
    loadDataBreeds();
  }, []);

  const OnClickCat = (breed) => {
    navigation.navigate('AboutBreed', {breed});
    console.log('OnClickCat',{breed});
  };
  const RenderItem = ({ item }) => (
    <CatBreed breed={item} onPress={OnClickCat} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={breeds}
        renderItem={RenderItem}
        //keyExtractor={(item) => item.name + item.city}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8F8',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 37,
  },
});
