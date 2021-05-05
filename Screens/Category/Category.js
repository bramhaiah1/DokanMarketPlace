import React, { Component, useEffect } from "react";
import { Text,View,StyleSheet,FlatList,TextInput,Image,ScrollView,TouchableOpacity,Dimensions} from "react-native";

// import { connect } from 'react-redux'
import CategoryModel from './CategoryModel'
import { connect } from "react-redux";
import { Category_APICall, getProducts1, searchProducts } from '../../Store/Actions/index'
import {colors,width,height,scale,verticalScale} from '../../Config/Theme';




class Category extends Component {
 

  

  _keyExtractor = (item, idx) => item.id;
   

  _renderItem = ({ item }) => (
    <CategoryModel item={ item }   />
  );
  setShow = () =>{
  this.setState({show:true})
  }
 


// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
//     }
// }



 componentDidMount(){
   this.props.Category_APICall()
   //alert(JSON.stringify(this.props.products))

 }
render() {
     // alert(JSON.stringify(this.props.products))
     var Text=0;
     var   data1 = this.props.products.filter((item) => item.parent=== Text&&item.name!='Uncategorized').map(({id, name, price,parent,image,description,slug}) => ({id, slug,name,parent, price,image,description}));
//alert(JSON.stringify(data1))
    return(
      <View style={ styles.container }>
      
      <FlatList
        numColumns={2}

       style={{ flexGrow: 0 }}
       data={ data1 }
       keyExtractor={ this._keyExtractor }
       renderItem={ this._renderItem }
      />
        
    {/* {this.state.show?<ModelScreen/>:null} */}
   
    </View>
  )
    
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: scale(25),
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight:"bold"
  },
  
});
//
const mapStateToProps = (state) => ({
  products: state.products.products,
});
const mapDispatchToProps = dispatch => {
  return {
    Category_APICall: () => dispatch(Category_APICall())}}

    export default connect(mapStateToProps, mapDispatchToProps)(Category);
