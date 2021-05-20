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


const ProductComponent=(props)=>{

    const navigation = useNavigation();

   const { item } = props;
//alert(JSON.stringify(item))
return ( 
  <View style={{flex:0.5,backgroundColor:colors.white,justifyContent:"center",  alignSelf: 'center',marginVertical:8,paddingBottom:10,borderWidth:1,borderColor:"#D3D3D3",marginHorizontal:5,
  overflow:'hidden',
  alignContent:"center",
  elevation:4,
  }}>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductBuy', {
          id: item.categories[0].id,
          name: item.name,
        })
      }>
        <View style={{height:120,width:159,overflow:'hidden',alignSelf:"center",paddingVertical:5}}>
      <Image
        style={styles.image}
        source={{uri: item.images[0].src}}
      /></View>
      <View style={{height: 70,width:width/3,left:7}}>
        <Text
          style={{
            textAlign: 'left',
            fontSize:12,
            fontFamily:"Poppins-SemiBold"
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            textAlign: 'left',

            fontFamily:"Poppins-SemiBold",
                        color:colors.ash,
            fontSize:Size.low
          }}>
          {item.categories[0].name}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontFamily:"Poppins-SemiBold",
                        color:colors.Primary
          }}>
         $ {item.price}
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
export default ProductComponent
