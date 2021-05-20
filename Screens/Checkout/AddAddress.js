import React, { Component } from 'react'
import { Image, FlatList, ScrollView, TouchableOpacity, PermissionsAndroid, Clipboard ,StyleSheet,TextInput} from 'react-native';

;
import { connect } from "react-redux";

import { Container, Content, Header, Left, Right, Body, Title, View, Form, Item, Input, Button, Text, Label, Icon, Card, CardItem } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {colors,width,height,scale,verticalScale} from '../../Config/Theme';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HeaderwithoutMenu from '../../Components/HeaderwithoutMenu'
const Addaddress = (props) => {
    const navigation = useNavigation();

    const [visible, setvisible] = React.useState(false);
    const [visible1, setvisible1] = React.useState(true);
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
    const [Type, setType] = React.useState('Office');
    const Submit=()=>{
   
        //  alert(JSON.stringify(props.Address1))
       
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
              "Type":Type
       
            }
   props.AddAddress(data);
   props.navigation.navigate("Checkout")  
       
          //  alert(JSON.stringify(data))
       
           }else{
       alert("Please fill all details")
       
           }
         }
       
  const ChangeType=(data)=>{
     // alert(data)
      setType(data)
    //  alert(Type)
      setvisible(!visible)

  } 
    return(
        <View style={{flex:1,backgroundColor:colors.white}}>
              <HeaderwithoutMenu item={{Title:"Add Address"}}
        />
<ScrollView>
        <View style={{marginVertical:20}}>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>First Name</Text>
        <TextInput onChangeText={(text)=>setfirst_name(text)}  placeholder={"Sandria"} style={styles.Textinput}/>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Last Name</Text>
        <TextInput onChangeText={(text)=>setlast_name(text)} placeholder={"Bennett"} style={styles.Textinput}/>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Company</Text>
        <TextInput onChangeText={(text)=>setcompany(text)} placeholder={"AT&T Software"} style={styles.Textinput}/>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Address 1</Text>
        <TextInput multiline={true}
 textAlignVertical= 'top' 
             numberOfLines={3} onChangeText={(text)=>setaddress_1(text)}   placeholder={"625 Nolan CauseWay Suite 076"} style={[styles.Textinput,{height:160}]}/>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Address 2</Text>
        <TextInput multiline={true}
 textAlignVertical= 'top' 
             numberOfLines={3}  onChangeText={(text)=>setaddress_2(text)}  placeholder={"Ex:625 Nolan CauseWay Suite 076"}  style={[styles.Textinput,{height:160}]}/>
        
        
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>State</Text>
        <TextInput  onChangeText={(text)=>setstate(text)}  placeholder={"CA"} style={styles.Textinput}/>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>City</Text>
        <TextInput  onChangeText={(text)=>setcity(text)}   placeholder={"Ex:San Fransico"} style={styles.Textinput}/>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Country</Text>
        <TextInput  onChangeText={(text)=>setcountry(text)}  placeholder={"US"} style={styles.Textinput}/>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Post Code</Text>
        <TextInput  onChangeText={(text)=>setpostcode(text)}  placeholder={"517501"} style={styles.Textinput}/>

        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Email</Text>
        <TextInput onChangeText={(text)=>setemail(text)}  placeholder={"youremail@gmail.com"} style={styles.Textinput}/>
        
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Phone Number</Text>
        <TextInput  onChangeText={(text)=>setphone(text)}  placeholder={"(xxx)xxx-xxxx"} style={styles.Textinput}/>
        <Text style={{left:10,color:"#8e8e93",                    fontFamily: 'Poppins-SemiBold',
}}>Type of address</Text>

        <View style={{flexDirection:"row",marginVertical:20,marginHorizontal:40}}>
       <TouchableOpacity  onPress={()=>ChangeType("Office")} style={visible?styles.Office:styles.Office1}><Text  style={visible?styles.OfficeText:styles.OfficeText1}>Office</Text></TouchableOpacity>
       <TouchableOpacity  onPress={()=>ChangeType("Home")}style={!visible?styles.Home:styles.Home1}><Text  style={!visible?styles.HomeText:styles.HomeText1}>Home</Text></TouchableOpacity>

   </View>
   <View style={{flexDirection:"row",justifyContent:"space-between"}}>
       <TouchableOpacity  onPress={()=>props.navigation.goBack()} style={{left:width/10,backgroundColor:colors.Primary,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",color:"#fff",fontWeight:"bold"}}>Cancel</Text></TouchableOpacity>
       <TouchableOpacity  onPress={()=>Submit()}style={{right:width/10,backgroundColor:colors.Primary,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",fontWeight:"bold",color:"#fff"}}>Save</Text></TouchableOpacity>

   </View>
    </View></ScrollView></View>
    )
}


const styles = StyleSheet.create({
    headerContent: {
        backgroundColor: '#ffccff',
        alignSelf:"center"
        
    },
    notifications: {
        color:'#F2F2F2',
        fontSize: 32,
    },
Office:{backgroundColor:colors.white,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10,marginRight:20},
Home:{backgroundColor:colors.white,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10,},
Office1:{backgroundColor:colors.white,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10,marginRight:20,borderWidth:1,borderColor:colors.Primary},
Home1:{backgroundColor:colors.white,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10,borderWidth:1,borderColor:colors.Primary},
  OfficeText:{alignContent:"center",textAlign:"center",color:colors.black,fontWeight:"bold"},
  HomeText:{alignContent:"center",textAlign:"center",color:colors.black,fontWeight:"bold"},
  OfficeText1:{alignContent:"center",textAlign:"center",color:colors.Primary,fontWeight:"bold"},
  HomeText1:{alignContent:"center",textAlign:"center",color:colors.Primary,fontWeight:"bold"},
// Container Styles
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignSelf:"center"

    },
    
    // Profile View Header
    contentProfileHeader: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf:"center"
,
        backgroundColor: '#ffccff',
        minHeight: 350,
        minWidth: 430,
        paddingTop: 60,
        paddingRight:20,
        position:"absolute"
    },
    profileImage: {
        width: 70,
        height: 70,
       
    },
    userHeaderName: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold',
        
    },

    userSubHeaderName: {
        color:'#000000',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing : 0.35,
       
    },
    userHeaderMRN: {
        color: '#F2F2F2',
        fontSize: 18,
        fontWeight: 'bold',
    },

    // Content Body
    contentBody: {
        justifyContent: 'space-around',
        margin: 8,
        padding: 8,
    },
    textBold1:{
        justifyContent: 'space-around',
       borderRadius:15,
       borderWidth:1,
      marginTop:250,
    marginLeft:20,
    marginRight:20,
      
     backgroundColor:"#ffffff"
       
        // backgroundColor: '#ffccff'

    },
    contentFAQHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    FAQHeaderText: {
        color: '#555559',
        fontSize: 22,
        fontWeight: 'bold',
    },
    textBold: {
        fontFamily:"Poppins-SemiBold",
        fontSize: 22,
        justifyContent: 'space-between',
        padding:8,
        marginTop:2
    },
    headerContent: {
        backgroundColor: "#d0371e",
        height: 60,
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
    border:{
        height:1,
        backgroundColor:"rgba(115,149,160,255)",
        width:width/1.2,
        alignSelf:"center",
        marginTop:height/60
    }
   
})

const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
    total: state.cartItems.total,
    itemsCount: state.products,
    Order: state.Order,
    Address1:state.cartItems.Address
  
  });
  
  
  const mapDispatchToProps = dispatch => {
    return {
     
      AddAddress: (data) => {
        //alert("a")
  
        dispatch({
        //  type: actionTypes.SET_PRODUCTS1,
          type: "AddAddress",
          item:data
        });
      },
  
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Addaddress)