import React from "react";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { loadFavoritesApi } from "../../api/favorites";
import CatFavorites from "./component/CatFavorites";

export default function Favorites() {
  const [favorites, setFavorites] = useState();

  const loadImageInFavorites = async () => {
    // const url = 'favorites';
    const loadFavorites = await loadFavoritesApi();
    // const response = await loadImageInFavoritesApi(imageId);
    setFavorites(loadFavorites);
  };

  useEffect(() => {
    loadImageInFavorites();
  }, [favorites]);

  const renderItem = ({ item }) => <CatFavorites favorite={item} />;

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
