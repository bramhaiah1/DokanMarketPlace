import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {LoginsModule,Category,WishList,Profile,Home} from './StackNavigation'
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/FontAwesome5"
import { colors } from 'react-native-elements';
const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
   
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
 
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Discover') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
      >
          
         
      
        <Tab.Screen name="Home" options={{ tabBarVisible:true,          tabBarLabel:'',  
    tabBarIcon:(({tintColor}) =>  <Icon name="home" size={22} color={tintColor} /> )}}component={Home} />
        <Tab.Screen name="Discover" options={{ tabBarVisible:true, tabBarLabel:'',  
    tabBarIcon:(() =>  <FontAwesome name="th" size={20} color={colors.black} /> ) }} component={Category} />
   {/* <Tab.Screen name="Menu" options={{ tabBarVisible:true, tabBarLabel:'',  
    tabBarIcon:(() => <Button1/>) }} component={DiscoverModule} /> */}
   <Tab.Screen name="WishList" options={{ tabBarVisible:true, tabBarLabel:'',  
    tabBarIcon:(() => <Fontisto name="heart" size={20} color={colors.black} />
    
    ) }}  component={WishList} />
   <Tab.Screen name="Profile" options={{ tabBarVisible:true, tabBarLabel:'',  
    tabBarIcon:(() => <Icon name="user" size={20} color={colors.black} /> )}} component={Profile} />
  
      </Tab.Navigator>
    );
  }
  
  
  export default  TabNavigator;
  
