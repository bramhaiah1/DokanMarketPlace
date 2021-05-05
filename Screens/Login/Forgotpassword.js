  
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,TextInput
} from "react-native";

import {colors,width,height,scale,verticalScale} from '../../Config/Theme';


const ForgotPassword = ({ errorText, navigation, ...props }) => {
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
      
      <Image
        style={{
          height: "30%",
          width: "100%",
top:verticalScale(-10)
        }}
        source={require("../../assets/coverde.jpeg")}
      ></Image>
      <View style={{top:verticalScale(90),
}}>
     <Text style={{left:scale(40),color:"#808080"}}>Type usename or email</Text>

        <TextInput       
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={""}
          style={styles.textBox} /></View>
          
          <View style={{alignItems:"flex-start",top:verticalScale(170)}}>
      <TouchableOpacity 
                onPress={() => navigation.navigate("LoginScreen")}

        style={{    justifyContent: "center",borderRadius:10,left:scale(40),
 paddingRight:scale(50),paddingLeft:scale(50),backgroundColor:"rgba(115,149,160,255)",height:verticalScale(80)}}>
        <Text style={{ color:"#fff",fontSize:20,  fontWeight:"bold" }}
        >Send</Text>
       
      </TouchableOpacity>
      </View>
       
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#FFFFFF",
  },
  textBox: {
    left:scale(40),
        elevation: 9,
    paddingLeft:10,
top:verticalScale(10),
width:width/1.2,
    fontSize: 22,
    height: verticalScale(110),
    backgroundColor: '#fff',
  // backgroundColor:"#FFFF",
borderRadius:10,
  color: 'black',
  borderColor:"#fff",
  fontSize:20,
  borderWidth:2,
  borderColor:"black"
  },
  
  
});
export default ForgotPassword;