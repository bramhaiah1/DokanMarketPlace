import React, { Component, useEffect } from "react";
import { Text,View,StyleSheet,FlatList,TextInput,Image,ScrollView,TouchableOpacity,Dimensions} from "react-native";

// import { connect } from 'react-redux'
import BestsaleModel from './BestsaleModel'
import {
    scale,
    verticalScale,
    moderateScale,
    height,
    width,
  } from '../../../Styles/Dimensions/Dimentions';
  import { connect } from "react-redux";
  import {
    CategoryAPI,    getProducts1,
    searchProducts,
  } from '../../../Store/Actions/index';
  
  import {colors} from '../../../Styles/colors/Colors';


class BestSale extends Component {
 

  

  _keyExtractor = (item, idx) => item.id;
   

  _renderItem = ({ item }) => (
    <BestsaleModel item={ item }   />
  );
  setShow = () =>{
  this.setState({show:true})
  }
 





 componentDidMount(){
   this.props.getProducts1()
   //alert(JSON.stringify(this.props.products))

 }
render() {
     // alert(JSON.stringify(this.props.products))
     var Text=0;
     const {route} = this.props;

     const Name = route.params.name
     if(Name==='Bestsale'){
     var   data1 = this.props.products1.filter((item) => item.total_sales>=1).map(({id, name, price,parent,images,description,slug,categories}) => ({id, slug,name,categories,parent, price,images,description}));
     }else{
      var   data1 = this.props.products1.filter((item) => item.featured===true).map(({id, name, price,parent,images,description,slug,categories}) => ({id, slug,name,categories,parent, price,images,description}));

     }
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
    products1: state.products1.searchResults1,
});
const mapDispatchToProps = dispatch => {
  return {
    getProducts1: () => dispatch(getProducts1())
  }
  }
    export default connect(mapStateToProps, mapDispatchToProps)(BestSale);
