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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const DATA = [
  {
    image: require('../image/1.png'),
    tilte: "Thời tiết",
    content: 'Hà Nội nay mưa',
  },
  {
    image: require('../image/1.png'),
    tilte: "Thời tiết",
    content: 'Hà Nội nay mưa',
  }, 
  {
    image: require('../image/1.png'),
    tilte: "Thời tiết",
    content: 'Hà Nội nay mưa',
  }, 
  {
    image: require('../image/1.png'),
    tilte: "Thời tiết",
    content: 'Hà Nội nay mưa',
  },   
]

const List = ({item}) => {
  return (
    <View style={{ flex: 1, height: windowHeight / 12, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
      <Image source={item.image} resizeMode='contain' style={{ height: 40, width: 40, borderWidth: 2, marginHorizontal: 10,}}></Image>
      <View style={{ flexDirection: 'column', marginHorizontal: 10, width: '100%' }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.tilte}</Text>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>{item.content}</Text>
        <View style={{ borderBottomWidth: 0.2, width: '100%', marginVertical: 5 }}></View>
      </View>
    </View>

  );
}

const Tab1 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
      <FlatList
        data={DATA}
        renderItem={List}
      />
    </View>
  );
}
export default Tab1;