
import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  products1: [],
  searchResults1: []
}

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
   
      case actionTypes.SET_PRODUCTS1:
       // alert(JSON.stringify(action))
initialState.products1=action.products1
      return {
        ...state,
        products1: action.products,
        searchResults1: action.products1

      }


    case actionTypes.SEARCH_PRODUCTS:

      let searchResults = [...state.products];
      alert(JSON.stringify(action.items))
      //alert(action.items)

      searchResults = searchResults.filter(product => {
         //if (action.products != '')
         //alert(action.products.products)
          return product;
        // let result = false;
        // action.searchQuery.split(" ").map(query => {
        //   if (query.trim() !== '') {
        //     if (product.name.toLowerCase().indexOf(query.toLowerCase()) > -1)

        //       result = result || true;
        //  }
       // })
        // if (result)

        //   return product;
      });
      return {
        ...state,
        searchResults: searchResults

      }


  }
  return state;

};

export default reducer1;