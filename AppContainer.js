import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './Navigation/DrawerNavigation'
export default function App() {
  return (
    <NavigationContainer >
      <DrawerNavigation/>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
