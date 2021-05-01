  
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,TextInput
} from "react-native";

// import { TextInput } from 'react-native-gesture-handler';
import  Ionicons  from "react-native-vector-icons/Ionicons";
import  Entypo  from "react-native-vector-icons/Entypo";
import  FontAwesome  from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

import {colors} from '../../../Styles/colors/Colors';

import {
    scale,
    verticalScale,
    moderateScale,
    height,
    width,
  } from '../../../Styles/Dimensions/Dimentions';
const RegistrationScreen = ({ errorText, navigation, ...props }) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true)
  const [show1, setshow1] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true)
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  //const [press, showPass] = useState(true);


  const _onSignUpPressed = async () => {
    navigation.navigate("product")

    
  };





  return (
    <View style={styles.container}>
       <ScrollView>
       <View style={{alignSelf:"center",marginTop:height/20}}>
      <Ionicons
          style={styles.inputIcons}
          name="ios-person-add"
          size={25}
          color="black"
        />

        <TextInput    
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={"Name"}
          placeholderTextColor={colors.backgroundcolor}

          style={styles.textBox} /></View>
       <View style={{alignSelf:"center"}}>
      <FontAwesome
          style={styles.inputIcons}
          name="envelope-square"
          size={24}
          color="black"
        />

        <TextInput       
  textContentType="emailAddress"
  placeholderTextColor={colors.backgroundcolor}

          keyboardType="email-address"
          placeholder={"Email"}
          style={styles.textBox} /></View>  
       <View style={{alignSelf:"center"}}>
          <Entypo style={styles.inputIcons} name="lock" size={25} color="black" />
      
<TextInput       
placeholder={"Password"}
placeholderTextColor={colors.backgroundcolor}

secureTextEntry={visible1}

style={styles.textBox} />
</View>
<View style={{alignSelf:"center"}}>
                     <Entypo style={styles.inputIcons} name="lock" size={25} color="black" />
                 
        <TextInput       
          placeholder={"Confirm Password"}
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
        <TouchableOpacity style={styles.btneye1}
          onPress={() => {
            setVisible1(!visible1)
            setshow1(!show1)
          }}>
          <FontAwesome name={show1 === false ? 'eye' : 'eye-slash'} size={25}  color="#808080" style={{alignSelf:"center"}}
 />
        </TouchableOpacity>   
     
        <View style={{alignItems:"center",}}>
      <TouchableOpacity 
                onPress={() => navigation.navigate("switch")}

        style={{    justifyContent: "center",borderRadius:10,
 paddingRight:scale(250),paddingLeft:scale(250),backgroundColor:"rgba(115,149,160,255)",height:height/15}}>
        <Text style={{ color:"#fff",fontSize:20, fontWeight:"bold"  }}
        >Sign up</Text>
       
      </TouchableOpacity>
      </View>
   
        
          <Text style={styles.label2}>Already Have an Account ?<Text onPress={() => navigation.navigate("LoginScreen")} style={{color:"#0000FF",fontSize:18,fontWeight:"bold"}} > Login</Text></Text>
          </ScrollView>
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
    paddingRight:width/7,

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
    left: width/15,
    elevation:10,
    color:"#808080",
top:height/15

  },
  
 
  
  btneye: {
    bottom: height/15,
    left:width/3,
    elevation:10
  },
  
  
  btneye1: {
    bottom: height/4.2,
    left:width/3,
    elevation:10
  },
  
  Signin:{ 
     
  backgroundColor:"black"},

  label1: {
      position: "absolute",
      marginTop:30,
      marginLeft:180,
      color:"#808080",
      alignItems:"flex-end"


  },
  label2: {
 alignSelf:"center",
 fontSize:20,
    color:"#808080",
marginTop:height/15


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
  
 
});
export default RegistrationScreen;