import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Homescreen from "../Screens/HomeScreen/Homescreen";
import TabNavigation from './TabNavigation'
import Category1 from "../Screens/Category/Category";
import Products from "../Screens/Products/Products";
import ProductBuy from "../Screens/Buy/ProductBuy";
import CartScreen from "../Screens/CartScreen/CartScreen";
import BestsaleProduct from "../Screens/Products/BestsaleProduct";
import Searchbar from "../Screens/Search/Searchbar";
import WishList1 from "../Screens/WishList/WishList";
import Profile1 from "../Screens/Profile/Profile";
import Checkout from "../Screens/Checkout/Checkout";
import LoginScreen from "../Screens/Login/LoginScreen";
import Forgotpassword from "../Screens/Login/Forgotpassword";
import Registrationscreen from "../Screens/Login/Registrationscreen";
import Addaddress from "../Screens/Checkout/AddAddress"
import Review from '../Screens/Review/Reviewscreen'
import AddReview from '../Screens/Review/AddReview'
import MyTransaction from '../Screens/Transaction/MyTransaction'
import Tracking from '../Screens/Transaction/Tracking'

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
        name="Addaddress"
        options={{headerShown: false, tabBarVisible: true}}
        component={Addaddress}
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
       <Stack.Screen
        name="Review"
        options={{headerShown: false, tabBarVisible: true}}
        component={Review}
      />
         <Stack.Screen
        name="AddReview"
        options={{headerShown: false, tabBarVisible: true}}
        component={AddReview}
      />
       <Stack.Screen
        name="MyTransaction"
        options={{headerShown: false, tabBarVisible: true}}
        component={MyTransaction}
      />
       <Stack.Screen
        name="Tracking"
        options={{headerShown: false, tabBarVisible: true}}
        component={Tracking}
      />
    </Stack.Navigator>
  );
};
const Login=()=>{
  <Stack.Navigator>

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

}
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
