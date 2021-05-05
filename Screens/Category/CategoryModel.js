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
import {colors,width,height,scale,verticalScale} from '../../Config/Theme';


const CategoryModel=(props)=>{

    const navigation = useNavigation();

   const { item } = props;

return (       <View style={{flex:1,margin:"3%", borderRadius:20,height:height/4,overflow:"hidden",
backgroundColor: '#fff',elevation:10}}>
            {    item.images===null?
      
  <View style={ styles.itemCard }>
    <TouchableOpacity onPress={()=>   navigation.navigate("Products",{ name: JSON.stringify(item.id) })
}>

   
<View style={{alignSelf:"center",paddingRight:width/20,paddingLeft:width/20,textAlign:"center"}}>
<Text   style={ {
fontSize: 15,
fontWeight:"bold",

}}>{item.name}</Text>
</View>

</TouchableOpacity>
   </View>:
  

      <View style={ styles.itemCard }>
        <TouchableOpacity  onPress={()=>  navigation.navigate("Products",{ name: JSON.stringify(item.id)}) }>
        <Image source={{uri:item.image.src}} resizeMode="contain"style={{ height: height/8,
          width: width/2.4,
 }}/> 

 <View style={{top:height/30, alignSelf:"center"}}>
 <Text   style={ {
  fontSize: 15,
  fontWeight:"bold", paddingLeft:scale(20)
 
  }}>{item.name}</Text>
 </View>

 </TouchableOpacity>
       </View>}
       </View>
    );
  }




const styles = StyleSheet.create({
  itemCard: {
    
   
  alignSelf:"center"
  },
  productDetail: {
    marginLeft: 2,
    marginTop:2,
    paddingTop:30,
    flex: 1,
    justifyContent: 'flex-start',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color:"#808080"
  },
  inputNumberContainer: { 
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  inputNumber: {
    flex: 1,
    padding: 4,
    width: 32,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  incDecBtn: {
    paddingTop: 4,
    paddingBottom: 4,
    width: 32,
    backgroundColor: '#263238',
  },
  incDecBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
export default CategoryModel
