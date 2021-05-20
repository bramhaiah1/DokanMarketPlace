

import * as actionTypes from './actionTypes';
import axios from 'axios'
import { Category_url,Product_url,Order_url } from "../../Config/API";




export const setProducts = (images1) => {

    return {
        type: actionTypes.SET_PRODUCTS,
        products: images1,

    }

};
export const setOrders = (Order) => {

    return {
        type: actionTypes.SET_Orders,
        Orders: Order,

    }

};
export const setProducts1 = (images1) => {
//alert(JSON.stringify(images1))
    return {
        type: actionTypes.SET_PRODUCTS1,
        products1: images1,

    }

};
export const Order_update_APICall = (data,id) => {
   // alert(id)
       
        return dispatch => {
            axios.post("https://staging.webdesigntexas.us/rozoee/wp-json/wc/v3/orders/"+id,data,{
              auth: {
                username: 'attsoftwarellc@gmail.com',
                password: 'Rishi2021?!'
            }, 
        }).then(resp => {                
           // alert(JSON.stringify(resp))
    
                const Orders = [];
                const response = resp.data
                // for (let key in response) {
                //     Orders.push({
                //         ...response[key],
                //         key: key
                //     });
    
    
    
                     //alert(JSON.stringify(Orders))
    
    
               // };
                 dispatch(setOrders(resp.data));
    
    
    
           })
    
    
        }
    
    
    }
export const Order_APICall = (data) => {
//alert(JSON.stringify(data))
   
    return dispatch => {
        axios.post(Order_url,JSON.stringify(data),{
          auth: {
            username: 'attsoftwarellc@gmail.com',
            password: 'Rishi2021?!'
        }, 
    }).then(resp => {                
       // alert(JSON.stringify(resp))

            const Orders = [];
            const response = resp.data
           // alert(JSON.stringify(resp.data))
            // for (let key in response) {
            //     Orders.push({
            //         ...response[key],
            //         key: key
            //     });



                 //alert(JSON.stringify(Orders))


           // };
             dispatch(setOrders(resp.data));



       })


    }


}

export const Category_APICall = (val) => {
    return dispatch => {
        axios.get(Category_url,{
          auth: {
            username: 'attsoftwarellc@gmail.com',
            password: 'Rishi2021?!'
        }, 
    }).then(resp => {                

            const products = [];
            const response = resp.data
            for (let key in response) {
                products.push({
                    ...response[key],
                    key: key
                });



                // alert(JSON.stringify(products))


            };
             dispatch(setProducts(products));



       })


    }
};
export const Product_APICALL = () => {
   // alert("k")
    return dispatch => {
        // var Category_url = 'https://staging.webdesigntexas.us/rozoee/wp-json/wc/v3/products/categories';
        // var product_url='https://staging.webdesigntexas.us/rozoee/wp-json/dokan/v1/products?per_page=100';
        
        axios.get(Product_url,{
            
          auth: {
            username: 'attsoftwarellc@gmail.com',
            password: 'Rishi2021?!'
        }
    }).then(resp => {
            const products = [];
            const response = resp.data
            for (let key in response) {
                
                products.push({
                    ...response[key],
                    key: key
                });



               // alert(JSON.stringify(products))


            };
             dispatch(setProducts1(products));



       })


    }
};


export const searchProducts = (query) => {
    return {
        type: actionTypes.SEARCH_PRODUCTS,
        searchQuery: query
    }
};





