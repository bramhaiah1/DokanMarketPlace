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
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../../Styles/colors/Colors";
import { connect } from "react-redux";
import { scale, verticalScale, moderateScale, height, width } from "../../../Styles/Dimensions/Dimentions"
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
  };

  componentDidMount = () => {
    this.getItemsCount();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
        this.getItemsCount();
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
                  <Icon
                    name="minussquareo"
                    size={25}
                    color="#808080"
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
                  <Icon
                    name="minussquareo"
                    size={25}
                    color="#808080"
                    style={{ marginRight: 10, marginTop: 2 }}
                  />
                </TouchableOpacity>
              )}

              <Text style={{ fontSize: 20, color: "#808080" }}>{pro.item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.increaseQuantity(pro.item);
                  setTimeout(this.getItemsCount, 1000);
                }}
              >
                <Icon
                  name="plussquareo"
                  size={25}
                  color="#808080"
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
                <FontAwesome name="trash" size={24} color="#808080" style={{ left: width / 30 }} />
              </TouchableOpacity>

            </View>
          </View>
        </View>

      </View>
    );
  };
  render() {
    if (this.state.itemsCount <= 0) {
      return (
        <View style={styles.main}>
         
          <View style={[styles.centerElement, { height: 450 }]}>
            <Image
              style={{
                borderRadius: 20,
                height: 200,
                width: 260,

                alignSelf: "center"
              }}
              source={require("../../../assets/wishlist.png")}
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
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.main}>
         
          <ScrollView>
            <FlatList data={this.state.itemsInCart} renderItem={this.loadproducts} />
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
              <Text style={{ fontSize: 13, color: colors.backgroundcolor, fontWeight: "bold" }}>TO BE PAID</Text>
              <Text style={[styles.text4, { right: width / 15 }]}>${this.props.total + 20 - 15}</Text>


            </View>
            <View style={{
              marginTop: height / 30, marginBottom: height / 30
            }}>

              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("Checkout");

                //this.props.orderPlaced();
                //setTimeout(this.getItemsCount, 1000);
              }} style={styles.Done} >

                <Text style={styles.Getstartedtext}>Checkout</Text></TouchableOpacity>
            </View>

            </ScrollView>
        </View>
      );
    }
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
    color: colors.backgroundcolor,
    fontFamily: "halfmoon_bold",
    fontSize: 15,
    fontWeight: "bold",
    top: height / 160
  },
  Done: {
    width: width / 1.2,
    height: height / 20,
    backgroundColor: colors.backgroundcolor,
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
  text1: { fontWeight: "bold", color: colors.backgroundcolor, fontSize: 20 },
  text3: { fontSize: 13, fontWeight: "bold" },
  text4: { fontSize: 13, color: colors.backgroundcolor, fontWeight: "bold" },
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
