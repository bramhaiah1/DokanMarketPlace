import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,ActivityIndicator
 
} from 'react-native';
// import { connect } from 'react-redux'
import { Checkbox } from 'react-native-paper';

import ProductModel from './ProductModel'
import EmptyProducts from './EmptyProducts'
import { connect } from "react-redux";
import { scale, verticalScale, moderateScale, height, width } from "../../../Styles/Dimensions/Dimentions"
import { colors } from "../../../Styles/colors/Colors";
import { getProducts, getProducts1, searchProducts } from '../../../Store/Actions/index'
import { useRoute } from '@react-navigation/native';

import { Header,Right,Body,Title,Left, Button, Label, Card, CardItem } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

import { Avatar, Badge, withBadge } from "react-native-elements";



class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility:true,checked:false,
      data6:[],
      filter:false,
      count:0,
      show:true,
      checkedId: -1,
    newArray1:[]
    };
}
componentWillUnmount() {
    this._unsubscribe();
  }
handleCheck = (checkedId1,text) => {
  if(text==="ALL"){
    this.setState({show:true,checkedId:checkedId1})
  }else{
  this.setState({checkedId:checkedId1})

  var newArray=[]
  var   filterdata = this.props.products1.map((item)=>{
    if(item.categories.length>1){
    if(item.categories[1].id===checkedId1)
    {
      console.log(JSON.stringify(item.name))
      newArray.push({ ...item })

    }
  }
})
this.setState({newArray1:newArray,show:false})}
}
  

  _keyExtractor = (item, idx) => item.id;
   

  _renderItem = ({ item }) => (
     
    

    <ProductModel item={ item }   />
  );
  setShow = () =>{
  this.setState({show:true})
  }
componentDidMount(){
  this.props.getProducts1()
  this._unsubscribe = this.props.navigation.addListener('focus', () => {
    this.getItemsCount1();
    this.getItemsCount();
});

  
}
getItemsCount = () => {
  this.setState(
    {
      count: this.state.count + 1,
    },

    () => {
      let count = this.props.itemsCount.itemsCount1;
      this.props.navigation.setParams({
        count1: count,
      });
    }
  );
};
getItemsCount1 = () => {
  this.setState(
    {
      count: this.state.count + 1,
    },

    () => {
      let count = this.props.itemsCount.itemsCount;
      this.props.navigation.setParams({
        count: count,
      });
    }
  );
};
  render() {
    const { route } = this.props;
    const { navigation } = this.props;

   const Text1 = route.params.name
  var   data = this.props.products1.filter((item) => item.categories[0].id == Text1).map(({id, name,parent, price,images,description,categories}) => ({id,parent, name, price,images,description,categories}));
  var   data1 = this.props.products1.filter((item) => item.categories[0].id == Text1).map(({categories}) => ({categories}));
  var   data2 = data1.map((categories) => (categories));
  
  const newArray = [];

     data2.map((item)=>{(item.categories.forEach(obj => {
       if (!newArray.some(o => o.id === obj.id)) {
         newArray.push({ ...obj })
       }
     }
      ))})
     
const { checkboxes, checkedId } = this.state

     return (
      <View style={ styles.container }>
            <Header style={{backgroundColor:"rgba(245,245,245,255)"}}>
               <Left>
               <Icon onPress={()=>this.setState({filter:!this.state.filter})} name="filter" style={{color:"rgba(115,149,160,255)"}} size={20} />

                </Left>
                <Body>
                  <Title style={{color:"rgba(115,149,160,255)"}}>Products</Title>
                </Body>
                <Right>
               
                <Icon onPress={() => this.props.navigation.navigate("WishList")} style={{right:width/10,color:"rgba(115,149,160,255)"}}  name="heart-outline" size={25} />
                
                <Badge
              value={route.params.count1}
              status="primary"
              containerStyle={{ position: "absolute", right:width/8, bottom:height/50 }}
            />
             <Badge
              value={route.params.count}
              status="primary"
              containerStyle={{ position: "absolute", right: 1, bottom:height/50 }}
            />
                <AntDesign onPress={() => this.props.navigation.navigate("Cartscreen")} style={{right:width/30,color:"rgba(115,149,160,255)",}} name="shoppingcart" size={25} />
    
                </Right>
         
            </Header>
           
        
         {newArray.map((item,index) => (
           this.state.filter?
JSON.stringify(item.id)===Text1?<View>
<Checkbox
           center
           key={item.id}
           title={item.name}
         //  status={checkedId ? 'checked' : 'unchecked'}
           status={item.id == checkedId ? 'checked' : 'unchecked'}
           onPress={() => this.handleCheck(item.id,"ALL")}
           
         />
        <Text style={{marginTop: 5}}> ALL</Text>
</View>:

<View>
<Checkbox
           center
           key={item.id}
           title={item.name}
         //  status={checkedId ? 'checked' : 'unchecked'}
           status={item.id == checkedId ? 'checked' : 'unchecked'}
           onPress={() => this.handleCheck(item.id)}
           
         />
        <Text style={{marginTop: 5}}> {item.name}</Text>
</View>:null
))}

{JSON.stringify(data)==='[]'?

<EmptyProducts/>:this.state.show?
        <FlatList
          numColumns={2}

         style={{ flexGrow: 0 }}
         data={ data }
         keyExtractor={ this._keyExtractor }
         renderItem={ this._renderItem }
        />
    :<FlatList
    numColumns={2}

   style={{ flexGrow: 0 }}
   data={ this.state.newArray1 }
   keyExtractor={ this._keyExtractor }
   renderItem={ this._renderItem }
  />}
      {/* {this.state.show?<ModelScreen/>:null} */}
     
      </View>
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
//     }
// }



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

const mapStateToProps = (state) => ({
  
  products1: state.products1.searchResults1,
  itemsCount: state.itemsCount,

});
const mapDispatchToProps = dispatch => {
  return {
    getProducts1: () => dispatch(getProducts1())}}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
