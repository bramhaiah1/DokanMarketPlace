  
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,TextInput
} from "react-native";
import  Entypo  from "react-native-vector-icons/Entypo";
import  FontAwesome  from "react-native-vector-icons/FontAwesome";

import {colors} from '../../../Styles/colors/Colors';

import {
    scale,
    verticalScale,
    moderateScale,
    height,
    width,
  } from '../../../Styles/Dimensions/Dimentions';
const LoginScreen = ({ errorText, navigation, ...props }) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true)
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  //const [press, showPass] = useState(true);


  const _onSignUpPressed = async () => {
    navigation.navigate("product")

    
  };





  return (
    <View style={styles.container}>
       <View style={{alignSelf:"center",marginTop:height/10,marginBottom:height/10}}
              >
        <Text style={{color:"black",fontWeight:"bold",fontSize:25,}}>Sign In</Text>
       </View>
             <View style={{alignSelf:"center"}}>
      <FontAwesome
          style={styles.inputIcons}
          name="envelope-square"
          size={30}
          color="black"
        />

        <TextInput       
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={"Email"}
          placeholderTextColor={colors.backgroundcolor}

          style={styles.textBox} />
          </View>
             <View style={{alignSelf:"center"}}>
                     <Entypo style={styles.inputIcons} name="lock" size={25} color="black" />
                 
        <TextInput       
          placeholder={"Password"}
          placeholderTextColor={colors.backgroundcolor}
          secureTextEntry={visible}
          returnKeyType="done"

          style={styles.textBox} />
          </View>
      <TouchableOpacity style={styles.btneye}
          onPress={() => {
            setVisible(!visible)
            setshow(!show)
          }}>
          <FontAwesome name={show === false ? 'eye' : 'eye-slash'} size={25}  color="#808080" style={{alignSelf:"center"}}
 />
        </TouchableOpacity>   
     <View style={{alignItems:"center",top:verticalScale(170)}}>
      <TouchableOpacity 
                onPress={() => navigation.navigate("Homescreen")}

        style={{    justifyContent: "center",borderRadius:10,
 paddingRight:scale(250),paddingLeft:scale(250),backgroundColor:"rgba(115,149,160,255)",height:verticalScale(100)}}>
        <Text style={{ fontSize:20,color:"#fff",fontWeight:"bold"  }}
          >Login</Text>
       
      </TouchableOpacity>
      </View> 
        <TouchableOpacity style={styles.forgotPassword}
          onPress={() => navigation.navigate("Forgotpassword")}
        >
          <Text style={styles.label1}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.account}
          onPress={() =>navigation.navigate("Registrationscreen")}
        >
          <Text style={styles.label2}>Create New Account</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#FFFFFF",
   
  },
  textBox: {
    margin: "3%" ,
    elevation: 9,
    paddingLeft:width/7,
top:height/20,
width:width/1.2,
    fontSize: 22,
    height: height/13,
    backgroundColor: '#fff',
  // backgroundColor:"#FFFF",
borderRadius:10,
  color: 'black',
  borderColor:"#fff",
  fontSize:20
  },
  inputIcons: {
    position: "absolute",
    top: verticalScale(110),
    left: scale(40),
    elevation:10,
    color:"#808080"


  },
  inputContainer1: {
    marginTop: 20,
    top: 25,
    //position: "absolute",
  },
 

  btneye: {
    top: verticalScale(-30),
    left:scale(220),
    elevation:10
  },
  
  label1: {
      marginTop:30,
      marginLeft:180,
      color:"#808080",
      alignItems:"flex-end"


  },
  label2: {
 alignContent:"center",
 fontSize:20,
    color:"#808080",



},
textlabe2:{
    top:-57,
},
  text: {
    color: "darkblue",
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
  },
  error: {
    fontSize: 14,
    color: "#FF0000",
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  errorview: {
    fontSize: 100,
  },
  label: {
    fontSize: 26,
    color: "#ffff",
    fontWeight: "bold",
    right: -89,
    bottom: 40,
    position: "absolute",
  },
  container2: {
    fontSize: 30,
    bottom: 280,
    position: "absolute",
  },
  textlabel: {
    position: "absolute",
    alignItems:"center",
    left:115,
    fontFamily: "sans-serif",

  },
  forgotPassword: {
    width: "100%",

    alignItems: "flex-end",
    marginBottom: 24,
   top:verticalScale(-100),
   right:scale(70)
  },
  account: {
    width: "100%",
    alignItems: "center",
    top:verticalScale(120),
  },
});
export default LoginScreen;