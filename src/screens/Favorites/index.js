import React from 'react';
import { useEffect, useState } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';

import {loadFavorites } from '../../api/favorites';


axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'live_jiHKfaFn1XSRWlorH2WxwnmltLB5laAsQQjPFV03bAhTON0WczTTFBTufoYIQE0Q';

export default function App() {
  const [favorites, setFavorites] = useState();

  const loadImageInFavorites = async (imageId) => {
    const url = 'favorites';

    try {
      const response = await axios.get(url, { image_id: imageId });
      if (response?.data) {
        setFavorites(response?.data);
      }
    } catch (error) {
      console.log('load', error);
    }
  };

  const deleteImageFromFavorites = async (favoritesId) => {
    const url = `favorites/${favoritesId}`;
    console.log('url', url);
    try {
      const response = await axios.delete(url);
      console.log('response Delete', response);
    } catch (error) {
      console.log('delete', error);
    }
  };

  useEffect(() => {
    loadImageInFavorites();
  }, []);

  function CatFavorites({ favorite }) {
    return (
      <View style={styles.button}>
        <View>
          <Image style={styles.image} source={{ uri: favorite?.image?.url }} />
           <TouchableOpacity
          style={styles.closeContainer}
          onPress={() => deleteImageFromFavorites(favorite?.id)}>
          <Image style={styles.close} source={require('./close.png')} />
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  const renderItem = ({ item }) => <CatFavorites favorite={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={favorites} renderItem={renderItem} />
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
  image: {
    width: 200,
    height: 200,
    // aspectRatio: 1,
    borderRadius: 16,
  },

  button: {
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center',
  },

  closeContainer: {
    position: 'absolute',
    top: 2,
    right: 3,
    zIndex: 10,
  },
  close: {
    width: 30,
    height: 30,
  },
});
