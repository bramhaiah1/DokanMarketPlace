
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from "react-native-vector-icons/Feather"

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {colors,width,height,scale} from '../Config/Theme';
import {  Login} from "./StackNavigation";

const CustomSidebarMenu = (props) => {
 

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:colors.white}}>
            <AntDesign onPress={()=>props.navigation.goBack()} name='close' style={{alignSelf:"flex-end"}} color={colors.purple} size={30} />

      {/*Top Large Image */}
      <Image
                source={require("../assets/ProfileAvatar.png")}
                style={styles.sideMenuProfileIcon}
      />
      <View style={{left:10}}>
        <Text style={{fontWeight:"bold",fontSize:20,marginTop:10}}>Sandra Adams</Text>
        <Text style={{fontWeight:"bold",fontSize:15,color:colors.ash}}>Sandra_66@gmail.com</Text>

      </View>
      <View style={{borderWidth:0.5,borderColor:colors.ash,marginTop:20}}/>

      <DrawerContentScrollView {...props}>
        
        {/* //<DrawerItemList {...props} /> */}
        <DrawerItem
          label="Home"
          icon={() =>
            <Feather name="home"   color={colors.purple} size={20}/>

          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Category')}/>
         <DrawerItem
          label="Notification"
          icon={() =>
            <Feather name="bell"   color={colors.purple} size={20}/>

          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Collection')}/>

<DrawerItem
 label="About Us"
 icon={() =>
  <AntDesign name="infocirlceo"   color={colors.purple} size={20}
  />
 }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Deal')}/>


         <DrawerItem
          label="Review"
          icon={() =>
            <Feather name="star"   color={colors.purple} size={20}/>

          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Reviewscreen')}/>

         <DrawerItem
          label="Login"
          icon={() =>
            <FontAwesome5Icon name="sign-in-alt"   color={colors.purple} size={20}/>

          }
labelStyle={styles.labelStyle}     onPress={()=>props.navigation.navigate('LoginScreen')}     />
      </DrawerContentScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
  //  resizeMode: 'center',
    width: 50,
    height: 50,
    left:20
    //borderRadius: 100 / 2,
    //alignSelf: 'center',
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
  labelStyle:{color:colors.purple,right:20,fontWeight:"bold",fontSize:15}
});

export default CustomSidebarMenu;
