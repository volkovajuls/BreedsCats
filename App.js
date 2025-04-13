import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Breeds from "./src/screens/Breeds/index";
import AboutBreed from "./src/screens/AboutBreed/index";
import Favorites from "./src/screens/Favorites/index";

const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Breeds"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Breeds" component={Breeds} />
      <Stack.Screen name="AboutBreed" component={AboutBreed} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
