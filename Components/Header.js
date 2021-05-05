import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight ,TouchableOpacity,Card
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {colors,width,height,scale,verticalScale} from '../Config/Theme';
//


import Icon1 from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar, Badge, withBadge} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Header,
  Right,
  Body,
  Title,
  Left,

} from 'native-base';

//
const Header1=(props)=>{

    const navigation = useNavigation();

   const { item } = props;
//alert(JSON.stringify(item))
return (  <Header style={{backgroundColor:  colors.white}}>
    <Left>
      <Entypo
        name="menu"
        size={35}
        onPress={() => navigation.openDrawer()}
        style={{color: colors.Primary}}
      />

      {/* <Drawer navigationProps={this.props.navigation} /> */}
    </Left>
    <Right>
      <Icon1
        onPress={() => navigation.navigate('Searchbar')}
        style={{right: width / 10, color: colors.Primary}}
        name="search"
        size={20}
      />
      <Badge
          value={item}
        status="primary"
        containerStyle={{position: 'absolute', right: 4, zIndex: 999}}
      />
      <AntDesign
        onPress={() => navigation.navigate('CartScreen')}
        style={{right: width / 20, color: colors.Primary}}
        name="shoppingcart"
        size={20}
      />
    </Right>
  </Header>  );
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
export default Header1
