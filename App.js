import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Breeds from './src/screens/Breeds/index';
import AboutBreed from './src/screens/AboutBreed/index';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Breeds"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Breeds" component={Breeds} />
      <Stack.Screen name="AboutBreed" component={AboutBreed} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
