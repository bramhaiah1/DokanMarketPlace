import React, { Component } from 'react'
import { Image, FlatList, ScrollView, TouchableOpacity, PermissionsAndroid, Clipboard ,StyleSheet,TextInput} from 'react-native';

;

import { Container, Content, Header, Left, Right, Body, Title, View, Form, Item, Input, Button, Text, Label, Icon, Card, CardItem } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {colors,width,height,scale,verticalScale} from '../../Config/Theme';
import { useNavigation } from '@react-navigation/native';

const Addaddress = (props) => {
    const navigation = useNavigation();

    const [Visible, setvisible] = React.useState(false);
    const [Visible1, setvisible1] = React.useState(false);

    return(

           
                                                    <View>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Email</Text>
                                             <TextInput  placeholder={"youremail@gmail.com"} style={Styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>First Name</Text>
                                             <TextInput  placeholder={"Mervin"} style={Styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Last Name</Text>
                                             <TextInput  placeholder={"Bennett"} style={Styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Street Address</Text>
                                             <TextInput   placeholder={"625 Nolan CauseWay Suite 076"} style={Styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Apt,Suite(optional)</Text>
                                             <TextInput   placeholder={"Ex:Unit 332"} style={Styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>State</Text>
                                             <TextInput   placeholder={"Ex:Dhaka"} style={Styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Country</Text>
                                             <TextInput   placeholder={"India"} style={Styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Zip Code</Text>
                                             <TextInput   placeholder={"Unit332"} style={Styles.Textinput}/>
                                             <Text style={{left:width/20,color:"#8e8e93"}}>Phone Number</Text>
                                             <TextInput   placeholder={"(xxx)xxx-xxxx"} style={Styles.Textinput}/>
                                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                            <TouchableOpacity  onPress={()=>navigation.navigate("Checkout")}yy style={{left:width/10,backgroundColor:"rgba(115,149,160,255)",elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",color:"#fff",fontWeight:"bold"}}>Cancel</Text></TouchableOpacity>
                                            <TouchableOpacity  onPress={()=>setvisible(!Visible)}style={{right:width/10,backgroundColor:"rgba(115,149,160,255)",elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",fontWeight:"bold",color:"#fff"}}>Save</Text></TouchableOpacity>

                                        </View>
                                         </View>
                    

    )
}


const Styles = StyleSheet.create({
    headerContent: {
        backgroundColor: '#ffccff',
        alignSelf:"center"
        
    },
    notifications: {
        color:'#F2F2F2',
        fontSize: 32,
    },

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
        fontWeight: 'bold',
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
    border:{
        height:1,
        backgroundColor:"rgba(115,149,160,255)",
        width:width/1.2,
        alignSelf:"center",
        marginTop:height/60
    }
   
})
export default Addaddress