import React, { Component,useState,useEffect } from 'react';
import {
   StyleSheet, View,Image,Text,TextInput,TouchableOpacity,ScrollView,FlatList,Animated

} from 'react-native';
import {colors,width,height,scale,verticalScale} from '../../Config/Theme';

import { Header,Right,Body,Title,Left, Label, Icon, CardItem } from 'native-base';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';

import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

const ReviewAdd=(props)=>{
    const [checked, setChecked] = React.useState(false);

   
    
  const navigation = useNavigation();

    
    const [starCount,setstarcount] = React.useState('1');

   const  ratingCompleted=(rating)=> {
    setstarcount(rating) 
}
    return(
    <View style={styles.mainContainer}> 
     
    <ScrollView>
    <View style={styles.View1}>
    <Text style={{fontSize:15,}}>Your rating</Text>

    
<StarRating
        disabled={false}
        maxStars={1}
        rating={1}
        starSize={8}
        fullStarColor={colors.Primary}
        emptyStarColor={colors.Primary}
        starStyle={{paddingVertical:width/70,}}
        selectedStar={(rating) => ratingCompleted(rating)}
      />
<StarRating
        disabled={false}
        maxStars={5}
        rating={starCount}
        starSize={20}
        fullStarColor={colors.Primary}
        emptyStarColor={colors.Primary}
        starStyle={{margin:width/50,bottom:height/100}}
        selectedStar={(rating) => ratingCompleted(rating)}
      />
</View>
<View style={styles.View2}>
    <Text style={{fontSize:15,}}>Your review</Text>

    
<StarRating
        disabled={false}
        maxStars={1}
        rating={1}
        starSize={8}
        fullStarColor={colors.Primary}
        emptyStarColor={colors.activedotcolor}
        starStyle={{paddingVertical:width/70,}}
        selectedStar={(rating) => ratingCompleted(rating)}
      /></View>
<TextInput  textAlign="left"
 textAlignVertical= 'top' style={styles.TextInput}/>
 <View style={styles.View2}>
    <Text style={{fontSize:15,}}>Name</Text>
    
<StarRating
        disabled={false}
        maxStars={1}
        rating={1}
        starSize={8}
        fullStarColor={colors.Primary}
        emptyStarColor={colors.activedotcolor}
        starStyle={{paddingVertical:width/70,}}
        selectedStar={(rating) => ratingCompleted(rating)}
      /></View>
          <TextInput style={styles.TextInput1}/>
          <View style={styles.View2}>
    <Text style={{fontSize:15,}}>Email</Text>
    
<StarRating
        disabled={false}
        maxStars={1}
        rating={1}
        starSize={8}
        fullStarColor={colors.Primary}
        emptyStarColor={colors.activedotcolor}
        starStyle={{paddingVertical:width/70,}}
        selectedStar={(rating) => ratingCompleted(rating)}
      /></View>
          <TextInput style={styles.TextInput1}/>
          <View style={styles.Checkbox}>
    <Checkbox
    color={colors.Primary}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      
    />
    <Text style={{paddingVertical:height/90,marginRight:width/4,fontSize:12}}>Save my name, email, and website in this browser for the next time I comment.</Text> 
    </View>
    <View >
             
             <TouchableOpacity style={styles.Done} onPress={()=>props.navigation.navigate("Review")}>
             
            <Text style={styles.Getstartedtext}>Submit</Text></TouchableOpacity>
           </View>    
                 </ScrollView>
    </View>
)
}

const styles = StyleSheet.create(
    {
        mainContainer:{flex:1,backgroundColor:colors.white},
        Header:{backgroundColor:colors.white,alignSelf:"center",},
     badge: {bottom:height/25,
        width:20,
    height:20,
    backgroundColor: colors.activedotcolor},

View1:{marginTop:height/40,flexDirection:"row",marginHorizontal:30},
View2:{marginTop:height/80,flexDirection:"row",left:width/10},
TextInput:{
   backgroundColor:"#f6f6f6", width:width/1.2,marginTop:height/70,alignSelf:"flex-start",
   borderRadius:10,
    height:height/5,
    fontSize:13,
    left:width/10,
    borderWidth:1,borderColor:colors.Primary,
  //  lineHeight:-25,
  paddingLeft:width/30,

    paddingRight:width/8,
   
},
TextInput1:{
    backgroundColor:"#f6f6f6", width:width/1.2,marginTop:height/70,alignSelf:"flex-start",
    borderRadius:10,
     height:height/18,
     fontSize:13,
     left:width/10,
   //  lineHeight:-25,
   paddingLeft:width/30,
   borderWidth:1,borderColor:colors.Primary,

     paddingRight:width/8,
    
 },
 Checkbox:{
    left:width/15,
flexDirection:"row",
marginVertical:10
   },
   Done: {
    width: width/1.2,
    height: height/20,
    backgroundColor: colors.Primary,
    borderRadius:10,
    marginVertical:20,
    justifyContent: 'center',
    alignSelf:"center",
    alignItems: 'center',
  },
  Getstartedtext:{
    color:colors.white,
    fontWeight:"bold",
    fontSize:20,
    alignItems:"center"
   },
border1:{height:2,backgroundColor:colors.cement,marginTop:height/40,width:width/1.2,alignSelf:"center"}
,
 spacer: {
    marginLeft:width/20,marginRight:width/20,marginTop:height/50
  },
  spacer1: {
    marginLeft:width/20,marginRight:width/20,marginTop:height/50
  },
  title:{
      color:colors.black,
      fontWeight:"bold",
      alignSelf:"center",
      left:width/10
  },       
       },
    
)
export default ReviewAdd