import { scale, verticalScale, moderateScale, height, width } from "../../../Styles/Dimensions/Dimentions"
import { colors } from "../../../Styles/colors/Colors";import React from 'react';
import {View,Alert, Text,ImageBackground,TouchableOpacity,TouchableHighlight,Pressable, Image, StyleSheet, TextInput, ScrollView} from 'react-native';
const EmptyProducts = (props) => {
    return(
        <View style={{flex: 1, backgroundColor: '#ffffff',}}>
<View style={{left:verticalScale(40),top:height/6}}>
    
    <Image
        style={{
          right:verticalScale(40),
            alignSelf:"center",
            //height: height/40,
            width: width/2,
          height:height/5,
elevation:9,
        }}
        source={require("../../../assets/wishlist.png")}
      ></Image></View>
          <View style={{alignSelf:"center",top:height/6}}><Text style={{fontWeight:"bold",fontSize:20}}>No Products </Text>
          </View>
      <View style={{ alignSelf:"center",paddingTop:scale(220),top:height/18}}><Text style={{fontSize:15,fontWeight:"600"}}>Please choose Another Category</Text></View>

    </View>
    )//#1b9cc5
}
const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 10,
      backgroundColor: '#dddddd',
      alignItems: 'center',
      margin:scale(10),
     top: scale(-420),
      height: height / 18,
      flexDirection: 'row',
      width: width / 2.4,
      alignSelf: 'flex-start',
    },

    buttonContainer2: {
 borderRadius: 10,
      backgroundColor: '#dddddd',
      alignItems: 'center',
      margin:scale(10),
      marginLeft:scale(55),
     top: scale(-420),
      height: height / 18,
      flexDirection: 'row',
      width: width / 2.4,
      alignSelf: 'flex-end',
      },
      buttonContainer3: {
        fontWeight:"600",
                alignItems: 'center',
               top: scale(-1200),
                flexDirection: 'row',
                alignSelf: 'center',
              },
})  
export default EmptyProducts