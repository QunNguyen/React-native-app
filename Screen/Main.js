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

const Search =()=>{
  return (
    <View style={{ height: '100%', backgroundColor: '#4D8D', flexDirection: 'row', alignItems: 'center',borderBottomStartRadius:20,borderBottomEndRadius:20}}>
      <Image source={require('../image/magnifying-glass.png')} style={{ height: 30, width: 40, marginHorizontal:7 }} resizeMode='contain' ></Image>
      <TextInput style={{ height: '80%', width: '60%', borderRadius: 20, fontSize: 20}}
        placeholder="Tìm kiếm"
      ></TextInput>
      <View style={{flexDirection:'row',marginHorizontal:10}}>
        <TouchableOpacity>
          <Image source={require('../image/qr-code.png')} style={{ height: 30, width: 40, }} resizeMode='contain' ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../image/plus.png')} style={{ height: 30, width: 40, }} resizeMode='contain' ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Between=()=>{
  return(
    <View>
    
    </View>
  );
}

const Bottom=()=>{
  return(
    // <View style={{ height: 55, width: '100%', flexDirection: 'row', backgroundColor: '#F2F2F2' }}>
    //   <TouchableOpacity style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}>
    //     <Image source={require('../image/chatting.png')} style={{ height: 35, width: 40 }} resizeMode='contain'></Image>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}>
    //     <Image source={require('../image/phonebook.png')} style={{ height: 35, width: 40 }} resizeMode='contain'></Image>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}>
    //     <Image source={require('../image/chatting.png')} style={{ height: 35, width: 40 }} resizeMode='contain'></Image>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}>
    //     <Image source={require('../image/chatting.png')} style={{ height: 35, width: 40 }} resizeMode='contain'></Image>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}>
    //     <Image source={require('../image/chatting.png')} style={{ height: 35, width: 40 }} resizeMode='contain'></Image>
    //   </TouchableOpacity>
    // </View>
    <View></View>
  );
}


const Main=()=>{
    return(
      <View style={{flex:1}}>
        <View style={{height:windowHeight/12,width:'100%',justifyContent:'center'}}>
          <Search></Search>
        </View>
        <NavigationContainer independent={true}>
          <Tabs></Tabs>
        </NavigationContainer>
      </View>
    );
}
export default Main;