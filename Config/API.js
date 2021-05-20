import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
export const API_BASE_URL = "https://staging.webdesigntexas.us/rozoee/wp-json/";
export const API_BASE_URL1 = "https://staging3.rozoee.com/wp-json/";
const Login_Url="jwt-auth/v1/token"
export const Category_url = API_BASE_URL + "wc/v3/products/categories?per_page=100";
export const Product_url = API_BASE_URL + "dokan/v1/products?per_page=100";
export const Order_url = API_BASE_URL + "wc/v3/orders";
//Login API call 
const Login= async (props,data)=>{
    //alert(JSON.stringify(data))
axios.post(API_BASE_URL1+Login_Url, data, {
    headers: { 'Content-Type': 'application/json' }
  }).then(async res => {
     //alert(JSON.stringify(res.data.token))
      var token=JSON.stringify(res.data.token)
     await AsyncStorage.setItem("token",token);


     props.navigate('TabNavigation')
          }).catch(function(error) {
alert(error)
          })

}

export{Login}