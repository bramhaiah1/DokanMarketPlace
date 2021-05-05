import React from 'react';
import {
  StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, FlatList, Modal,TextInput
} from 'react-native';

import {colors,width,height,scale,verticalScale} from '../../Config/Theme';
  import { Header, Right, Body, Title, Left } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/Ionicons"
import { connect } from "react-redux";
import { Avatar, Badge, withBadge } from "react-native-elements";
import PayPal from 'react-native-paypal-gateway';
import AsyncStorage from '@react-native-community/async-storage';
import CheckoutModel from "./CheckoutModel";
import AddAddress from "./AddAddress";
import { ScrollView } from 'react-native-gesture-handler';
const Checkout = (props) => {

    const {route} = props;
    const [Visible1, setvisible1] = React.useState(false);
    const [first_name, setfirst_name] = React.useState('');
    const [last_name, setlast_name] = React.useState('');
    const [company, setcompany] = React.useState('');
    const [address_1, setaddress_1] = React.useState('');
    const [address_2, setaddress_2] = React.useState('');
    const [city, setcity] = React.useState('');
    const [state, setstate] = React.useState('');
    const [postcode, setpostcode] = React.useState('');
    const [country, setcountry] = React.useState('');
    const [email, setemail] = React.useState('');
    const [phone, setphone] = React.useState('');

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
    // { id: 1, image: require("../../assets/icon-bank.png"), color: colors.lightactivedotcolor, text: "Bank transfer", bordercolor: colors.activedotcolor },
     { id: 2, image: require("../../assets/icon-cash.png"), color: 'rgba(252,241,241,255)', text: "Cash on delivery", bordercolor: "#FED4D4" },
    { id: 3, image: require("../../assets/paypal.png"), color: 'rgba(228,242,255,255)', text: "PayPal", bordercolor: "#80C0FC" },
    // { id: 4, image: require("../../assets/icon-card.png"), color: 'rgba(234,244,230,255)', text: "Master Card", bordercolor: "#D9E5B7" },

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
     <ScrollView>
    {Visible1?           
                                                    <View>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Email</Text>
                                             <TextInput onChange={(text)=>setfirst_name(text)}  placeholder={"youremail@gmail.com"} style={styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>First Name</Text>
                                             <TextInput  placeholder={first_name} style={styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Last Name</Text>
                                             <TextInput  placeholder={"Bennett"} style={styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Street Address</Text>
                                             <TextInput   placeholder={"625 Nolan CauseWay Suite 076"} style={styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Apt,Suite(optional)</Text>
                                             <TextInput   placeholder={"Ex:Unit 332"} style={styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>State</Text>
                                             <TextInput   placeholder={"Ex:Dhaka"} style={styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Country</Text>
                                             <TextInput   placeholder={"India"} style={styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Zip Code</Text>
                                             <TextInput   placeholder={"Unit332"} style={styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Phone Number</Text>
                                             <TextInput   placeholder={"(xxx)xxx-xxxx"} style={styles.Textinput}/>
                                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                            <TouchableOpacity  onPress={()=>setvisible1(!Visible1)} style={{left:width/10,backgroundColor:"rgba(115,149,160,255)",elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",color:"#fff",fontWeight:"bold"}}>Cancel</Text></TouchableOpacity>
                                            <TouchableOpacity  onPress={()=>setvisible1(!Visible1)}style={{right:width/10,backgroundColor:"rgba(115,149,160,255)",elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",fontWeight:"bold",color:"#fff"}}>Save</Text></TouchableOpacity>

                                        </View>
                                         </View>:
        <TouchableOpacity onPress={()=>setvisible1(true)} style={[styles.Done, { backgroundColor: colors.backgroundcolor }]} >

          <Text style={[styles.Getstartedtext, { color: colors.white }]}><AntDesign name="plus" size={20} />  Add New Address</Text></TouchableOpacity>
}
   </ScrollView>
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
,Textinput:{
  elevation: 9,
  paddingLeft:width/20,
  paddingRight:width/7,
alignSelf:"center",
  width:width/1.2,
      fontSize: 10,
      height: height/17,
marginTop:height/45,
marginBottom:height/45,

  backgroundColor: '#fff',
// backgroundColor:"#FFFF",
borderRadius:10,
color: 'black',
borderColor:"#fff",
fontSize:20



  },
  
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

