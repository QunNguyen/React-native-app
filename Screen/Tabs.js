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

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "./Main";
import Login from "./Login";
import Tab1 from './Tab1';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }
            }}
        >
            <Tab.Screen name="Home" component={Tab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? 'red' : 'black',
                                }}
                            />
                             {focused===true ?<Text style={{ color: focused ? 'red' : 'black', fontSize: 10 }}>Home</Text>:null }
                        </View>
                    ),
                }} />
            <Tab.Screen name="Phonebook" component={Tab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/phonebook.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? 'red' : 'black'
                                }}
                            />
                             {focused===true ?<Text style={{ color: focused ? 'red' : 'black', fontSize: 10 }}>Phonebook</Text>:null }
                        </View>
                    ),
                }} />
            <Tab.Screen name="Option" component={Tab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/option.png')}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? 'red' : 'black'
                                }}
                            />
                            {focused===true ?<Text style={{ color: focused ? 'red' : 'black', fontSize: 10 }}>Option</Text>:null }
                            
                        </View>
                    ),
                }} />
            <Tab.Screen name="History" component={Tab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/history.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'red' : 'black'
                                }}
                            />
                             {focused===true ?<Text style={{ color: focused ? 'red' : 'black', fontSize: 10 }}>History</Text>:null }
                        </View>
                    ),
                }} />
        </Tab.Navigator>
    );
}
export default Tabs;