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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SGIN_IN = 'SGIN_IN';
const GET_STARTED = 'GET_STARTED';

const Top = ({ page, setPage }) => {
  return (
    <View>
      <View style={styles.layoutTop1}>
        <ImageBackground source={require('../image/backgroundHeader.jpg')} style={styles.layoutTop1Imagebackground} resizeMode='cover' >
          <Text style={{ fontSize: 60, fontWeight: '800', color: 'white' }}>Travel.</Text>
          <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Think for nature</Text>
        </ImageBackground>
      </View>
      <View style={styles.layoutTop2}>
        <TouchableOpacity style={styles.layoutTop2Touch}
          onPress={() => { setPage(SGIN_IN) }}
          disabled={page === SGIN_IN ? true : false}>
          <Text style={{ fontSize: 25, fontWeight: '500', color: 'black' }}>
            Đăng Nhập
          </Text>
          {page === SGIN_IN ?
            <View style={styles.layoutTop2Slide} /> : null
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.layoutTop2Touch}
          onPress={() => { setPage(GET_STARTED) }}
          disabled={page === GET_STARTED ? true : false}>
          <Text style={{ fontSize: 25, fontWeight: '500', color: 'black' }}>Đăng Ký</Text>
          {page === GET_STARTED ?
            <View style={styles.layoutTop2Slide} /> : null
          }
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BetweenLogin = ({ Navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passHidden, setPassHidden] = useState(true);
  const dangnnhap = () => {

  }
  return (
    <View style={styles.layoutBetween}>
      <Text style={{
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 30,
        color: 'black'
      }}>Login in your account</Text>
      <View style={{ alignItems: 'center' }}>
        {/* email */}
        <View style={styles.layoutBetweenLoginTextInput}>
          <Image source={require('../image/email.png')} style={styles.layoutBetweenLoginTextInputImage} resizeMode='contain'></Image>
          <TextInput
            style={styles.layoutBetweenLoginTextInputStyle}
            placeholder='E-mail'
            autoCapitalize={false}>
          </TextInput>
        </View>

        {/* password */}
        <View style={styles.layoutBetweenLoginTextInput}>
          <Image source={require('../image/padlock.png')} style={styles.layoutBetweenLoginTextInputImage} resizeMode='contain'></Image>
          <TextInput
            style={styles.layoutBetweenLoginTextInputStyle}
            placeholder='Password'
            secureTextEntry={passHidden ? true : false} // set trang thai cua password
            autoCapitalize={false}>
          </TextInput>
          <TouchableOpacity style={{ height: '100%', justifyContent: 'center', }}
            onPress={() => { setPassHidden(!passHidden) }
              //kich hoat chuc nang hien/an password
            }
          >
            <Image source={require('../image/3.png')} style={{ height: 20, width: 20,marginHorizontal:10,}} resizeMode='contain'></Image>
          </TouchableOpacity>
        </View>

      </View>
      {/* Forgot password */}
      <View style={{ width: windowWidth - 60, marginLeft: 20, marginTop: 20, alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          <Text>Forgot password ?</Text>
        </TouchableOpacity>
      </View>

      {/* Btn Login */}
      <View style={{ alignItems: 'center', marginTop: 20, }}>
        <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#18C0C1', height: 50, width: '70%', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}
          onPress={() => {
            Navigation.navigate('Main');
          }}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: '500' }}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const BetweenSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConFirmPassHidden] = useState(true);
  const [passHidden, setPassHidden] = useState(true);
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#EEE9E9' }}>
      <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 20 }}>Create new account</Text>

      {/* email */}
      <View style={{ width: windowWidth - 60, height: 50, marginLeft: 20, marginTop: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 20 }}>
        <Image source={require('../image/email.png')} style={{ height: 30, width: 40, marginHorizontal: 5 }} resizeMode='contain'></Image>
        <TextInput style={{ height: '100%', flex: 1, marginLeft: 10 }}
          placeholder='E-mail'
          autoCapitalize={false}>
        </TextInput>
      </View>

      {/* password */}
      <View style={{ width: windowWidth - 60, height: 50, marginLeft: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 20 }}>
        <Image source={require('../image/padlock.png')} style={{ height: 30, width: 40, marginHorizontal: 5 }} resizeMode='contain'></Image>
        <TextInput style={{ height: '100%', flex: 1, marginLeft: 10 }}
          placeholder='Password'
          secureTextEntry={passHidden ? true : false} // set trang thai cua password
          autoCapitalize={false}>
        </TextInput>
        <TouchableOpacity style={{ height: '100%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => { setPassHidden(!passHidden) }
            //kich hoat chuc nang hien/an password
          }
        >
          <Image source={require('../image/3.png')} style={{ height: 20, width: 20, marginRight: 10, marginLeft: 10 }} resizeMode='contain'></Image>
        </TouchableOpacity>
      </View>

      {/* confirm_password */}
      <View style={{ width: windowWidth - 60, height: 50, marginLeft: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 20 }}>
        <Image source={require('../image/padlock.png')} style={{ height: 30, width: 40, marginHorizontal: 5 }} resizeMode='contain'></Image>
        <TextInput style={{ height: '100%', flex: 1, marginLeft: 10 }}
          placeholder='Confirm password'
          secureTextEntry={confirm_password ? true : false} // set trang thai cua password
          autoCapitalize={false}>
        </TextInput>
        <TouchableOpacity style={{ height: '100%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => { setConFirmPassHidden(!confirm_password) }
            //kich hoat chuc nang hien/an password
          }
        >
          <Image source={require('../image/3.png')} style={{ height: 20, width: 20, marginRight: 10, marginLeft: 10 }} resizeMode='contain'></Image>
        </TouchableOpacity>
      </View>

      {/* Btn Login */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#18C0C1', height: 50, width: '70%', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: '500' }}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Bottom = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#EEE9E9' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40, width: windowWidth - 60, marginLeft: 30, marginTop: 10 }}>
        <View style={{ borderWidth: 1, width: '35%', backgroundColor: 'black' }}></View>
        <Text style={{ marginHorizontal: 10, fontSize: 15 }}>Or connect with</Text>
        <View style={{ borderWidth: 1, width: '35%', backgroundColor: 'black' }}></View>
      </View>

      <View style={{ flexDirection: 'row', height: 55, width: windowWidth - 60, marginLeft: 30, marginTop: 20, justifyContent: 'center' }}>
        <TouchableOpacity style={{ borderWidth: 1, height: 55, width: '50%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 20, marginRight: 10 }}>
          <Image source={require('../image/facebook.png')} style={{ height: 40, width: 30, marginHorizontal: 10 }} resizeMode='contain'></Image>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 1, height: 55, width: '50%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 20 }}>
          <Image source={require('../image/google.png')} style={{ height: 40, width: 30, marginHorizontal: 10 }} resizeMode='contain'></Image>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: 55, width: windowWidth - 60, marginLeft: 30, marginTop: 20, justifyContent: 'center' }}>
        <TouchableOpacity style={{ borderWidth: 1, height: 55, width: '50%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 20, marginRight: 10 }}>
          <Image source={require('../image/twitter.png')} style={{ height: 40, width: 30, marginHorizontal: 10 }} resizeMode='contain'></Image>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 1, height: 55, width: '50%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 20 }}>
          <Image source={require('../image/github.png')} style={{ height: 40, width: 30, marginHorizontal: 10 }} resizeMode='contain'></Image>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Github</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: SGIN_IN
    }
  }
  render() {
    return (
      <ScrollView style={styles.container} >
        <View style={styles.top}>
          <Top page={this.state.page} setPage={(page) => {
            this.setState({
              page: page
            })
          }}></Top>
        </View>

        <View style={styles.between}>
          {this.state.page === SGIN_IN ?
            <BetweenLogin Navigation={this.props.navigation} /> : <BetweenSignin />
          }
        </View>

        <View style={styles.bottom}>
          <Bottom />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth
  },
  top: {
    height: windowHeight * 0.31,
    width: windowWidth,
  },
  between: {
    height: windowHeight * 0.4,
    width: windowWidth,

  },
  bottom: {
    height: windowHeight * 0.29,
    width: windowWidth
  },
  text: {
    color: 'black',
  },
  layoutTop1: {
    backgroundColor: '#18C0C1',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight * 0.245,
    width: windowWidth
  },
  layoutTop1Imagebackground: {
    height: windowHeight * 0.25,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  layoutTop2: {
    height: windowHeight * 0.065,
    width: windowWidth,
    flexDirection: 'row'
  },
  layoutTop2Touch: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.065,
    alignItems: 'center',
    justifyContent: 'center'
  },
  layoutTop2Slide: {
    height: 2,
    width: windowWidth * 0.5,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0
  },
  layoutBetween: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EEE9E9',
  },
  layoutBetweenLoginTextInput: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.07,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  },
  layoutBetweenLoginTextInputImage:
  {
    height: 30,
    width: 40,
    marginHorizontal: 10
  },
  layoutBetweenLoginTextInputStyle: {
    width:windowWidth*0.64
  }
})

const mapStateToProps = (state) => ({
  loginedEmail: state.auths.loginedEmail,
})

const mapDispatchToProps = (dispatch) => ({
  login: async (email, password) => dispatch(login(email, password)),
})



export default connect(mapStateToProps, mapDispatchToProps)(Login)
