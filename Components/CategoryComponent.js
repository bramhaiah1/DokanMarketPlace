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
            category:item.name
          })
        
      }>
        <View style={{height:59,width:59, overflow:'hidden',borderRadius:400,backgroundColor:"#D3D3D3",borderWidth:1,borderColor:colors.ash, }}>
      <Image
        style={styles.image}
       // resizeMode={'stretch'}
        source={{uri: item.image.src}}

      />
      </View>
      {/* <View style={{height: height / 15,}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize:10
          }}>
        </Text>
       
      </View> */}
    </TouchableOpacity>
  </View>     );
  }




const styles = StyleSheet.create({
  view1: {
  //  marginRight: width / 20,
  flex:1,
  alignSelf: 'center',
  justifyContent:"space-between",
  marginVertical:10,paddingBottom:10,
   backgroundColor: colors.white,
marginRight:8,

  },
  image: { flex: 1,resizeMode: 'cover'},
})
export default Categorycomponent
