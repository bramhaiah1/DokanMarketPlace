import React from 'react';
import {
  StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, FlatList, Modal
} from 'react-native';
import {
    scale,
    verticalScale,
    moderateScale,
    height,
    width,
  } from '../../../Styles/Dimensions/Dimentions';
  import {colors} from '../../../Styles/colors/Colors';
  import { Header, Right, Body, Title, Left } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/Ionicons"
import { connect } from "react-redux";
import { Avatar, Badge, withBadge } from "react-native-elements";
import PayPal from 'react-native-paypal-gateway';

import CheckoutModel from "./CheckoutModel";

const Checkout = (props) => {

    const {route} = props;

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getItemsCount1();
            getItemsCount();
          });
    
        return unsubscribe;
      }, [props.navigation]);
  const [count, setcount] = React.useState('')
  const [visible, setvisible] = React.useState(false)

  const [badge, setbadge] = React.useState(false)

  const images2 = [
    { id: 1, image: require("../../../assets/icon-bank.png"), color: colors.lightactivedotcolor, text: "Bank transfer", bordercolor: colors.activedotcolor },
    { id: 2, image: require("../../../assets/icon-cash.png"), color: 'rgba(252,241,241,255)', text: "Cash on delivery", bordercolor: "#FED4D4" },
    { id: 3, image: require("../../../assets/paypal.png"), color: 'rgba(228,242,255,255)', text: "PayPal", bordercolor: "#80C0FC" },
    { id: 4, image: require("../../../assets/icon-card.png"), color: 'rgba(234,244,230,255)', text: "Master Card", bordercolor: "#D9E5B7" },

  ]
  const getItemsCount = () => {
    setcount(count + 1)
setbadge(true)

    let count2 = props.itemsCount.itemsCount1;
    props.navigation.setParams({
      count1: count2,
    });


  };
  const getItemsCount1 = () => {
    setcount(count + 1)

    let count3 = props.itemsCount.itemsCount;
    // alert(count3)

    props.navigation.setParams({
      count: count3,
    });


  };
  const paypal = () => {
    //("a")
    PayPal.initialize(PayPal.SANDBOX, "AdAgu97jlo-fwzSs_KaeI8zAHDOVuMzA_37udqlGNS-xWxl7WJySkos-PJTRvN0AX_hmP8957YwQOfgM");
    PayPal.pay({
      price: '1.70',
      currency: 'USD',
      description: 'Your description goes here',
    }).then(confirm => console.log(confirm))
      .catch(error => console.log(error));
  }
  const _keyExtractor = (item, idx) => item.id;


  const _renderItem = ({ item }) => (


    <CheckoutModel item={item} />
  );
if(!badge){return null}else{
  return (
    <View style={styles.mainContainer}>
      <Header style={styles.Header}>
        <Left>
          <AntDesign onPress={() => props.navigation.goBack()} name='arrowleft' size={25} color={colors.backgroundcolor} />
        </Left>
        <Body>
          <Title style={styles.title}>Checkout</Title>
        </Body>

        <Right>

          <Icon onPress={() => props.navigation.navigate("Wish List")} style={{ right: width / 10, color: "rgba(115,149,160,255)" }} name="heart-outline" size={25} />

          <Badge
            value={route.params.count1}
            status="primary"
            containerStyle={{ position: "absolute", right: width / 8, bottom: height / 50 }}
          />
          <Badge
            value={route.params.count}
            status="primary"
            containerStyle={{ position: "absolute", right: 1, bottom: height / 50 }}
          />
          <AntDesign onPress={() => props.navigation.navigate("Cartscreen")} style={{ right: width / 30, color: "rgba(115,149,160,255)", }} name="shoppingcart" size={25} />

        </Right>


      </Header>
     
      <View style={styles.view1}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={visible}
          onRequestClose={() => { console.log("Modal has been closed.") }}>
          <View style={styles.modal}>
            <View style={styles.modalView1}>
              <Image style={{ alignSelf: "center" }} source={require("../../../assets/completed-illustration.png")} />
              <AntDesign onPress={() => {
                setvisible(!visible)
              }} name="closecircle" size={20} style={{ alignSelf: "flex-end", color: colors.Hot, right: width / 40, bottom: height / 5.9, left: width / 180 }} />

              <Text style={{ alignSelf: "center", color: colors.backgroundcolor, fontWeight: "bold", fontSize: 23 }}>Thank you!</Text>
              <Text style={{ paddingLeft: width / 5, paddingRight: width / 5, marginTop: height / 40, color: colors.black, fontWeight: "500", textAlign: "center", alignSelf: "center" }}>Your payment is completed successfully.</Text>
              <TouchableOpacity onPress={() => {
                props.navigation.navigate("Homescreen")
              }} style={styles.submitBid}><Text style={{ color: colors.white, textAlign: "center" }}>Back to shop</Text></TouchableOpacity>

            </View>

          </View>
        </Modal>

        <Text style={styles.featuredtext}>Shipping to</Text>
        <TouchableOpacity>
          <AntDesign name='down' style={styles.downicon} size={20} />
        </TouchableOpacity></View>

      <View style={styles.radioview}
      >

        <View style={styles.innercircle}>
          <View style={styles.outercircle}></View></View>

      </View>
      <View style={styles.view2}>
        <Text style={{ fontSize: 15 }}>David Henix</Text>
        <AntDesign name='edit' size={20} style={{ marginLeft: width / 2.6, color: colors.ash }} />
        <AntDesign name='delete' size={20} style={{ marginRight: width / 4, color: colors.ash }} />

      </View>
      <View style={{ bottom: height / 50, left: width / 6, marginRight: width / 2.1 }}>
        <Text style={{ fontSize: 11, }}>
          H K Wonton Garden | (212) 349-1495
79 Mulberry St, New York, NY 10013</Text>
      </View>
      <View >

        <TouchableOpacity style={[styles.Done, { backgroundColor: colors.backgroundcolor }]} >

          <Text style={[styles.Getstartedtext, { color: colors.white }]}><AntDesign name="plus" size={20} />  Add New Address</Text></TouchableOpacity>
      </View>
      <View style={styles.view1}>
        <Text style={styles.featuredtext}>Select payment method</Text>
        <TouchableOpacity>
          <AntDesign name='down' style={styles.downicon} size={20} />
        </TouchableOpacity></View>
      <FlatList
        numColumns={2}

        style={{
          marginLeft: width / 20, marginRight: width / 12, marginTop: height / 10,

          flexGrow: 0
        }}
        data={images2}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
      />
      <View style={{
        top: height / 15,
      }}>

        <TouchableOpacity
          onPress={() => paypal()}
          //              onPress = {() => {  
          //                props.orderPlaced();
          // setTimeout(getItemsCount, 1000);
          //                   setvisible(!visible)}} 
          style={styles.Done} >

          <Text style={styles.Getstartedtext}>Place Order</Text></TouchableOpacity>
      </View>
      <View>

      </View>
    </View>

  )}
}

const styles = StyleSheet.create(
  {
    mainContainer: { flex: 1, backgroundColor: colors.white },
    Header: { backgroundColor: colors.white, alignSelf: "center", },
    badge: {
      bottom: height / 25,
      width: 20,
      height: 20,
      backgroundColor: colors.activedotcolor
    },
    text1: { color: colors.ash, alignSelf: "center", bottom: height / 60, fontSize: 20, fontWeight: "bold" },
    text2: { color: colors.ash, fontWeight: "bold", alignSelf: "center", textAlign: "center", fontSize: 12, paddingLeft: width / 10, paddingRight: width / 10, justifyContent: "space-between" },
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
      fontSize: 15,
      alignItems: "center"
    },

    title: {
      color: colors.backgroundcolor,
      fontWeight: "bold",
      alignSelf: "center",
      left: width / 10
    },
    view1:
    {
      flexDirection: "row",
      justifyContent: "space-between", top: height / 30
    },
    featuredtext: { left: width / 12, fontWeight: "bold", fontSize: 20 },
    downicon: { right: width / 12, elevation: 2, color: colors.backgroundcolor },
    radioview: { alignSelf: "flex-start", marginTop: height / 20, left: width / 12, flexDirection: "row" },
    innercircle: {
      height: 20,
      width: 20,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: colors.ash,
      alignItems: 'center',
      justifyContent: 'center'
    },
    outercircle: {
      height: 10,
      width: 10,
      borderRadius: 6,
      backgroundColor: colors.backgroundcolor,
    },
    view2: { flexDirection: "row", justifyContent: "space-between", bottom: height / 40, left: width / 6, },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(115,149,160,0.5)",
      height: height,
      width: width,



    },
    modalView1: { width: width / 1.1, height: height / 2.5, backgroundColor: colors.white, borderRadius: 10, bottom: height / 20 },
    submitBid: { backgroundColor: colors.backgroundcolor, overflow: "hidden", marginTop: height / 19, width: width / 1.1, height: height / 20, alignSelf: "center", justifyContent: "center", borderRadius: 10 }

  }

)
const mapStateToProps = (state) => ({

  cartItems: state.cartItems,
  total: state.cartItems.total,
  itemsCount: state.itemsCount,

});
const mapDispatchToProps = dispatch => {
  return {
    getProducts1: () => dispatch(getProducts1()),
    orderPlaced: () => {
      dispatch({
        type: "ORDER_PLACED",
      });
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

