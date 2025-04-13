import React from "react";
import { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { loadFavoritesApi, loadImageInFavoritesApi } from "../../api/favorites";
import CatFavorites from "./component/CatFavorites";

export default function Favorites({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  // const [prevFavorites, setPrevFavorites] = useState(favorites);

  const loadImageInFavorites = async () => {
    const loadFavorites = await loadFavoritesApi();
    setFavorites(loadFavorites);
  };

  // useEffect(() => {
  //   loadImageInFavorites();
  // }, []);

  // useEffect(() => {});

   useFocusEffect(
     React.useCallback(() => {
       // Do something when the screen is focused
       loadImageInFavorites();
       console.log("focused");
       return () => {
         console.log("unfocused");
         // Do something when the screen is unfocused
         // Useful for cleanup functions
       };
     }, [])
  );
  
  const renderItem = ({ item }) => (
    <CatFavorites
      favorite={item}
      setFavorites={setFavorites}
      favorites={favorites}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={favorites} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF8F8",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 37,
  },
});
