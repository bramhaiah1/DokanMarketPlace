import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Homescreen from "../Components/Screens/HomeScreen/Homescreen";
import TabNavigation from './TabNavigation'
import Category1 from "../Components/Screens/Category/Category";
import Products from "../Components/Screens/Products/Products";
import ProductBuy from "../Components/Screens/Buy/ProductBuy";
import CartScreen from "../Components/Screens/CartScreen/CartScreen";
import BestsaleProduct from "../Components/Screens/Products/BestsaleProduct";
import Searchbar from "../Components/Screens/Search/Searchbar";
import WishList1 from "../Components/Screens/WishList/WishList";
import Profile1 from "../Components/Screens/Profile/Profile";
import Checkout from "../Components/Screens/Checkout/Checkout";
import LoginScreen from "../Components/Screens/Login/LoginScreen";
import Forgotpassword from "../Components/Screens/Login/Forgotpassword";
import Registrationscreen from "../Components/Screens/Login/Registrationscreen";


const Stack = createStackNavigator();
const LoginsModule = () => {
  return (
    <Stack.Navigator>
       
      <Stack.Screen
        name="TabNavigation"
        options={{headerShown: false, tabBarVisible: true}}
        component={TabNavigation}
      />
       <Stack.Screen
        name="Category"
        options={{headerShown: false, tabBarVisible: true}}
        component={Category1}
      />
       <Stack.Screen
        name="Products"
        options={{headerShown: false, tabBarVisible: true}}
        component={Products}
      />
        <Stack.Screen
        name="ProductBuy"
        options={{headerShown: false, tabBarVisible: true}}
        component={ProductBuy}
      />
       <Stack.Screen
        name="CartScreen"
        options={{headerShown: false, tabBarVisible: true}}
        component={CartScreen}
      />
       <Stack.Screen
        name="BestsaleProduct"
        options={{headerShown: false, tabBarVisible: true}}
        component={BestsaleProduct}
      />
       <Stack.Screen
        name="Searchbar"
        options={{headerShown: false, tabBarVisible: true}}
        component={Searchbar}
      />
       <Stack.Screen
        name="WishList"
        options={{headerShown: false, tabBarVisible: true}}
        component={WishList1}
      />
       <Stack.Screen
        name="Checkout"
        options={{headerShown: false, tabBarVisible: true}}
        component={Checkout}
      />
       <Stack.Screen
        name="LoginScreen"
        options={{headerShown: false, tabBarVisible: true}}
        component={LoginScreen}
      />
       <Stack.Screen
        name="Forgotpassword"
        options={{headerShown: false, tabBarVisible: true}}
        component={Forgotpassword}
      />
       <Stack.Screen
        name="Registrationscreen"
        options={{headerShown: false, tabBarVisible: true}}
        component={Registrationscreen}
      />
    </Stack.Navigator>
  );
};
const Profile = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          options={{headerShown: false, tabBarVisible: true}}
          component={Profile1}
        />
      </Stack.Navigator>
    );
  };
  const WishList = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="WishList"
          options={{headerShown: false, tabBarVisible: true}}
          component={WishList1}
        />
      </Stack.Navigator>
    );
  };
  const Category = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Category"
          options={{headerShown: false, tabBarVisible: true}}
          component={Category1}
        />
      </Stack.Navigator>
    );
  };
  const Home = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          options={{headerShown: false, tabBarVisible: true}}
          component={Homescreen}
        />
      </Stack.Navigator>
    );
  };
export  {Profile,LoginsModule,WishList,Category,Home};