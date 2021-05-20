import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux';
import {
  getProducts,
  Product_APICALL,
  searchProducts,
} from '../../Store/Actions/index';
import ProductComponent from "../../Components/ProductComponent";
import {SliderBox} from 'react-native-image-slider-box';

import {colors,width,height,scale,Size} from '../../Config/Theme';
import {
  Header,
  Right,
  Body,
  Title,
  Left,
  Button,
  Label,
  Card,
  CardItem,
} from 'native-base';
import {useRoute} from '@react-navigation/native';
import Reviewscreen from "../Review/Reviewscreen";
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderwithWishlist from '../../Components/HeaderwithWishlist'
import {Avatar, Badge, withBadge} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      isEnabled: false,
      des: true,
      icon: true,
      visible:true
    };
  }
  componentDidMount = () => {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getItemsCount1();
      this.getItemsCount();
    });
  };
  componentWillUnmount() {
    this._unsubscribe();
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
      },
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
      },
    );
  };
  deleteFromCartHandler = (pro) => {

    this.props.deleteFromCart(pro);
    setTimeout(this.getItemsCount, 1000);
    this.setState({visible:!this.state.visible})

  };
  addCartHandler = async pro => {
    var ID = await AsyncStorage.getItem('token');
    let qty = 1;
    pro.quantity = qty;
    this.props.addToCart(pro);
    this.getItemsCount1();
    const {navigation} = this.props;
    if(ID===null){
      navigation.navigate('LoginScreen');

    }else{
    navigation.navigate('CartScreen');}
  };
  addCartHandler1 = pro => {
    let qty = 1;
    pro.quantity = qty;

    this.props.addToCart(pro);
    this.getItemsCount();
  };
  addToWishListHandler = pro => {
   // alert("ok")
    this.setState({visible:!this.state.visible})
    this.props.addToWishList(pro);
    this.getItemsCount();
  };

  render() {
    const {route} = this.props;
   
   // const [visible,setvisible]=React.useState(true)
    const Text1 = route.params.name;
    const id = route.params.id;
    var data = this.props.products1
      .filter(item => item.name == Text1)
      .map(({id, name, short_description, price, images, description,categories,in_stock}) => ({
        id,
        name,
        short_description,
        price,
        images,
        description,categories,in_stock
      }));
      
    var data1 = this.props.products1
      .filter(item => item.categories[0].id == id)
      .map(
        ({
          id,
          name,
          short_description,
          price,
          images,
          description,
          categories,
        }) => ({
          id,
          name,
          short_description,
          price,
          images,
          description,
          categories,
        }),
      );
    const regex = /(<([^>]+)>)/gi;
    const Result = data[0].description.replace(regex, '');
  // alert(JSON.stringify(data[0]));
    //alert(Text)
    const images = [
      data[0].images[0].src
    ];
    return (
      <View style={styles.container}>
        <HeaderwithWishlist item={{Wishlistcount:route.params.count1,Title:"Product Details"}}/>
        <ScrollView style={{backgroundColor:colors.white}}>
        <SliderBox
              images={images}
              resizeMethod={'resize'}
              sliderBoxHeight={200}
              ImageComponentStyle={{borderRadius: 10, width: '95%', marginTop: 5,backgroundColor:"#ccc"}}

  resizeMode={'contain'}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor={colors.activedot}
              inactiveDotColor={colors.inactivedot}
            />
          <View style={{width:"95%",marginTop:5, elevation:10,backgroundColor:colors.white,alignSelf:"center",marginTop:10,paddingTop:10,borderTopLeftRadius:5,borderTopRightRadius:5}}>
        <Text
              style={{
fontFamily:"Poppins-SemiBold",
                color: colors.Primary,
                fontSize: Size.primarysize,
                left: width / 20,
              }}>
              {data[0].name}
            </Text>
            <View style={{ left: width / 20}}>
              <Text
                style={{
                  fontSize:Size.medium,
                  color:colors.ash,
                  fontFamily:"Poppins-SemiBold",
                }}>
                {data[0].categories[0].name} 
              </Text>
            </View>
            {this.state.visible?  
            <AntDesign onPress={()=>this.addToWishListHandler(data[0])
} name='hearto' size={25} style={{bottom:height/30,color:colors.rose,elevation:10,alignSelf:"flex-end",right:20}}/>
:    <AntDesign   onPress={()=> 
  this.deleteFromCartHandler(data[0])
} name='heart' size={25} style={{bottom:height/30,color:colors.rose,elevation:10,alignSelf:"flex-end",right:20}}/>
}
            <View
              style={{
                flexDirection: 'row',justifyContent:"space-evenly",backgroundColor:colors.white,borderRadius:10
              }}>
                <TouchableOpacity style={{width:120,height:40,borderRadius:10, justifyContent:"center"}}
                  onPress={() =>
                    this.setState({activeTab: 1, des: !this.state.des})
                  }>
                  <Text style={{fontSize: Size.Primary,fontFamily:"Poppins-SemiBold",
color:colors.Primary,textAlign:"center"}}>
                    Description
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
 style={{width:120,justifyContent:"center",height:40,}}
 onPress={() =>
                    this.setState({activeTab: 2, des: !this.state.des})
                  }>
                  <Text style={{fontSize: Size.Primary, fontFamily:"Poppins-SemiBold",
color:colors.Primary,textAlign:"center"}}>Review</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row',width:width/1.1,justifyContent:"space-evenly"}}>
              {this.state.activeTab == 1 ? (
                <View
                  style={{
                    width: '50%',
                    height: 2,
                    alignSelf: 'center',
                    backgroundColor: colors.ash,
                  }}></View>
              ) : (
                <View style={{width: '50%', height: 2}} />
              )}
              {this.state.activeTab == 2 ? (
                <View
                  style={{
                    width: '50%',
                    alignSelf:"center",
                    height: 2,
                    backgroundColor: colors.ash,
                  }}
                />
              ) : (
                <View style={{width: '50%', height: 2,alignSelf:"center"}} />
              )}
            </View>

            {this.state.activeTab==1 ? (
              Result === '' ? (
                <View
                  style={{
                    paddingTop: height / 13,
                    alignSelf: 'center',
                    paddingBottom: height / 13,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily:"Poppins-SemiBold",
                      color: '#838383',
                    }}>
                    No Description
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    
                    
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: Size.medium,
                      fontFamily:"Poppins-SemiBold",
                      color: '#838383',
                      paddingHorizontal:30,
                      lineHeight:25,
                      alignSelf: 'center',
                    }}>{Result} </Text>
                </View>
              )
            ) : (
             <Reviewscreen/>
            )}

            <View
              style={{
                backgroundColor:colors.Primary,
                width:"99%",alignSelf:"center",paddingVertical:10,
              }}>
              <Text style={{ fontFamily:"Poppins-SemiBold",
 fontSize: Size.medium, color:colors.white,textAlign:"center"
}}>
                Related Products
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{width: "98%",alignSelf:"center",marginTop:8}}>
              {data1.map((item, index) =>
                item.name === Text1 ? null : (
                  <ProductComponent item={item}/>
                  // <View style={{alignItems: 'center'}}>
                  //   <TouchableOpacity
                  //     onPress={() =>
                  //       this.props.navigation.navigate('ProductBuy', {
                  //         id: item.categories[0].id,
                  //         name: item.name,
                  //       })
                  //     }
                  //     style={{padding: scale(30)}}>
                  //     <Avatar size="large" source={{uri: item.images[0].src}} />
                  //   </TouchableOpacity>
                  //   <Text
                  //     style={{
                  //       top: height / 120,
                  //       marginLeft: 30,
                  //       marginRight: 30,
                  //     }}>
                  //     {item.name}
                  //   </Text>
                  //   <Text
                  //     style={{
                  //       top: height / 120,
                  //       marginLeft: 30,
                  //       marginRight: 30,
                  //       fontWeight: 'bold',
                  //       fontSize: 10,
                  //     }}>
                  //     Price:{item.price}$
                  //   </Text>
                  // </View>
                ),
              )}
            </ScrollView>

            {/* <View style={{flexDirection: 'row', bottom: height / 8}}>
              <TouchableOpacity
                onPress={() => {
                  this.addToWishListHandler(data[0]);
                }}
                style={[
                  {
                    height: height / 15,
                    width: width / 2.5,
                    borderRadius: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.backgroundcolor,
                    marginLeft: height / 30,
                    marginRight: height / 60,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  ADD TO WISHLIST
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                //   onPress={()=>  alert("Added to WishList") }
                onPress={() => {
                  this.addCartHandler(data[0]);
                }}
                style={[
                  {
                    height: height / 15,
                    width: width / 2.5,
                    borderRadius: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.backgroundcolor,
                    marginLeft: height / 60,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </ScrollView>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",padding:10,backgroundColor:colors.white,borderTopWidth:1,borderTopColor:colors.Primary}}>
        <View style={{ left: width / 50,flexDirection:"column",justifyContent:"center",elevation:12}}>
              <Text
                style={{
                  fontSize:Size.primarysize,
                  fontFamily:"Poppins-SemiBold",
                  color:colors.Primary
                }}>
                ${data[0].price} 
              </Text>
              <Text
                style={{
                  fontSize:Size.low,
                  textAlign:"center",
                  fontFamily:"Poppins-SemiBold",
                  color:colors.ash
                }}>
                {data[0].in_stock?"item in stock":"out of stock"} 
              </Text>
            </View>
          
        <TouchableOpacity
                //   onPress={()=>  alert("Added to WishList") }
                onPress={() => {
                  this.addCartHandler(data[0]);
                }}
                style={[
                  {
                    height: 40,
                    width: 180,
                    borderRadius: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.Primary,
                    marginLeft: height / 60,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: Size.medium,
                    textAlign: 'center',
                    fontFamily:"Poppins-SemiBold",
                    color: '#fff',
                  }}>
                  ADD TO CART
                </Text>
              </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  products1: state.products1.searchResults1,
  itemsCount: state.itemsCount,
  wishListItems: state.wishListItems,
});
const mapDispatchToProps = dispatch => {
  return {
    Product_APICALL: () => dispatch(Product_APICALL()),
    addToCart: itemData => {
      dispatch({
        type: 'ADD_TO_CART',
        item: itemData,
      });
    },
    addToWishList: itemData => {
      dispatch({
        type: 'ADD_TO_WISH_LIST',
        item: itemData,
      });
    },
    deleteFromCart: (itemData) => {
      dispatch({
        type: "DELETE_FROM_CART",
        item: itemData,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buy);
