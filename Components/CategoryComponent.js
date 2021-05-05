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


const Categorycomponent=(props)=>{

    const navigation = useNavigation();

   const { item } = props;
//alert(JSON.stringify(item))
return (  <View style={styles.view1}>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Products', {
            name: item.id,
          })
        
      }>
        <View style={{height:100, overflow:'hidden',borderRadius:400/2}}>
      <Image
        style={styles.image}
       // resizeMode={'stretch'}
        source={{uri: item.image.src}}

      /></View>
      <View style={{height: height / 15,}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize:Size.medium
          }}>
          {item.name}
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
  image: { flex: 1,resizeMode: 'stretch'},
})
export default Categorycomponent
