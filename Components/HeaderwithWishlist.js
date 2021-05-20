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


import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar, Badge, withBadge} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Header,
  Right,
  Body,
  Title,
  Left,

} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

//
const Header1=(props)=>{

    const navigation = useNavigation();

   const { item } = props;
//alert(JSON.stringify(item))
return ( <Header style={{backgroundColor:  colors.Primary,
    }}>
    <Left>
      <AntDesign
        onPress={() => navigation.goBack(null)}
        name="arrowleft"
        style={{color: colors.white}}
        size={20}
      />
    </Left>
    <Body style={{alignItems:"center",left:20}}>
      <Title style={{color: colors.white,fontSize:15, fontFamily: 'Poppins-SemiBold',width:150}}>
        {item.Title}
      </Title>
    </Body>
    <Right>
      <Icon
        onPress={() => navigation.navigate('WishList')}
        style={{right: width / 20, color: colors.white}}
        name="heart-outline"
        size={25}
      />

      <Badge
        value={item.Wishlistcount}
        status="primary"
        containerStyle={{
          position: 'absolute',
          right: width / 40,
          bottom: height / 50,
        }}
      />
      {/* <Badge
        value={route.params.count}
        status="primary"
        containerStyle={{
          position: 'absolute',
          right: 1,
          bottom: height / 50,
        }}
      />
      <AntDesign
        onPress={() => this.props.navigation.navigate('Cartscreen')}
        style={{right: width / 30, color: colors.backgroundcolor}}
        name="shoppingcart"
        size={25}
      />*/ }
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
