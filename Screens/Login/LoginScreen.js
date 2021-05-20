import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Login} from '../../Config/API'
import {colors, width, height, scale, verticalScale,Radius,Size} from '../../Config/Theme';
import AnimatedLoader from 'react-native-animated-loader';

const LoginScreen = ({errorText, navigation, ...props}) => {
 
  const [email, setEmail] = useState('Rishiraj')
  const [password, setPassword] = useState('Rishi2021?!');
  const API_Call=()=>{
    setHide1(true)
    const fb = new FormData(); 
    fb.append('username', email);
    fb.append('password', password);
   
    Login(navigation,fb)
  }
  const [hide, setHide] = React.useState(false);
  const [hide1, setHide1] = React.useState(false);

  const _onSignUpPressed = async () => {
    navigation.navigate('product');
  };

  return (
   hide1?<AnimatedLoader
    visible={hide1}
    overlayColor={colors.Animationoverlay}
    source={require('../HomeScreen/animation.json')}
    animationStyle={{
      width: 100,
      height: 100,
    }}
    speed={1}
  />
:
   <View style={{flex: 1}}>
       
                
      <ScrollView >
      <View
        style={{
          position: 'absolute',
          backgroundColor: colors.Primary,
          height: height / 3,
          width: width,

          borderBottomLeftRadius: Radius.size,
          borderBottomRightRadius: Radius.size,
        }}
      />
      <View style={{ alignSelf:"center", }}>
        {/* <Text style={{fontWeight:"bold",color:colors.white,textAlign:"center",fontSize:Size.primarysize,marginTop:70}}>MARKETPLACE</Text> */}
      <Image resizeMode={"contain"}  style={{height:60,backgroundColor:colors.purple,width:200,alignSelf:"center",marginVertical:50,borderRadius:200}} source={require("../../assets/attlogo.png") }/>
      </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignSelf:"center",width:"80%"}}>
          <View
            style={{
              elevation: 10,
              backgroundColor: colors.white,

              // alignSelf: 'flex-end',
              padding:18,
              borderRadius: 40,
              marginBottom: 80,
            }}>
                          <Text style={{fontSize:25,fontFamily: 'Poppins-SemiBold',alignSelf:"center",borderBottomColor:colors.Primary,borderBottomWidth:0,width:"100%",textAlign:"center"}}>Login</Text>

            <TextInput
              placeholder={'User Name'}
              placeholderTextColor={colors.Primary}
              onChangeText={(text)=>setEmail(text)}
              value={email}
              style={{
                width:'100%',
                paddingVertical:8,
                fontFamily:"Poppins-ExtraLight",

                paddingHorizontal:20,
                borderRadius: Radius.Textbox,
                borderWidth: 1,
                alignSelf: 'center',
                borderColor:colors.gray,

                marginTop: height / 20,
              }}
            />
            <TextInput
              placeholder={'Password'}
              
              onChangeText={(text)=>setPassword(text)}
              value={password}
              secureTextEntry={!hide}
              placeholderTextColor={colors.Primary}

              style={{
                width:'100%',
                paddingVertical:8,
                paddingHorizontal:20,
                borderColor:colors.gray,
                fontFamily:"Poppins-ExtraLight",
                                borderRadius: Radius.Textbox,
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: height / 20,
  
              }}
            />
            {hide ? (
              <Feather
                onPress={() => setHide(!hide)}
                name="eye"
                size={20}
                style={{alignSelf: 'flex-end',                   right: width / 20,                  bottom: height / 28,

              }}
              />
            ) : (
              <Feather
                onPress={() => setHide(!hide)}
                name="eye-off"
                size={20}
                style={{
                  alignSelf: 'flex-end',
                  right: width / 20,
                  bottom: height / 28,
                }}
              />
            )}

            <Text
              style={{
                alignSelf: 'flex-end',
                fontFamily: 'Poppins-SemiBold'
              }}>
              ForgotPassword?
            </Text>
            <TouchableOpacity  
            onPress={()=>API_Call()}
              style={{
                justifyContent: 'center',
                height: height / 20,
                width:"100%",
                                backgroundColor: colors.Primary,
                alignSelf: 'center',
                borderRadius: Radius.size,
                marginTop: height / 40,
              }}>
              <Text style={{textAlign: 'center',color:colors.light,fontFamily: 'Poppins-SemiBold'}}>Login</Text>
            </TouchableOpacity >
            <Text onPress={()=>navigation.navigate("Registrationscreen")}
              style={{
                alignSelf: 'center',
                marginTop: height / 30,
                fontFamily: 'Poppins-SemiBold'              }}>
              Create an account
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },
  textBox: {
    margin: '3%',
    elevation: 9,
    paddingLeft: width / 7,
    top: height / 20,
    width: width / 1.2,
    fontSize: 22,
    height: height / 13,
    backgroundColor: '#fff',
    // backgroundColor:"#FFFF",
    borderRadius: 10,
    color: 'black',
    borderColor: '#fff',
    fontSize: 20,
  },
  inputIcons: {
    position: 'absolute',
    top: verticalScale(110),
    left: scale(40),
    elevation: 10,
    color: '#808080',
  },
  inputContainer1: {
    marginTop: 20,
    top: 25,
    //position: "absolute",
  },

  btneye: {
    top: verticalScale(-30),
    left: scale(220),
    elevation: 10,
  },

  label1: {
    marginTop: 30,
    marginLeft: 180,
    color: '#808080',
    alignItems: 'flex-end',
  },
  label2: {
    alignContent: 'center',
    fontSize: 20,
    color: '#808080',
  },
  textlabe2: {
    top: -57,
  },
  text: {
    color: 'darkblue',
    fontSize: 21,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  error: {
    fontSize: 14,
    color: '#FF0000',
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  errorview: {
    fontSize: 100,
  },
  label: {
    fontSize: 26,
    color: '#ffff',
    fontWeight: 'bold',
    right: -89,
    bottom: 40,
    position: 'absolute',
  },
  container2: {
    fontSize: 30,
    bottom: 280,
    position: 'absolute',
  },
  textlabel: {
    position: 'absolute',
    alignItems: 'center',
    left: 115,
    fontFamily: 'sans-serif',
  },
  forgotPassword: {
    width: '100%',

    alignItems: 'flex-end',
    marginBottom: 24,
    top: verticalScale(-100),
    right: scale(70),
  },
  account: {
    width: '100%',
    alignItems: 'center',
    top: verticalScale(120),
  },
});
export default LoginScreen;
