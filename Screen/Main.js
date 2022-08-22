import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SectionList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';

import Tabs from './Tabs';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 

const Main = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer independent={true}>
        <Tabs></Tabs>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#EEE9E9',
    justifyContent:'center',
  },
})

export default Main;