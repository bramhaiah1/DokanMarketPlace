
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Alert,
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
import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  const [status, setstatus] = React.useState('Login');
const Logout=async()=>{
  Alert.alert("Hold on!","Are You Sure Do You Want Logout", [
      
    { text: "Yes", onPress: () =>LogoutSucess()
  },
  { text: "No", onPress: () =>LogoutCancel()
  }
  ]);
  

}
const LogoutCancel=()=>{

}
const LogoutSucess=async()=>{
  await AsyncStorage.removeItem("token");
  setstatus("Login")
}
useEffect(async()=>{

  const ID =  await AsyncStorage.getItem('token')
  if(ID!=null){
    setstatus("Logout")
  }
    //alert(JSON.stringify(ID)
    })
    //alert(status)
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:colors.white}}>
<View style={{backgroundColor:colors.Primary,paddingVertical:10}}>
<AntDesign onPress={()=>props.navigation.goBack()} name='close' style={{alignSelf:"flex-end"}} color={colors.white} size={30} />

      {/*Top Large Image */}
      <Image
                source={require("../assets/ProfileAvatar.png")}
                style={styles.sideMenuProfileIcon}
      />
      <View style={{left:20}}>
        <Text style={{                    fontFamily: 'Poppins-SemiBold',
fontSize:20,marginTop:10 ,color:colors.white}}>Sandra Adams</Text>
        <Text style={{                    fontFamily: 'Poppins-SemiBold',
fontSize:15,color:colors.white}}>Sandra_66@gmail.com</Text>

      </View>
      </View>
      <View style={{borderWidth:0.5,borderColor:colors.orange,}}/>

      <DrawerContentScrollView {...props}>
        
        {/* //<DrawerItemList {...props} /> */}
        <DrawerItem
          label="Home"
          icon={() =>
            <Feather name="home"   color={colors.Primary} size={20}/>
          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('TabNavigation')}/>
         
         <DrawerItem
          label="Notification"
          icon={() =>
            <Feather name="bell"   color={colors.Primary} size={20}/>

          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Collection')}/>
    <DrawerItem
          label="My Orders"
          icon={() =>
            <FontAwesome5Icon name="first-order"   color={colors.Primary} size={20}/>

          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('MyTransaction')}/>

<DrawerItem
 label="About Us"
 icon={() =>
  <AntDesign name="infocirlceo"   color={colors.Primary} size={20}
  />
 }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Deal')}/>


         <DrawerItem
          label="My Account"
          icon={() =>
            <Feather name="user"   color={colors.Primary} size={20}/>

          }
labelStyle={styles.labelStyle}          onPress={()=>props.navigation.navigate('Profile')}/>
{status==="Login"?   <DrawerItem
          label={"Login"}
          icon={() =>
            <FontAwesome5Icon name="sign-in-alt"   color={colors.Primary} size={20}/>

          }
labelStyle={styles.labelStyle}     onPress={()=>props.navigation.navigate('LoginScreen')}    />
      :
         <DrawerItem
          label={"Logout"}
          icon={() =>
            <FontAwesome5Icon name="sign-in-alt"   color={colors.Primary} size={20}/>

          }
labelStyle={styles.labelStyle}     onPress={()=>Logout()}     />}
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
  labelStyle:{color:colors.Primary,right:20,                    fontFamily: 'Poppins-SemiBold',
  fontSize:15}
});

export default CustomSidebarMenu;
