const initialState = {
  cartItems: [],
  wishListItems: [],
  itemsCount: 0,
  itemsCount1: 0,
  Address:'',
  AddAddress:''

};

const idxInCart = (id, arr) => arr.findIndex(data => data.id === id)

export default (state = initialState, action) => {
//alert(action.type)
  if (action.type == "ADD_TO_CART") {

    let exists = -1;
    if (state.itemsCount > 0) {
    
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].id == action.item.id) {
          exists = 1;
          console.log(state.cartItems)
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
      }
    }
    if (exists == 1) {
      console.log("if");
      console.log(state.cartItems);
    } else {
      let updatedCartItems = [...state.cartItems, action.item];
      let total;
if(state.total>=0){
  
 total=parseInt(action.item.price)+parseInt(state.total
 );
}
else{

   total=parseInt(action.item.price);
}

      let count = state.itemsCount + 1;
      return {
        ...state,
        itemsCount: count,
        cartItems: updatedCartItems,
        total:total,

      };
    }
  } else if (action.type == "DELETE_ITEM") {
    alert(JSON.stringify(action.item))
    let total;
    if(state.total>=0){
      total=parseInt(state.total)-parseInt(action.item.price*action.item.quantity);

    //  alert(total)

     }
     else{
     
        total=parseInt(action.item.price);
     }
   //  alert(total)
    let newCartItems = state.cartItems.filter((item) => {
      return item.id != action.item.id;
    });
    //alert(total)

    let count = state.itemsCount - 1;
    
    return {
      ...state,
      itemsCount: count,
      cartItems: newCartItems,
      total:total
    };
  } else if (action.type == "DECREASE_QUANTITY") {
    let total;
    if(state.total>=0){
      total=parseInt(state.total)-parseInt(action.item.price);

    //  alert(total)

     }
     else{
     
        total=parseInt(action.item.price);
     }
    return {

      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === action.item.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
      total:total
    };
  } else if (action.type == "INCREASE_QUANTITY") {
    let total;
  //  alert(action.item)
    if(state.total>=0){
     total=parseInt(action.item.price)+parseInt(state.total);

    }
    else{
    
       total=parseInt(action.item.price);
    }
    return {
      
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === action.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
      total:total

    };
  } else if (action.type == "ADD_TO_WISH_LIST") {
    for (let i = 0; i < state.wishListItems.length; i++) {
      if (state.wishListItems[i].id == action.item.id) {
        return state;
      }
    }

    let updatedWishListItems = [...state.wishListItems, action.item];
    let count = state.itemsCount1 + 1;

    return {
      ...state,
      wishListItems: updatedWishListItems,
      itemsCount1:count
    };
  } else if (action.type == "DELETE_FROM_CART") {
        let newWishListItems = state.wishListItems.filter((item) => {
      return item.id != action.item.id;
    });
    let count = state.itemsCount1 - 1;

    return {
      ...state,
      wishListItems: newWishListItems,
      itemsCount1:count

    };
  } else if (action.type == "ORDER_PLACED") {
    return {
      ...state,
      itemsCount: 0,
      cartItems: [],
      total:0,

    };
  }else if (action.type =="UpdateAddress") {
   // alert(JSON.stringify(action.item))
   let Updatednew = state.AddAddress.filter((item) => {
    return item.first_name != action.item.first_name;})
    //alert(JSON.stringify(Updatednew))

    let updatedAddAddress = [...Updatednew, action.item];
//alert(JSON.stringify(updatedAddAddress))
  //  let updatedAddAddress1 = [ updatedAddAddress];
   // alert(JSON.stringify(updatedAddAddress1))

    return {
      ...state,
      AddAddress: updatedAddAddress,
    };}
    else if (action.type =="DeleteAddress") {
      // alert(JSON.stringify(action.item))
      let Updatednew = state.AddAddress.filter((item) => {
       return item.first_name != action.item.first_name;})
      /// alert(JSON.stringify(Updatednew))

       return {
         ...state,
         AddAddress: Updatednew,
       };}
       else if (action.type =="AddAddress") {
     // alert(JSON.stringify(action.item))
    let updatedAddAddress = [...state.AddAddress, action.item];
   
      return {
        ...state,
        AddAddress: updatedAddAddress,
      };}

  return state;
};
