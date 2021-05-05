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
return (  <View style={styles.view1}>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductBuy', {
          id: item.categories[0].id,
          name: item.name,
        })
      }>
        <View style={{height:100, overflow:'hidden',}}>
      <Image
        style={styles.image}
       // resizeMode={'cover'}
        source={{uri: item.images[0].src}}
      /></View>
      <View style={{height: height / 15,width:width/3}}>
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize:Size.medium
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            color:colors.ash,
            fontSize:Size.low
          }}>
          {item.categories[0].name}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            color:colors.purple
          }}>
         $ {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  </View>     );
  }




const styles = StyleSheet.create({
  view1: {
    alignSelf: 'center',
    marginHorizontal:6,
 //   marginLeft: width / 20,
  //  marginRight: width / 20,
    justifyContent: 'center',
//    backgroundColor: colors.lightactivedotcolor,
    height: height / 8,
    width: width / 4,
  },
  image: {    flex: 1,resizeMode: 'stretch'},
})
export default ProductComponent
