import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight ,TouchableOpacity,Card
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {colors,width,height,scale,verticalScale, Size} from '../Config/Theme';
import HeaderwithoutMenu from "../Components/HeaderwithoutMenu";

const CategoryViewaallComponent=(props)=>{

    const navigation = useNavigation();

   const { item } = props;
//alert(JSON.stringify(item))
return ( 
    
  <View style={{flex:1,backgroundColor:colors.white,justifyContent:"space-between",  alignSelf: 'center',marginVertical:8,paddingBottom:10,borderWidth:1,borderColor:"#D3D3D3",marginHorizontal:6,
  overflow:'hidden',
  elevation:4,
  }}>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Products",{ name: JSON.stringify(item.id),            category:item.name
        })
    }>
    
        <View style={{height:120,width:width/2.3,overflow:'hidden',alignSelf:"center",padding:5}}>
      <Image
        style={styles.image}
        source={{uri: item.image.src}}
      /></View>
      <View style={{flex:0.2,alignSelf:"center",justifyContent:"center",marginHorizontal:8,height:height/20}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize:12,
            fontFamily:"Poppins-SemiBold"
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  </View> 
);
  }




const styles = StyleSheet.create({
  view1: {
    alignSelf: 'center',
    marginHorizontal:5,
 //   marginLeft: width / 20,
  //  marginRight: width / 20,
    overflow:'hidden',
//    backgroundColor: colors.lightactivedotcolor,
    elevation:4,
    backgroundColor:colors.cement,
    width:100,
  },
  image: {    flex: 1,resizeMode: 'cover',height:"100%",width:"100%"},
})
export default CategoryViewaallComponent
