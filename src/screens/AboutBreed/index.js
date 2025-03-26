import React from 'react';
import { useEffect, useState } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { loadRandomImage } from '../../api/breeds';
import { saveImageInFavorites, loadFavorites } from '../../api/favorites';

export default function App({ navigation, route }) {
  const catBreed = route.params?.breed;

  // console.log('catBreed name  ', catBreed?.name);

  const [imageUrl, setImageUrl] = useState('');
  const [nameBreed, setNameBreed] = useState('');
  const [descriptionBreed, setDescriptionBreed] = useState('');
  const [imageId, setImageId] = useState();

  const loadImage = async () => {
    const dataCat = await loadRandomImage(catBreed.id);
    setImageUrl(dataCat?.url);
    setImageId(dataCat.id);
    setNameBreed(dataCat.breeds[0]?.name);
    setDescriptionBreed(dataCat.breeds[0]?.description);
  };

  useEffect(() => {
    loadImage();
    //loadFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.circle}>
          <Image
            style={styles.imageIcon}
            source={require('../../assets/Icon.png')}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.bodyContainer}>
        <View style={[styles.image, styles.shadow]}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <Text style={styles.text}>{nameBreed} </Text>
        <ScrollView>
          <Text style={styles.description}>{descriptionBreed}</Text>
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => loadImage()}>
          <Text style={styles.buttonText}>Другое фото</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => saveImageInFavorites(imageId)}>
            Добавить в избранное
          </Text>
        </TouchableOpacity>
      </View>
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
  bodyContainer: { marginTop: 29 },

  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 42,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 31,
  },
  buttonText: {
    color: '#5533EA',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  button: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 43,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  imageIcon: {
    height: 14,
    width: 8,
    marginVertical: 15,
    left: 18,
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    //marginLeft: 24,
  },
});
