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
import Home from './Home';

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.container
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.backgroundtabs,
                            { backgroundColor: focused ? 'white' : null }
                        ]}>
                            <Image source={require('../image/home.png')}
                                resizeMode='contain'
                                style={[
                                    styles.imagebottom,
                                    { tintColor: focused ? '#18C0C1' : 'white' }
                                ]}
                            />
                            {focused === true ? null : null}
                        </View>
                    ),
                }} />
            <Tab.Screen name="Loupe" component={Tab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.backgroundtabs,
                            { backgroundColor: focused ? 'white' : null }
                        ]}>
                            <Image source={require('../image/loupe.png')}
                                resizeMode='contain'
                                style={[
                                    styles.imagebottom,
                                    { tintColor: focused ? '#18C0C1' : 'white' }
                                ]}
                            />
                            {focused === true ? null : null}
                        </View>
                    ),
                }} />
            <Tab.Screen name="Plus" component={Tab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity>
                            <View style={[
                                styles.backgroundtabs,
                                {
                                    backgroundColor: 'white',
                                    marginBottom: 40,
                                    borderRadius:60,
                                    height:windowWidth*0.15,
                                    width:windowWidth*0.15,
                                    marginBottom:windowWidth*0.15,
                                }
                            ]}>
                                <Image source={require('../image/plus.png')}
                                    resizeMode='contain'
                                    style={[
                                        styles.imagebottom,
                                        {
                                            tintColor: 'black',

                                        }
                                    ]}
                                />
                                {focused === true ? null : null}
                            </View>
                        </TouchableOpacity>
                    ),
                }} />
            <Tab.Screen name="Location" component={Tab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.backgroundtabs,
                            { backgroundColor: focused ? 'white' : null }
                        ]}>
                            <Image source={require('../image/location.png')}
                                resizeMode='contain'
                                style={[
                                    styles.imagebottom,
                                    { tintColor: focused ? '#18C0C1' : 'white' }
                                ]}
                            />
                            {focused === true ? null : null}
                        </View>
                    ),
                }} />
            <Tab.Screen name="User" component={Tab1}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[
                            styles.backgroundtabs,
                            { backgroundColor: focused ? 'white' : null }
                        ]}>
                            <Image source={require('../image/user.png')}
                                resizeMode='contain'
                                style={[
                                    styles.imagebottom,
                                    { tintColor: focused ? '#18C0C1' : 'white' }
                                ]}
                            />
                            {focused === true ? null : null}
                        </View>
                    ),
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.95,
        height: windowHeight * 0.085,
        position: 'absolute',
        marginBottom: 15,
        marginHorizontal: windowWidth * 0.025,
        borderRadius: 20,
        backgroundColor: '#395065'
    },
    backgroundtabs: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth * 0.13,
        height: windowHeight * 0.06,
        borderRadius: 50,
    },
    imagebottom: {
        width: 22,
        height: 22,
    }
})
export default Tabs;