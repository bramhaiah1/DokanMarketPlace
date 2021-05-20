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

import {colors, width, height, scale, verticalScale,Radius,Size} from '../../Config/Theme';

const Registrationscreen = ({errorText, navigation, ...props}) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [name, setName] = useState({value: '', error: ''});
  //const [press, showPass] = useState(true);

  const [hide, setHide] = React.useState(false);
  const [hide1, setHide1] = React.useState(false);

  const _onSignUpPressed = async () => {
    navigation.navigate('product');
  };

  return (
    <View style={{flex: 1,backgroundColor: colors.white,
    }}>
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
      <View style={{ alignSelf:"center", marginVertical:30}}>
        <Text style={{fontFamily: 'Poppins-SemiBold',color:colors.white,textAlign:"center",fontSize:Size.primarysize,}}>MARKETPLACE</Text>
      {/* <Image resizeMode={"contain"}  style={{height:100,backgroundColor:colors.white,width:100,alignSelf:"center",marginTop:50,borderRadius:200}} source={require("../../assets/market.png") }/> */}
      </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignSelf:"center",width:"85%"}}>
          <View
            style={{
              backgroundColor: colors.white,
borderWidth:1,borderColor:colors.Primary,
              // alignSelf: 'flex-end',
              padding:18,
              borderRadius: 40,
            }}>
                          <Text style={{fontSize:25,fontFamily: 'Poppins-SemiBold',alignSelf:"center",borderBottomColor:colors.Primary,borderBottomWidth:0,width:"100%",textAlign:"center"}}>Registration</Text>

            <TextInput
              placeholder={'User Name'}
              
              style={{
                width:'100%',
                fontFamily:"Poppins-ExtraLight",

                paddingVertical:8,
                paddingHorizontal:20,
                borderRadius: Radius.Textbox,
                borderWidth: 1,
                alignSelf: 'center',
                borderColor:colors.gray,

                marginTop: height / 20,
              }}
            />
             <TextInput
              placeholder={'Email'}
              style={{
                width:'100%',
                fontFamily:"Poppins-ExtraLight",

                paddingVertical:8,
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
              secureTextEntry={!hide1}
              style={{
                width:'100%',
                fontFamily:"Poppins-ExtraLight",

                paddingVertical:8,
                paddingHorizontal:20,
                borderColor:colors.gray,
                                borderRadius: Radius.Textbox,
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: height / 20,
  
              }}
            />
             <TextInput
              placeholder={'ConfirmPassword'}
              secureTextEntry={!hide}
              style={{
                width:'100%',
                fontFamily:"Poppins-ExtraLight",

                paddingVertical:8,
                paddingHorizontal:20,
                borderColor:colors.gray,
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
{hide1 ? (
              <Feather
                onPress={() => setHide1(!hide1)}
                name="eye"
                size={20}
                style={{alignSelf: 'flex-end',                   right: width / 20,                    bottom: height / 5.7,
                bottom: height / 5.7,

              }}
              />
            ) : (
              <Feather
                onPress={() => setHide1(!hide1)}
                name="eye-off"
                size={20}
                style={{
                  alignSelf: 'flex-end',
                  right: width / 20,
                  bottom: height / 5.7,
                }}
              />
            )}

            
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                height: height / 20,
                width:"100%",
                                backgroundColor: colors.Primary,
                alignSelf: 'center',
                borderRadius: Radius.size,
                marginTop: height / 40,
              }}>
              <Text style={{textAlign: 'center',color:colors.light,fontFamily: 'Poppins-SemiBold'}}>Register</Text>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                marginTop: height / 30,
                fontFamily: 'Poppins-SemiBold',                left:width/30
              }}>Already Have an Account ?<Text  onPress={()=>navigation.navigate("LoginScreen")} style={{               fontFamily: 'Poppins-SemiBold',color:colors.Primary
}}> Login</Text>            </Text>
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
export default Registrationscreen;
