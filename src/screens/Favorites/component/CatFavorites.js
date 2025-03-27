import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';  

import { deleteImageFromFavoritesApi } from '../../../api/favorites';

export default function CatFavorites({ favorite }) {
    return (
      <View style={styles.button}>
        <View>
          <Image style={styles.image} source={{ uri: favorite?.image?.url }} />
           <TouchableOpacity
          style={styles.closeContainer}
          onPress={() => deleteImageFromFavoritesApi(favorite?.id)}>
          <Image style={styles.close} source={require('../../../assets/close.png')} />
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
