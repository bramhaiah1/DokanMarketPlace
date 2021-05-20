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


import Icon from 'react-native-vector-icons/FontAwesome5';
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
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

//
const Header1=(props)=>{

    const navigation = useNavigation();

   const { item } = props;
//alert(JSON.stringify(item))
return (  <Header style={{backgroundColor: colors.Primary,
    elevation:5,
   
}}>
    <Left>
      <AntDesign
        name="arrowleft"
        size={20}
        onPress={() => navigation.goBack()}
        style={{color: colors.white}}
      />

      {/* <Drawer navigationProps={this.props.navigation} /> */}
    </Left>
    <Body>
        <Title style={{ color:colors.white,  width:240,  fontSize:15,                fontFamily: 'Poppins-SemiBold',
}}>
            {item.Title}
        </Title>
    </Body>
    <Right>
      <Icon
        onPress={() => navigation.navigate('Profile')}
        style={{right: width / 20, color: colors.white}}
        name="user"
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
