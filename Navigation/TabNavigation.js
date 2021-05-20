import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {LoginsModule,Category,WishList,Profile,Home} from './StackNavigation'
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"



import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {colors,width,height,scale,verticalScale} from '../Config/Theme';
const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
   
    return (
        <Tab.Navigator
        tabBarOptions={{
          style:{
           backgroundColor:colors.Primary,
            alignContent:"center",
          }

        }}
         
      >
          
         
      
        <Tab.Screen name="Home" options={{ tabBarVisible:true,         tabBarLabel:'',  
    tabBarIcon:(({focused}) => <View style={{justifyContent:"center",top:5, height:focused ?60:40,width:50,     backgroundColor:!focused ? colors.Primary : "#F3684D"}}> 
     <Feather  style={{
color:colors.white,textAlign:"center"      }} name="home" size={22}/ >
        {/* <Text style={{color:focused ? colors.purple : colors.backgroundcolor,fontSize:10,alignSelf:"center",fontWeight:"bold"}}>HOME</Text> */}
      </View>
    
      )}}
       component={Home} />
        
{/*       
       <Tab.Screen name="Search" options={{ tabBarVisible:true,         tabBarLabel:'',  
      tabBarIcon:(({focused}) => <View style={{marginTop:15,justifyContent:"center"}}><Feather  style={{
        alignSelf:"center",

        color:focused ? colors.purple : colors.backgroundcolor
      }} name="search" size={22}/ >
        <Text style={{color:focused ? colors.purple :colors.backgroundcolor,fontSize:10,alignSelf:"center",fontWeight:"bold"}}>Search</Text>
      </View>
    
      )}}
       component={Home} /> */}
        <Tab.Screen name="Discover" options={{ tabBarVisible:true, tabBarLabel:'',  
    tabBarIcon:(({focused}) => <View style={{justifyContent:"center",top:5, height:focused ?60:40,width:50,     backgroundColor:!focused ? colors.Primary : "#F3684D"
  }}><FontAwesome  style={{
      alignSelf:"center",
color:colors.white
}} name="th" size={22}/ >
      {/* <Text style={{color:focused ? colors.purple : '#748c94',fontSize:10,alignSelf:"center",fontWeight:"bold"}}>Category</Text> */}
    </View>
  
    )}}component={Category} />
  
   <Tab.Screen name="WishList" options={{ tabBarVisible:true, tabBarLabel:'',  
  
  tabBarIcon:(({focused}) => <View style={{justifyContent:"center",top:5, height:focused ?60:40,width:50,     backgroundColor:!focused ? colors.Primary : "#F3684D"}}> 
  <Feather  style={{
      alignSelf:"center",
textAlign:"center",
color:colors.white    }} name="heart" size={22}/ >
      {/* <Text style={{color:focused ? colors.purple : '#748c94',fontSize:10,alignSelf:"center",fontWeight:"bold"}}>Like</Text> */}
    </View>
  
    )}}
     component={WishList} />
   <Tab.Screen name="Profile" options={{ tabBarVisible:true, tabBarLabel:'',  
    tabBarIcon:(({focused}) => <View style={{justifyContent:"center",top:5, height:focused ?60:40,width:50,     backgroundColor:!focused ? colors.Primary : "#F3684D"}}> 
    <Icon  style={{
    alignSelf:"center",

color:colors.white  }} name="user" size={22}/ >
    {/* <Text style={{color:focused ? colors.purple : '#748c94',fontSize:10,alignSelf:"center",fontWeight:"bold"}}>Profile</Text> */}
  </View>

  )}} component={Profile} />
  
      </Tab.Navigator>
    );
  }
  
  
  export default  TabNavigator;
  
