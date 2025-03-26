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

export default function CatBreed({ breed, onPress}) {
    return (
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={() => onPress(breed)}>
        <View style={styles.buttonContainer}>
          <Image style={styles.image} source={{ uri: breed?.image?.url }} />
          <View>
            <Text style={styles.text}>{breed.name} </Text>
            <Text style={styles.description}>{breed.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: 5,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    marginHorizontal: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 25,
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 11,

    elevation: 2,
  },
});