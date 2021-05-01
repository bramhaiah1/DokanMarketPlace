
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {colors} from "../Styles/colors/Colors";
import {width,height} from '../Styles/Dimensions/Dimentions';

const CustomSidebarMenu = (props) => {
 

  return (
    <SafeAreaView style={{ overflow: "hidden" }}>

    <View style={{ height: 200, width: width, backgroundColor: colors.activedotcolor, borderBottomLeftRadius: 220, borderBottomRightRadius: 220, right: width / 40 }}>

      <View style={{ height: 200, backgroundColor: colors.lightcolor, borderBottomLeftRadius: 180, borderBottomRightRadius: 200, width: width, right: width / 5, elevation: 12 }}>
        <View style={{ height: 200, backgroundColor: '#0e153d', borderBottomLeftRadius: 200, borderBottomRightRadius: 200, width: width, left: width / 6, elevation: 32 }} /></View>

    </View>
    <Image style={{ alignSelf: "center", elevation: 77, bottom: 180 }}
      source={require("../assets/ProfileAvatar.png")}
    />
    <Text style={styles.text4}>Fariha Anjum</Text>
    <Text style={styles.text5}>farihaanjum@gmail.com</Text>
    <AntDesign onPress={() => props.navigation.goBack()} name="arrowleft" size={35} style={{ color: colors.ash, alignSelf: "flex-end", bottom: 350 }} />

    <View style={{ bottom: 150, paddingBottom: height / 50, paddingTop: height / 50 }} >
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={{ color: colors.backgroundcolor, fontWeight: "bold", fontSize: 22, left: width / 10 }}><AntDesign name="home" size={25} color={colors.backgroundcolor} /> Home</Text>
      </TouchableOpacity>
      <View style={{ borderWidth: 1, borderColor: colors.lightcolor }} />

    </View>
    <View style={{ bottom: 150, paddingBottom: height / 50, paddingTop: height / 50 }} >
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={{ color: colors.backgroundcolor, fontWeight: "bold", fontSize: 22, left: width / 10 }}><AntDesign name="bells" size={25} color={colors.backgroundcolor} /> Notifications</Text>
      </TouchableOpacity>
      <View style={{ borderWidth: 1, borderColor: colors.lightcolor }} />

    </View>
    <View style={{ bottom: 150, paddingBottom: height / 50, paddingTop: height / 50 }} >
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={{ color: colors.backgroundcolor, fontWeight: "bold", fontSize: 22, left: width / 10 }}> <AntDesign name="infocirlceo" size={25} color={colors.backgroundcolor} /> About Us</Text>
      </TouchableOpacity>
      <View style={{ borderWidth: 1, borderColor: colors.lightcolor }} />

    </View>
    <View style={{ bottom: 150, paddingBottom: height / 50, paddingTop: height / 50 }} >
      <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
        <Text style={{ color: colors.backgroundcolor, fontWeight: "bold", fontSize: 22, left: width / 10 }}> <FontAwesome5Icon name="sign-in-alt" size={25} color={colors.backgroundcolor} /> Login</Text>
      </TouchableOpacity>
      <View style={{ borderWidth: 1, borderColor: colors.lightcolor }} />

    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
    text4: { alignSelf: "center", bottom: 180, elevation: 77, color: colors.lightcolor, fontWeight: "bold", fontSize: 20 },
    text5: { alignSelf: "center", bottom: 180, elevation: 77, fontWeight: "bold", fontSize: 15, color: colors.white },
  
  sideMenuProfileIcon: {
  //  resizeMode: 'center',
    width: width/2,
    height: height/4,
    //borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    color:colors.white
  },
  icon:{
   // alignSelf:"center",
   //height: height/17,
  // width: width/8,
  // bottom:height/3.8,
  //right:width/4.5,

  },
  labelStyle:{color:colors.white,right:20}
});

export default CustomSidebarMenu;
