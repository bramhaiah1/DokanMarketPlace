
import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  Order:[],
}

const Order = (state = initialState, action) => {
  switch (action.type) {
   
      case actionTypes.SET_Orders:
         // alert("m")
          console.log(JSON.stringify(action.Orders))
          initialState.Order=action.Orders

      return {
        ...state,
        Order: action.Orders,

      }
   


  }
  return state;

};

export default Order;