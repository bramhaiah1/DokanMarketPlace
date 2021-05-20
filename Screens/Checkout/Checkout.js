import React from 'react';
import {
  StyleSheet, View, Image, Text, TouchableOpacity,TextInput, ImageBackground, FlatList, Modal
} from 'react-native';

  import { Header, Right, Body, Title, Left } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/Ionicons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { connect } from "react-redux";
import { Avatar, Badge, withBadge } from "react-native-elements";
import PayPal from 'react-native-paypal-gateway';
import {colors,width,height,scale,verticalScale, Size} from '../../Config/Theme';
import CheckoutModel from "./CheckoutModel";
import { ScrollView } from 'react-native-gesture-handler';
import HeaderwithoutMenu from '../../Components/HeaderwithoutMenu'
import axios from 'axios'
import color from 'color';
import {
  Order_APICall,Order_update_APICall
} from '../../Store/Actions/index';
const Checkout = (props) => {

    const {route} = props;
//alert(route.params)
    React.useEffect(() => {
    //  alert(JSON.stringify(props.cartItems.AddAddress))
    //  props.Order_APICall();
        const unsubscribe = props.navigation.addListener('focus', () => {
            getItemsCount1();
            getItemsCount();
          });
    
        return unsubscribe;
      }, [props.navigation]);
  const [count, setcount] = React.useState('')
  const [visible, setvisible] = React.useState('')
  const [visible2, setvisible2] = React.useState(false);
  const [type, settype] = React.useState('');

  const [badge, setbadge] = React.useState(false)
  const [visible1, setvisible1] = React.useState(false);
  const [view1, setview1] = React.useState(false);
  const [view2, setview2] = React.useState(false);

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
   
  const images2 = [
    { id: 2, image: require("../../assets/icon-cash.png"), color: 'rgba(252,241,241,255)', text: "Cash on delivery", bordercolor: "#FED4D4" },
    { id: 3, image: require("../../assets/paypal.png"), color: 'rgba(228,242,255,255)', text: "PayPal", bordercolor: "#80C0FC" },
   
  ]
  const Submit=()=>{
   
 //   alert(JSON.stringify(props.Address1))
 
     if(first_name&&last_name&&company&&address_1&&address_2&&city&&state&&country&&postcode&&email&&phone){
      // alert('Submited')
      var data={
        "first_name":first_name,
        "last_name":last_name,
        "company":company,
        "address_1":address_1,
        "address_2":address_2,
        "city":city,
        "state":state,
        "country":country,
        "postcode":postcode,
        "email":email,
        "phone":phone,
        "Type":type
 
      }
     props.UpdateAddress(data)
       setvisible1(!visible1)

     //  alert(JSON.stringify(data))
 
     }else{
 alert("Please fill all details")
 
     }
   }
 
  const getItemsCount = () => {
    setcount(count + 1)
setbadge(true)

    let count2 = props.itemsCount.itemsCount1;
    props.navigation.setParams({
      count1: count2,
    });


  };
  const edit=(data)=>{
  //  alert(JSON.stringify(data))
    setfirst_name(data.first_name)
    setlast_name(data.last_name)
    setcompany(data.company)
    setaddress_1(data.address_1)
    setaddress_2(data.address_2)
    setstate(data.state)
    setcity(data.city)
    setcountry(data.country)
    setpostcode(data.postcode)
    setemail(data.email)
    setphone(data.phone)
    settype(data.Type)
    setvisible1(!visible1)
  }
  const getItemsCount1 = () => {
    setcount(count + 1)

    let count3 = props.itemsCount.itemsCount;
    // alert(count3)

    props.navigation.setParams({
      count: count3,
    });


  };
  const paypal = () => {
    //alert(JSON.stringify(props.Address1))
    var   data1 = props.cartItems.cartItems.map(({id,quantity}) => ({product_id:id,quantity}));
    var data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555"
      },
      shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US"
      },
      line_items: [
      data1
      ],
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total:props.total
        }
      ]
    };
    props.Order_APICall(data);

    PayPal.initialize(PayPal.NO_NETWORK, "AdAgu97jlo-fwzSs_KaeI8zAHDOVuMzA_37udqlGNS-xWxl7WJySkos-PJTRvN0AX_hmP8957YwQOfgM");
    PayPal.pay({
      price: '1.70',
      currency: 'USD',
      description: 'Your description goes here',
    }).then(confirm => {
     if(confirm.response.state==="approved")
     {
      const data = {
        status: "completed",
        id:props.Order.Order.id
      };
const id=props.Order.Order.id;
//alert(id)
       props.Order_update_APICall(data,id);
       props.navigation.navigate("MyTransaction")
//alert("Kj")
  }
     // alert(JSON.stringify(confirm.response.state))
    })
      .catch(error => console.log(error));
  }
  const _keyExtractor = (item, idx) => item.id;


  const _renderItem = ({ item }) => (


    <CheckoutModel item={item} />
  );
if(!badge){return null}else{
  return (
    <View style={styles.mainContainer}>
      <HeaderwithoutMenu item={{Title:"Checkout"}}/>
      <View style={{flex:1,backgroundColor:colors.white,}}>
        <ScrollView>
        {visible1?           
                                                    <View>
                                             <Text style={styles.Text12}>First Name</Text>
                                             <TextInput onChangeText={(text)=>setfirst_name(text)}  placeholder={"Sandria"} value={first_name} style={styles.Textinput}/>
                                             <Text style={styles.Text12}>Last Name</Text>
                                             <TextInput onChangeText={(text)=>setlast_name(text)} placeholder={"Bennett"}value={last_name} style={styles.Textinput}/>
                                             <Text style={styles.Text12}>Company</Text>
                                             <TextInput onChangeText={(text)=>setcompany(text)} placeholder={"AT&T Software"}value={company} style={styles.Textinput}/>
                                             <Text  style={styles.Text12}>Address 1</Text>
                                             <TextInput  multiline={true}
 textAlignVertical= 'top' 
             numberOfLines={3}   onChangeText={(text)=>setaddress_1(text)}   placeholder={"625 Nolan CauseWay Suite 076"} value={address_1} style={[styles.Textinput,{height:160}]}/>
             <Text style={styles.Text12}>Address 2</Text>
                                             <TextInput multiline={true}
 textAlignVertical= 'top' 
             numberOfLines={3}    onChangeText={(text)=>setaddress_2(text)}  value={address_2}  placeholder={"Ex:625 Nolan CauseWay Suite 076"}  style={[styles.Textinput,{height:160}]}/>
                                             
                                             
                                             <Text style={styles.Text12}>State</Text>
                                             <TextInput  onChangeText={(text)=>setstate(text)}  placeholder={"CA"} value={state} style={styles.Textinput}/>
                                             <Text style={styles.Text12}>City</Text>
                                             <TextInput  onChangeText={(text)=>setcity(text)}   placeholder={"Ex:San Fransico"} value={city} style={styles.Textinput}/>
                                             <Text style={styles.Text12}>Country</Text>
                                             <TextInput  onChangeText={(text)=>setcountry(text)}  placeholder={"US"}value={country} style={styles.Textinput}/>
                                             <Text style={styles.Text12}>Post Code</Text>
                                             <TextInput  onChangeText={(text)=>setpostcode(text)}  placeholder={"517501"} value={postcode} style={styles.Textinput}/>

                                             <Text style={styles.Text12}>Email</Text>
                                             <TextInput onChangeText={(text)=>setemail(text)} value={email}  placeholder={"youremail@gmail.com"} style={styles.Textinput}/>
                                             
                                             <Text style={styles.Text12}>Phone Number</Text>
                                             <TextInput  onChangeText={(text)=>setphone(text)} value={phone}  placeholder={"(xxx)xxx-xxxx"} style={styles.Textinput}/>
                                   
                                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                            <TouchableOpacity  onPress={()=>setvisible1(!visible1)} style={{fontSize:Size.medium, left:width/10,backgroundColor:colors.Primary,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",color:"#fff",fontWeight:"bold"}}>Cancel</Text></TouchableOpacity>
                                            <TouchableOpacity  onPress={()=>Submit()}style={{ fontSize:Size.medium, right:width/10,backgroundColor:colors.Primary,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",fontWeight:"bold",color:"#fff"}}>Save</Text></TouchableOpacity>

                                        </View>
                                         </View>:<View>
        {/* {JSON.stringify(props.Order.Order)==='[]'?null:<View><Text>{props.Order.Order.id}</Text></View>
} */}
        <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:10}}>
        <Text style={styles.featuredtext}>Shipping to</Text>
        {props.cartItems.AddAddress===""?null:
         !view1?<AntDesign  onPress={()=>setview1(!view1)} name='down' style={styles.downicon} size={20} />
       :<AntDesign  onPress={()=>setview1(!view1)} name='up' style={styles.downicon} size={20} />
}</View>
{view1?<View>
  {props.cartItems.AddAddress.map(
                (item, index) => (
  <View>
      <View style={{flexDirection:"row",marginTop:10,marginBottom:10,}}>
        <Text style={{ fontSize: Size.primarysize,left:30,fontWeight:"bold" }}>
          {visible===item.first_name?<Ionicons onPress={()=>setvisible(item.first_name)} name='radio-button-on' style={{color:colors.Primary,right:20}} size={20} /> :<Ionicons  onPress={()=>setvisible(item.first_name)} name='radio-button-off-sharp' style={{color:colors.Primary,}} size={20} />}  {item.Type} Address</Text>
        <AntDesign onPress={()=>edit(item)} name='edit' size={20} style={{left:130,color:colors.Primary}}  />
        <AntDesign onPress={()=>props.DeleteAddress(item)}  name='delete' size={20} style={{left:150,color:colors.Primary}} />
      </View>
      <View style={{  marginHorizontal:60}}>
        <Text style={{ fontSize: Size.medium,lineHeight:18,fontFamily:"Poppins-SemiBold",
color:colors.ash }}>
       {item.address_1}| {item.phone} {item.state}{item.country}{item.postcode}</Text>
      </View>
      </View>))}
     
    
      </View>:null}

    
      <View style={{marginVertical:20}} >

        <TouchableOpacity onPress={()=>props.navigation.navigate("Addaddress")} style={[styles.Done, { backgroundColor: colors.Primary,marginTop:20 }]} >

          <Text style={[styles.Getstartedtext, { color: colors.white }]}><AntDesign name="plus" size={20} />  Add New Address</Text></TouchableOpacity>
      </View>
      <View style={styles.view1}>
        <Text style={styles.featuredtext}>Select payment method</Text>
         {!view2?
         <AntDesign onPress={()=>setview2(!view2)} name='down' style={styles.downicon} size={20} />
       :<AntDesign onPress={()=>setview2(!view2)} name='up' style={styles.downicon} size={20} />
    } 
     </View>
        {view2?
      <FlatList
        numColumns={2}

        style={{
          marginLeft: width / 20, marginRight: width / 12, 

          flexGrow: 0
        }}
        data={images2}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
      />:null}
      <View style={{
       // top: height / 15,
      }}>
  <View style={styles.border} />
          <View style={styles.view2}>
            <Text style={styles.text3}>SUB TOTAL</Text>
            <Text style={[styles.text3, { right: width / 15 }]}>${props.total}</Text>

          </View>
          <View style={styles.view2}>
            <Text style={{ fontSize: 13, }}>Shipping Fee</Text>
            <Text style={{ fontSize: 13, right: width / 15 }}>$20</Text>


          </View>
          <View style={styles.border1} />
          <View style={styles.view2}>
            <Text style={styles.text4}>Total</Text>
            <Text style={[styles.text4, { right: width / 15 }]}>${props.total + 20}</Text>


          </View>
          <View style={styles.view2}>
            <Text style={{ fontSize: 13, }}>Discount</Text>
            <Text style={{ fontSize: 13, right: width / 15, }}>$15.00</Text>


          </View>
          <View style={styles.border1} />
          <View style={styles.view2}>
            <Text style={{ fontSize: 13, color: colors.Primary, fontFamily:"Poppins-SemiBold",
 }}>TO BE PAID</Text>
            <Text style={[styles.text4, { right: width / 15 }]}>${props.total + 20 - 15}</Text>


          </View>
        <View style={{marginVertical:40}}>
        <TouchableOpacity
          onPress={() => paypal()}
          //              onPress = {() => {  
          //                props.orderPlaced();
          // setTimeout(getItemsCount, 1000);
          //                   setvisible(!visible)}} 
          style={styles.Done} >

          <Text style={styles.Getstartedtext}>Place Order</Text></TouchableOpacity>
          </View>
      </View>
      <View>

      </View></View>}
      </ScrollView>
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
      backgroundColor: colors.Primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignSelf: "center",
      alignItems: 'center',
    },
    Text12:{
      left:10,color:"#8e8e93",      fontFamily:"Poppins-SemiBold",

    },
    Getstartedtext: {
      color: colors.white,
      fontFamily:"Poppins-SemiBold",
      fontSize: Size.medium,
      alignItems: "center"
    },

    title: {
      color: colors.Primary,
      fontFamily:"Poppins-SemiBold",
      alignSelf: "center",
      left: width / 10
    },
    view1:
    {
      flexDirection: "row",
      justifyContent: "space-between", 
      marginBottom:10,
      marginVertical:10
    },
    featuredtext: { left: 10, fontFamily:"Poppins-SemiBold",
    fontSize: 20 },
    downicon: { right: width / 12,bottom:8, elevation: 2, color: colors.Primary,alignSelf:"flex-end" },
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
    view2: { flexDirection: "row", justifyContent: "space-between", left: width / 6, },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(115,149,160,0.5)",
      height: height,
      width: width,



    },
    Textinput:{
      borderWidth:1,
      borderColor:colors.Primary,
  paddingLeft:width/20,
  paddingRight:width/7,
  fontFamily: 'Poppins-SemiBold',

left:10,
  width:"95%",
      fontSize: 15,
      height: 50,
marginTop:10,
marginBottom:10,

  backgroundColor: '#fff',
// backgroundColor:"#FFFF",
color: 'black',


    
    
      },
    
    modalView1: { width: width / 1.1, height: height / 2.5, backgroundColor: colors.white, borderRadius: 10, bottom: height / 20 },
    submitBid: { backgroundColor: colors.backgroundcolor, overflow: "hidden", marginTop: height / 19, width: width / 1.1, height: height / 20, alignSelf: "center", justifyContent: "center", borderRadius: 10 }
,
view2: { flexDirection: "row", justifyContent: "space-between", marginLeft: width / 3.2 },
text3: { fontSize: 13, fontFamily:"Poppins-SemiBold",
},
text4: { fontSize: 13, color: colors.Primary,fontFamily:"Poppins-SemiBold",
},
border: { height: 2, backgroundColor: colors.cement, width: width / 1.2, alignSelf: "center", marginBottom: height / 150, marginTop: height / 50 },
text2: { textAlign: "center", color: colors.white, fontFamily:"Poppins-SemiBold",
},
border1: { height: 2, backgroundColor: colors.cement, width: width / 1.6, alignSelf: "center", left: width / 10, marginBottom: height / 180, marginTop: height / 180 },

  }

)
const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
  total: state.cartItems.total,
  itemsCount: state.products,
  Order: state.Order,
  Address1:state.cartItems.Address,
  Address:state.cartItems


});


const mapDispatchToProps = dispatch => {
  return {
    getProducts1: () => dispatch(getProducts1()),
    Order_APICall: (data) => dispatch(Order_APICall(data)),
    Order_update_APICall:(data,id) => dispatch(Order_update_APICall(data,id)),
    orderPlaced: () => {
      dispatch({
        type: "ORDER_PLACED",
      });
    },
    DeleteAddress: (data) => {
    
      dispatch({
        type: "DeleteAddress",
        item:data
      });
    },
    UpdateAddress: (data) => {
    
      dispatch({
        type: "UpdateAddress",
        item:data
      });
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

