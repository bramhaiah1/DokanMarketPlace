import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome5";
import {colors,width,height,scale,verticalScale, Size} from '../../Config/Theme';
import { connect } from "react-redux";
import {
  Header,
  Right,
  Body,
  Title,
  Left,
  Label,
  Card,
  CardItem,
} from 'native-base';
import {Avatar, Badge, withBadge} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

import { ScrollView } from "react-native-gesture-handler";
class CartScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Items in Cart",
    };
  };
  state = {
    itemsInCart: null,
    itemsCount: -1,
    count:0,
  };

  componentDidMount = () => {
    this.getItemsCount();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
        this.getItemsCount();
        this.getItemsCount1();

    });
    // alert(JSON.stringify(this.props.total))
  };
  componentWillUnmount() {
    this._unsubscribe();
  }
  getItemsCount = () => {
    let Items = this.props.cartItems.cartItems.map((item) => {
      return item;
    });

    this.setState({
      itemsInCart: Items,
      itemsCount: this.props.itemsCount.itemsCount,
    });
  }; getItemsCount1 = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },

      () => {
        let count = this.props.itemsCount.itemsCount1;
       // alert(count)
        this.props.navigation.setParams({
          count1: count,
        });
      },
    );
  };
  loadproducts = (pro) => {
    //alert(JSON.stringify(pro))

    return (
      <View>

        <View style={styles.productMain}>
          <View style={{ width: "35%", height: height / 7 }}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
                borderRadius: 5,
              }}
              source={{ uri: pro.item.images[0].src }}
            />
          </View>
          <View
            style={{
              justifyContent: "space-around",
              alignContent: "center",
              marginLeft: 20,
            }}
          >
            <View style={{ overFlow: "hidden" }}>
              <Text style={styles.text}>
                {pro.item.name}
              </Text>
            </View>
            <Text style={styles.price}>Price : ${parseFloat((pro.item.price) * (pro.item.quantity)).toFixed(2)} </Text>

            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              {pro.item.quantity > 1 ? (
                <TouchableOpacity
                  onPress={() => {
                    this.props.decreaseQuantity(pro.item);
                    setTimeout(this.getItemsCount, 1000);
                  }}
                >
                  <AntDesign
                    name="minussquareo"
                    size={25}
                    color={colors.Primary}
                    style={{ marginRight: 10, marginTop: 2 }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  disabled={true}
                  onPress={() => {
                    this.props.decreaseQuantity(pro.item);
                    setTimeout(this.getItemsCount, 1000);
                  }}
                >
                  <AntDesign
                    name="minussquareo"
                    size={25}
                    color={colors.Primary}
                    style={{ marginRight: 10, marginTop: 2 }}
                  />
                </TouchableOpacity>
              )}

              <Text style={{ fontSize: 20,                     color:colors.Primary
 }}>{pro.item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.increaseQuantity(pro.item);
                  setTimeout(this.getItemsCount, 1000);
                }}
              >
                <AntDesign
                  name="plussquareo"
                  size={25}
                  color={colors.Primary}
                  style={{ marginLeft: 10, marginTop: 2 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.deleteItem(pro.item);
                  setTimeout(this.getItemsCount, 1000);
                }}
                // onPress={()=>alert("Working on it")}
                style={{
                  flexDirection: "row",
                  marginLeft: "30%",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <FontAwesome name="trash" size={24}                     color={colors.Primary}
 style={{ left: width / 30 }} />
              </TouchableOpacity>

            </View>
          </View>
        </View>

      </View>
    );
  };
  render() {
      return (
        <View style={styles.main}>
                     <Header style={{backgroundColor: colors.white}}>
          <Left>
            <AntDesign
              onPress={() => this.props.navigation.goBack(null)}
              name="arrowleft"
              style={{color: colors.Primary}}
              size={20}
            />
          </Left>
          <Body style={{alignItems:"center",left:20}}>
            <Title style={{color: colors.Primary}}>
              Items In Cart
            </Title>
          </Body>
          <Right>
            {/* <Icon
              onPress={() => this.props.navigation.navigate('WishList')}
              style={{right: width / 20, color: colors.Primary}}
              name="heart-outline"
              size={25}
            /> */}

            {/* <Badge
              value={this.props.count}
              status="primary"
              containerStyle={{
                position: 'absolute',
                right: width / 40,
                bottom: height / 50,
              }}
            /> */}
            {/* <Badge
              value={route.params.count}
              status="primary"
              containerStyle={{
                position: 'absolute',
                right: 1,
                bottom: height / 50,
              }}
            />
            <AntDesign
              onPress={() => this.props.navigation.navigate('Cartscreen')}
              style={{right: width / 30, color: colors.backgroundcolor}}
              name="shoppingcart"
              size={25}
            />*/ }
          </Right>
        </Header>

         
         {this.state.itemsCount <= 0?
          <View style={[styles.centerElement, { height: 450 }]}>
            <Image
              style={{
                borderRadius: 20,
                height: 200,
                width: 260,

                alignSelf: "center"
              }}
              source={require("../../assets/wishlist.png")}
            ></Image>
            <TouchableOpacity
              style={{
                marginTop: 400,

                width: 150,
                backgroundColor: "rgba(115,149,160,255)",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "absolute",
                alignSelf: "center",
                height: 35,
                top: 10
              }}
              onPress={() => this.props.navigation.navigate("Homescreen")}
            >
              <Text style={{ fontWeight: "bold", color: '#fff' }}>
                Start Shopping
              </Text>
            </TouchableOpacity>
          </View>:
          
          <View>
            <ScrollView style={{height:height/2}}>
          <FlatList data={this.state.itemsInCart} renderItem={this.loadproducts} />
          </ScrollView>
          <View style={styles.border} />
          <View style={styles.view2}>
            <Text style={styles.text3}>SUB TOTAL</Text>
            <Text style={[styles.text3, { right: width / 15 }]}>${this.props.total}</Text>

          </View>
          <View style={styles.view2}>
            <Text style={{ fontSize: 13, }}>Shipping Fee</Text>
            <Text style={{ fontSize: 13, right: width / 15 }}>$20</Text>


          </View>
          <View style={styles.border1} />
          <View style={styles.view2}>
            <Text style={styles.text4}>Total</Text>
            <Text style={[styles.text4, { right: width / 15 }]}>${this.props.total + 20}</Text>


          </View>
          <View style={styles.view2}>
            <Text style={{ fontSize: 13, }}>Discount</Text>
            <Text style={{ fontSize: 13, right: width / 15 }}>$15.00</Text>


          </View>
          <View style={styles.border1} />
          <View style={styles.view2}>
            <Text style={{ fontSize: 13, color: colors.Primary, fontWeight: "bold" }}>TO BE PAID</Text>
            <Text style={[styles.text4, { right: width / 15 }]}>${this.props.total + 20 - 15}</Text>


          </View>
          <View style={{
            marginTop: height / 30, marginBottom: height / 30,backgroundColor:colors.white
          }}>

            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("Checkout");

              //this.props.orderPlaced();
              //setTimeout(this.getItemsCount, 1000);
            }} style={styles.Done} >

              <Text style={styles.Getstartedtext}>Checkout</Text></TouchableOpacity>
          </View>
</View>
          }
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white

  },
  bookMain: {
    marginTop: 10,
    width: "100%",
    height: 500,

    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  productMain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    backgroundColor: 'rgba(242,242,247,255)'
  },
  text: {
    color: "#808080",
    fontFamily: "halfmoon_bold",
    fontSize: 20,
    fontWeight: "bold",
    top: height / 80
  },
  price: {
    color: colors.Primary,
    fontFamily: "halfmoon_bold",
    fontSize: Size.medium,
    fontWeight: "bold",
    top: height / 160
  },
  Done: {
    width: width / 1.2,
    height: height / 20,
    backgroundColor: colors.Primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: 'center',
  },
  Getstartedtext: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center"
  },
  View1: {
    flexDirection: "row", marginTop: height / 60, alignSelf: "center",
  },
  view2: { flexDirection: "row", justifyContent: "space-between", marginLeft: width / 3.2 },
  text1: { fontWeight: "bold", color: colors.Primary, fontSize: 20 },
  text3: { fontSize: 13, fontWeight: "bold" },
  text4: { fontSize: 13, color: colors.Primary, fontWeight: "bold" },
  border: { height: 2, backgroundColor: colors.cement, width: width / 1.2, alignSelf: "center", marginBottom: height / 150, marginTop: height / 50 },
  text2: { textAlign: "center", color: colors.white, fontWeight: 'bold' },
  border1: { height: 2, backgroundColor: colors.cement, width: width / 1.6, alignSelf: "center", left: width / 10, marginBottom: height / 180, marginTop: height / 180 },

});

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    total: state.cartItems.total,
    itemsCount: state.itemsCount,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (itemData) => {
      dispatch({
        type: "DELETE_ITEM",
        item: itemData,
      });
    },
    decreaseQuantity: (itemData) => {
      dispatch({
        type: "DECREASE_QUANTITY",
        item: itemData,
      });
    },
    increaseQuantity: (itemData) => {
      dispatch({
        type: "INCREASE_QUANTITY",
        item: itemData,
      });
    },
    orderPlaced: () => {
      dispatch({
        type: "ORDER_PLACED",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
