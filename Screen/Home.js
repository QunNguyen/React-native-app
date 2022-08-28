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
import Tab1 from './Tab1';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Search = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerUser}>
        <TouchableOpacity style={styles.backGroundHeaderUser}>
          <Image source={require('../image/userBackGround.jpg')} resizeMode="cover" style={styles.imageHeaderUser} />
        </TouchableOpacity>
      </View>
      <View style={styles.betweenHeader}>
        <Text style={styles.betweenHeaderText}>Hello, Nguyễn Văn Quân</Text>
      </View>
      <View style={styles.headerUser}>
        <TouchableOpacity style={styles.notificationHeader}>
          <Image source={require('../image/notification.png')} resizeMode="contain" style={styles.imageHeaderNotification} />
          <View style={{ backgroundColor: 'green', width: 9, height: 9, borderRadius: 20, marginLeft: 14, marginBottom: 16 }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Between = () => {
  return (
    <View style={styles.layoutBetweenInfor}>
      <View style={styles.layoutTextInput}>
        <Image source={require("../image/loupe.png")} resizeMode='contain' style={styles.betweenImageTextInput}></Image>
        <TextInput style={styles.textinput}>Location</TextInput>
        <Image source={require("../image/options.png")} resizeMode='contain' style={styles.betweenImageTextInput}></Image>
      </View>
      <View style={styles.layoutTextInput}>
        <Image source={require("../image/calendar.png")} resizeMode='contain' style={styles.betweenImageTextInput}></Image>
        <TextInput style={styles.textinput}>2/9/2023 - 2/9/2024</TextInput>
      </View>
      <View style={styles.layoutTextInput}>
        <Image source={require("../image/add-group.png")} resizeMode='contain' style={styles.betweenImageTextInput}></Image>
        <TextInput style={[styles.textinput, { width: windowWidth * 0.6 }]}>2 Guests</TextInput>
        <TouchableOpacity>
          <Image source={require("../image/plus.png")} resizeMode='contain' style={styles.betweenImageTextInput}></Image>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, width: windowWidth * 0.005, height: windowHeight * 0.045 }}></View>
        <TouchableOpacity>
          <Image source={require("../image/minus-sign.png")} resizeMode='contain' style={styles.betweenImageTextInput}></Image>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.betweenBtnSreach}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const Bottom = () => {
  return (
    <View style={styles.layoutBottom}>

    </View>
  );
}

const Home = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.top}>
          <Search></Search>
        </View>
        <View style={styles.between}>
          <Between></Between>
        </View>
        <View style={styles.bottom}>
          <Bottom />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#EEE9E9'
  },
  top: {
    height: windowHeight * 0.09,
    width: windowWidth
  },
  between: {
    height: windowHeight * 0.3,
    width: windowWidth
  },
  bottom: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#A5B5CC',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems:'center',
    marginTop:20,
  },
  layoutBottom: {
    backgroundColor:'white',
    width: windowWidth*0.9,
    height: windowHeight,
    marginTop: 20,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.09,
    flexDirection: 'row',
    alignItems: 'center',

  },
  headerUser: {
    height: windowHeight * 0.09,
    width: windowWidth * 0.15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  backGroundHeaderUser: {
    borderWidth: 0.5,
    width: windowWidth * 0.12,
    height: windowHeight * 0.058,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  imageHeaderUser: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    borderRadius: 20,
  },
  betweenHeader: {
    height: windowHeight * 0.09,
    width: windowWidth * 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  betweenHeaderText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  notificationHeader: {
    borderWidth: 0.5,
    width: windowWidth * 0.12,
    height: windowHeight * 0.058,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  imageHeaderNotification: {
    height: windowHeight * 0.035,
    width: windowHeight * 0.035,
    position: "absolute"
  },
  layoutBetweenInfor: {
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center'
  },
  layoutTextInput: {
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 10,
    height: windowHeight * 0.059,
    width: windowWidth * 0.95,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  textinput: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.055,
    fontSize: 20,
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  betweenBtnSreach: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.06,
    marginTop: 15,
    backgroundColor: '#18C0C1',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  betweenImageTextInput: {
    height: 30,
    width: 25,
    marginHorizontal: 10
  },

})

export default Home;