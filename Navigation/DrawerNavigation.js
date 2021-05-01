import { createDrawerNavigator } from '@react-navigation/drawer';

import * as React from 'react';

import  {LoginsModule} from './StackNavigation'

import CustomSidebarMenu from './MenuList'
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed" 
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>

      <Drawer.Screen
        name="Feed"
        component={LoginsModule}
        
        options={{  drawerLabel: () => null, 
          gestureEnabled:false,
          

        }}
      
      />
    
    </Drawer.Navigator>
  );
}