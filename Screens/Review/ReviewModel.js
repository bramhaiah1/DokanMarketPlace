import React from 'react';
import {
   StyleSheet, View,Image,Text,

} from 'react-native';
import {colors,width,height,scale,verticalScale} from '../../Config/Theme';

import StarRating from 'react-native-star-rating';

const ReviewModel=(props)=>{
    const { item } = props;
    return(
    <View style={styles.MainContainer}> 
    <View style={{flexDirection:"row",marginHorizontal:25}}>
  <Image source={item.image} style={styles.image} />
 <View style={{flexDirection:"column",marginHorizontal:20}}>
 <Text style={{fontSize:15,fontWeight:"bold"}}>{item.text1} <Text style={{color:colors.ash}}>{item.text2}</Text></Text>
 <View style={styles.View2}>
 <StarRating
        disabled={false}
        maxStars={5}
        rating={4.5}
        starSize={13}
        fullStarColor={colors.Primary}
        emptyStarColor={colors.Primary}
        starStyle={{width:width/25}}
      />      
      <Text style={styles.text3}>{item.text3}</Text>
      </View>
      <Text style={styles.text4}>{item.text4}</Text>

      </View>
      </View>
      <View style={styles.border}/>

    </View>
)
}

const styles = StyleSheet.create(
    {
        MainContainer:{flex:1,backgroundColor:colors.white,},
        image:{height:60,width:60,borderRadius:400,alignSelf:"center"},
        View1:{alignSelf:"center",paddingLeft:width/3.5,paddingRight:width/20,bottom:height/15,},
        View2:{flexDirection:"row"},
        text1:{fontWeight:"bold",fontSize:15},
        text2:{fontSize:13,color:colors.ash,fontWeight:"bold"},
        text3:{fontSize:10,fontWeight:"bold",left:10},
        text4:{fontSize:10,color:"#0e153d",marginRight:80,lineHeight:15},
        border:{
            height:2,
            backgroundColor:colors.cement,
            width:width/1.2,
            alignSelf:"center",marginVertical:10
        }

 
       },
    
)
export default ReviewModel