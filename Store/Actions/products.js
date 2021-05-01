

import * as actionTypes from './actionTypes';
import axios from 'axios'





export const setProducts = (images1) => {

    return {
        type: actionTypes.SET_PRODUCTS,
        products: images1,

    }

};

export const setProducts1 = (images1) => {
//alert(JSON.stringify(images1))
    return {
        type: actionTypes.SET_PRODUCTS1,
        products1: images1,

    }

};
const images1=[
    {id:1,image:require("../../assets/Accesories_category.jpg"),Category:"Accessories"},
    {id:2,image:require("../../assets/Baby_category.jpg"),Category:"Baby"},
    {id:3,image:require("../../assets/Women_category.jpg"),Category:"Women"},
    {id:4,image:require("../../assets/Men_category.jpg"),Category:"Men"},
    {id:5,image:require("../../assets/Leather_category.jpg"),Category:"Leather"},
    {id:6,image:require("../../assets/Electronics_category.jpeg"),Category:"Electronics"},
   // {id:7,image:require("../../assets/Fashion_category.jpg"),Text:"Fashion"},
   // {id:8,image:require("../../assets/Clothing_category.jpg"),Text:"Clothing"},
  
  

  ]


export const getProducts = (val) => {
   // alert("n")
    return dispatch => {
        var Category_url = 'https://staging.webdesigntexas.us/rozoee/wp-json/wc/v3/products/categories?per_page=100';
        var product_url='https://staging.webdesigntexas.us/rozoee/wp-json/dokan/v1/products/';
        var data={"per_page":15}
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
export const getProducts1 = () => {
   // alert("k")
    return dispatch => {
        var Category_url = 'https://staging.webdesigntexas.us/rozoee/wp-json/wc/v3/products/categories';
        var product_url='https://staging.webdesigntexas.us/rozoee/wp-json/dokan/v1/products?per_page=100';
        
        axios.get(product_url,{
            
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





