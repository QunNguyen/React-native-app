/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Main from './Screen/Main';
import Login from './Screen/Login';
import Tabs from './Screen/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const tab=createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown :false}}>
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen name="Main" component={Main}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // <Main></Main>
  );
};

export default App;
