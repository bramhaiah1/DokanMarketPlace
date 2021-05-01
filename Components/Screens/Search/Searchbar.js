import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import AntDesign from "react-native-vector-icons/AntDesign";
import { scale, verticalScale, moderateScale, height, width } from "../../../Styles/Dimensions/Dimentions"
import { colors } from "../../../Styles/colors/Colors";
import { getProducts, getProducts1, searchProducts } from '../../../Store/Actions/index'
import { Header,Right,Body,Title,Left, } from 'native-base';

class Searchbar extends Component {
  componentDidMount() {
   // this.props.getProducts();
    this.props.getProducts1()

  }



  state = {
    searchQuery: '',
    noData:'',
    data:''
  }


  searchText = (e) => {
    this.setState({ searchQuery: e });

    let text = e.toLowerCase()
  //  let trucks = this.state.data
    let filteredName = this.props.products1.filter((item) => {
      return item.name.toLowerCase().match(text)
    })
   // alert(JSON.stringify(filteredName))
    if (!text || text === '') {
      this.setState({
        data: ''
      })
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      // set no data flag to true so as to render flatlist conditionally
      this.setState({
        noData: true
      })
    } else if (Array.isArray(filteredName)) {
      this.setState({
        noData: false,
        data: filteredName
      })
    }
  }
 
  render() {

    let productsList = (

      <View style={styles.container}>
            <Header style={{backgroundColor:"rgba(245,245,245,255)"}}>
        <Left>
            <AntDesign onPress={()=>this.props.navigation.goBack()} name='arrowleft' size={25} color="rgba(115,149,160,255)"/>
        </Left>
        <Body>                       
        <Title style={{color:"rgba(115,149,160,255)"}}>Search Products</Title>
                             </Body>
     </Header>
        <View style={{  }}>
        <AntDesign name='search1'style={styles.searchicon} size={25} color="#8e8e93"/>

          <TextInput
            style={styles.searchBar}
            onChangeText={(query) => this.searchText(query)}
            value={this.state.searchQuery}
            placeholder={"   Search products..."}
          />
        </View>
        <View style={styles.productsContainer}>

          <FlatList
            style={{left:width/20,width:width/1.3,}}
            data={this.state.data}

            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>


              <View style={styles.product}  >
                <Text style={styles.productName} onPress={()=>  this.props.navigation.navigate("ProductBuy",{ id: item.categories[0].id,name:item.name })
}>{item.name}</Text>

              </View>
            }

          />
        </View>
      </View>
    );
    if (this.props.isLoading) {
      productsList = (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {productsList}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,

    backgroundColor:"#fff",
  },
  searchBar: {
    width:width/1.1,
    height:height/18,
    fontSize:15,
  //  lineHeight:-25,
  marginTop:height/40,
    paddingRight:width/12,
    paddingLeft:width/7,
borderRadius:20,
   bottom:height/70,
    alignSelf:'center',
    backgroundColor:'rgba(246,246,246,255)'
  },
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '95%',
    height: '80%'
  },
  searchicon:
            {
                top:height/18,
                left:width/12,
                elevation:2
            },
  product: {
    backgroundColor: '#eee',
    borderRadius: 15,
    //width: width/1.1,
    marginBottom: 10,
    
    padding: 10
  },
  productList: {
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  productDescription: {
    fontSize: 15,
    color: 'rgba(0,0,0,0.7)'
  },
  productPrice: {
    fontSize: 17,
    color: '#0090FF',
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    products: state.products.searchResults,
    products1: state.products1.searchResults1,

    isLoading: state.ui.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts1: () => dispatch(getProducts1()),
    searchProducts: (query) => dispatch(searchProducts(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);