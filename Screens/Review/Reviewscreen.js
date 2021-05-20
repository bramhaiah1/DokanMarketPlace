import React, { Component,useState,useEffect } from 'react';
import {
   StyleSheet, View,Image,Text,TextInput,TouchableOpacity,ScrollView,FlatList,Animated

} from 'react-native';
import {colors,width,height,scale,verticalScale} from '../../Config/Theme';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Header,Right,Body,Title,Left, Label, Icon, CardItem } from 'native-base';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';
import LineBar from "./ProgressBar";
import ReviewModel from "./ReviewModel";
import { useNavigation } from '@react-navigation/native';

const ReviewScreen=(props)=>{
    const images1=[
        {id:1,image:require("../../assets/ProfileAvatar.png"),text1:'John Doe',text2:" - 24 July, 2020",text3:"(4.5)",text4:"Quisque euismod cursus ultrices. Praesent feugiat consequat iaculis. Nunc sed facilisis arcu. Quisque in mauris iaculis, feugiat nunc at, pulvinar tellus."},
        {id:2,image:require("../../assets/ProfileAvatar.png"),text1:'Michael John',text2:" - 15 August, 2019",text3:"(4.5)",text4:"Aliquam venenatis erat vitae sagittis tincidunt. Aenean urna libero, facilisis ut nibh ac, rhoncus ullamcorper mauris."},
        {id:3,image:require("../../assets/ProfileAvatar.png"),text1:'John Doe',text2:" - 24 July, 2020",text3:"(4.5)",text4:"Quisque euismod cursus ultrices. Praesent feugiat consequat iaculis. Nunc sed facilisis arcu. Quisque in mauris iaculis, feugiat nunc at, pulvinar tellus."},
        {id:4,image:require("../../assets/ProfileAvatar.png"),text1:'Michael John',text2:" - 15 August, 2019",text3:"(4.5)",text4:"Aliquam venenatis erat vitae sagittis tincidunt. Aenean urna libero, facilisis ut nibh ac, rhoncus ullamcorper mauris."},
        
  
    
    ]
    const _keyExtractor = (item, idx) => item.id;
   

    const _renderItem = ({ item }) => (
       
  
      <ReviewModel item={ item }   />

    );
  const navigation = useNavigation();

    const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 50,
      duration: 500,
    }).start();
  }, [50]);
 
    const [starCount,setstarcount] = React.useState('4.5');
    const [visible,setvisible] = React.useState(false);

   const  ratingCompleted=(rating)=> {
    setstarcount(rating) 
    setvisible(true)
}
    return(
    <View style={styles.mainContainer}> 
     
    <ScrollView>
      <View style={styles.View1}>
      <Text style={{fontSize:45,}}>{starCount}</Text>
<View style={{flexDirection:"column",marginVertical:10,marginHorizontal:10}}>
<StarRating
        disabled={false}
        maxStars={5}
        rating={starCount}
        starSize={20}
        fullStarColor={colors.Primary}
        emptyStarColor={colors.Primary}
        selectedStar={(rating) => ratingCompleted(rating)}
      />
<Text style={{color:colors.ash,fontSize:10,marginVertical:3}}>Based on 246 reviews</Text>
</View>
      </View>
  
{/* <View style={{bottom:height/20,left:width/4}}>

<Text style={{fontSize:45,}}>{starCount}</Text></View> */}
<View style={styles.border}/>
{visible?<View>
<View style={styles.spacer}>
            <LineBar starText="5" percentage={90+starCount} />
</View>
<View style={styles.spacer}>
            <LineBar starText="4" percentage={10+starCount} />
</View>
<View style={styles.spacer1}>
            <LineBar starText="3" percentage={5+starCount} />
</View><View style={styles.spacer1}>
            <LineBar starText="2" percentage={2+starCount} />
</View><View style={styles.spacer1}>
            <LineBar starText="1" percentage={1+starCount} />
</View></View>:<View>
<View style={styles.spacer}>
            <LineBar starText="5" percentage={90} />
</View>
<View style={styles.spacer}>
            <LineBar starText="4" percentage={10} />
</View>
<View style={styles.spacer1}>
            <LineBar starText="3" percentage={5} />
</View><View style={styles.spacer1}>
            <LineBar starText="2" percentage={2} />
</View><View style={styles.spacer1}>
            <LineBar starText="1" percentage={1} />
</View></View>}
<View style={styles.border1}/>
<FlatList
          numColumns={1}

         style={{
         
         flexGrow: 0}}
         data={ images1 }
         keyExtractor={ _keyExtractor }
         renderItem={ _renderItem }
        />
          </ScrollView>
          {/* <View >
             
             <TouchableOpacity style={styles.Done} onPress={()=>props.navigation.navigate("AddReview")}>
             
            <Text style={styles.Getstartedtext}><AntDesign name="plus"  size={20}/>  Add a Review</Text></TouchableOpacity>
           </View>     */}
      
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
        border:{height:2,backgroundColor:colors.cement,width:width/1.2,alignSelf:"center"}
,
View1:{flexDirection:"row",alignSelf:"center",marginVertical:10},
border1:{height:2,backgroundColor:colors.cement,marginVertical:10, width:width/1.2,alignSelf:"center"}
,
 spacer: {
    marginHorizontal:width/20,marginRight:width/20,marginVertical:10
  },
  spacer1: {
    marginHorizontal:width/20,marginRight:width/20,marginVertical:10
  },
  title:{
      color:colors.black,
      fontWeight:"bold",
      alignSelf:"center",
      left:width/10
  },       text1:{left:width/40,fontSize:10,fontWeight:"bold",color:colors.ash,}
,
  Done: {
    width: width/1.2,
    height: height/20,
    backgroundColor: colors.Primary,
    borderRadius:10,
    justifyContent: 'center',
    alignSelf:"center",
    alignItems: 'center',
    marginVertical:10
  },
  Getstartedtext:{
    color:colors.white,
    fontWeight:"bold",
    fontSize:20,
    alignItems:"center",
   },
       },
    
)
export default ReviewScreen