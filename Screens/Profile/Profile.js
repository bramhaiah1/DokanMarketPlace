import React, { Component,useState } from 'react'
import { Image, FlatList, ScrollView,  Pressable, 
    Platform,
    PermissionsAndroid, TouchableOpacity ,StyleSheet,TextInput} from 'react-native';

;

import { Container, Content, Header, Left, Right, Body, Title, View, Form, Item, Input, Button, Text, Label, Icon, Card, CardItem } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {colors, width, height, scale, verticalScale,Radius,Size} from '../../Config/Theme';


  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import EntypoIcon from 'react-native-vector-icons/Entypo';
  
  import {
    launchCamera,
    launchImageLibrary
  } from 'react-native-image-picker';
const Profile = (props) => {
    const [Visible, setvisible] = React.useState(false);
    const [Visible1, setvisible1] = React.useState(false);
    const [filePath, setFilePath] = useState('');
  const [launch, setlaunch] = useState(false);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  const captureImage = async (type) => {
    alert("f")
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };
    return(
        <Container>
                                        <ScrollView>

           
                    {/* Header Section */}
                    <View
        style={{
          position: 'absolute',
          backgroundColor: colors.Primary,
          height: height / 3,
          width: width,

          borderBottomLeftRadius: Radius.size,
          borderBottomRightRadius: Radius.size,
        }}
      >
          {filePath===''?<TouchableOpacity   onPress={() => chooseFile('photo')}>
  <Image      
  style={{alignSelf:"center",elevation:8,marginTop:30}}                              
       source={require("../../assets/ProfileAvatar.png")}
    /></TouchableOpacity>: <TouchableOpacity   onPress={() => chooseFile('photo')}> 
    <Image         onPress={() => setlaunch(!launch)}

          source={{uri: filePath.uri}}
          style={Styles.imageStyle}
        />
        </TouchableOpacity>}
   
                        {/* <Image
                            source={require('../../assets/ProfileAvatar.png')}
                            resizeMode="contain"
                            style={Styles.profileImage}
                        /> */}
                        <Text style={Styles.userHeaderName}>{'Guest'}</Text>
                        <Text style={Styles.userSubHeaderName}>{'14130141cse108'}</Text>
                   

                    {/* Body Content */}
                    </View>
                    <View style={Styles.textBold1} >
                              <View style={{flexDirection:"row",justifyContent:"space-between"}}>    
                                        <Text numberOfLines={1} style={Styles.textBold}>
                                            {'Account'}
                                            </Text>   

       {Visible?<AntDesign onPress={()=>setvisible(!Visible)} name="caretup" size={15} style={{alignSelf:"center",color:"black",right:width/30}}/>
   :       <AntDesign onPress={()=>setvisible(!Visible)} name="caretdown" size={15} style={{alignSelf:"center",color:"black",right:width/30}}/>
    }
                                         </View> 
                                         {Visible?<View>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>Email</Text>
                                             <TextInput  placeholder={"youremail@gmail.com"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>First Name</Text>
                                             <TextInput  placeholder={"Mervin"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>Last Name</Text>
                                             <TextInput  placeholder={"Bennett"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>Street Address</Text>
                                             <TextInput   placeholder={"625 Nolan CauseWay Suite 076"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>Apt,Suite(optional)</Text>
                                             <TextInput   placeholder={"Ex:Unit 332"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>State</Text>
                                             <TextInput   placeholder={"Ex:Dhaka"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>Country</Text>
                                             <TextInput   placeholder={"India"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>Zip Code</Text>
                                             <TextInput   placeholder={"Unit332"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold"}}>Phone Number</Text>
                                             <TextInput   placeholder={"(xxx)xxx-xxxx"} style={Styles.Textinput}/>
                                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                            <TouchableOpacity  onPress={()=>setvisible(!Visible)} style={{left:width/10,backgroundColor:colors.Primary,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",color:"#fff",fontWeight:"bold"}}>Cancel</Text></TouchableOpacity>
                                            <TouchableOpacity  onPress={()=>setvisible(!Visible)}style={{right:width/10,backgroundColor:colors.Primary,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",fontWeight:"bold",color:"#fff"}}>Save</Text></TouchableOpacity>

                                        </View>
                                         </View>:null}
                                         <View style={Styles.border}/>

                                         <View style={{flexDirection:"row",justifyContent:"space-between"}}>    

                                        <Text numberOfLines={1} style={Styles.textBold}>
                                            {'Password'}</Text>
                                            {Visible1?<AntDesign onPress={()=>setvisible1(!Visible1)} name="caretup" size={15} style={{alignSelf:"center",color:"black",right:width/30}}/>
   :       <AntDesign onPress={()=>setvisible1(!Visible1)} name="caretdown" size={15} style={{alignSelf:"center",color:"black",right:width/30}}/>
    }                         
                    </View>

       {Visible1?<View>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold" }}>Current Password</Text>
                                             <TextInput  placeholder={"Enter Current password"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold" }}>New Password</Text>
                                             <TextInput  placeholder={"Enter new password"} style={Styles.Textinput}/>
                                             <Text style={{left:10,color:"#8e8e93",fontFamily:"Poppins-SemiBold" }}>Confirm Password</Text>
                                             <TextInput  placeholder={"Enter Confirm password"} style={Styles.Textinput}/>
                                         
                                             <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                            <TouchableOpacity onPress={()=>setvisible1(!Visible1)} style={{left:width/10,backgroundColor:colors.Primary,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",color:"#fff",fontWeight:"bold"}}>Cancel</Text></TouchableOpacity>
                                            <TouchableOpacity onPress={()=>setvisible1(!Visible1)} style={{right:width/10,backgroundColor:colors.Primary,elevation:12,width:width/4,height:height/20,justifyContent:"center",borderRadius:10}}><Text style={{alignContent:"center",textAlign:"center",fontWeight:"bold",color:"#fff"}}>Save</Text></TouchableOpacity>

                                        </View>
                                           </View>:null}
                                                                                      <View style={Styles.border}/>

                                        <Text numberOfLines={1} style={Styles.textBold}>
                                            {'Push notification'}
                                         
                                        </Text>
                                        <View style={Styles.border}/>
                                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>


                                        <Text  numberOfLines={1} style={[Styles.textBold,{paddingVertical:height/40}]}>
                                            {'WishList'}
                                           
                                        </Text>
                                        <AntDesign onPress={()=>props.navigation.navigate("WishList")}  name="caretright" size={15} style={{alignSelf:"center",color:"black",right:width/30,}}/>
                                        </View>
                        </View>
                        </ScrollView>  
       
             
        </Container>

    )
}


const Styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100,
        marginTop:20,
        borderRadius:400,
        alignSelf:"center",
      }, 
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
        width: 100,
        height: 100,
        alignSelf:"center",
        marginVertical:20,
       
    },
    userHeaderName: {
        color: colors.white,
        fontSize: 20,
fontFamily:"Poppins-SemiBold"   ,alignSelf:"center"     
    },

    userSubHeaderName: {
        color:colors.white,
        fontSize: 15,
        fontFamily:"Poppins-SemiBold"   ,alignSelf:"center"     

       
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
       borderColor:colors.Primary,
      marginTop:200,
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
        fontFamily:"Poppins-SemiBold" ,
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
    paddingLeft:width/20,
    paddingRight:width/7,
alignSelf:"center",
    width:"97%",
        fontSize: 10,
        height: height/17,
marginTop:10,
marginBottom:10,
fontFamily:"Poppins-ExtraLight" ,
    backgroundColor: '#fff',
  // backgroundColor:"#FFFF",
borderRadius:5,
borderWidth:1,
borderColor:"#D3D3D3",
  fontSize:15



    },
    border:{
        height:1,
        backgroundColor:"rgba(115,149,160,255)",
        width:width/1.2,
        alignSelf:"center",
        marginTop:height/60
    }
   
})
export default Profile