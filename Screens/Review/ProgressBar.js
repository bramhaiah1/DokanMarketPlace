import React, { useState,useEffect } from 'react';
import {
   StyleSheet, View,Text,Animated

} from 'react-native';
import {colors,width,height,scale,verticalScale} from '../../Config/Theme';

import  AntDesign  from 'react-native-vector-icons/AntDesign';
const ProgressBar = ({ starText, percentage }) => {
    const [animation] = useState(new Animated.Value(0));
    useEffect(() => {
      Animated.timing(animation, {
        toValue: percentage,
        duration: 500,
      }).start();
    }, [percentage]);
    const ratingCompleted=(rating) =>{
      console.log("Rating is: " + rating)
    }
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        
  
        <Text style={styles.progressText}>{starText} <AntDesign name="star"color={colors.Primary} size={20}/></Text>
        <View style={styles.progressMiddle}>
          <View style={styles.progressWrap}>
            <Animated.View
              style={[
                styles.progressBar,
                {
                  width: animation.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          </View>
        </View>
        <Text style={styles.progressPercentText}>{percentage}%</Text>
      </View>
    );
  };
  
const styles = StyleSheet.create(
    {
        border:{height:2,backgroundColor:colors.cement,marginTop:height/100,width:width/1.2,alignSelf:"center"}
,progressText: {
    fontSize: 19,fontWeight:"bold",
    color: "black",
    bottom:height/190,
    marginLeft:width/20,
  },
  progressPercentText: { width: 40, fontSize: 14, color: "#323357" },
  progressMiddle: {
    height: 10,
    flex: 1,
    marginHorizontal: 10,
    marginVertical:5
  },
  progressWrap: {
    backgroundColor: "#F5F8FF",
    borderRadius: 18,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 2,
  },
  progressBar: {
    flex: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#ffcc48",
    shadowOpacity: 1.0,
    shadowRadius: 4,
    backgroundColor:colors.Primary,
    borderRadius: 18,
    minWidth: 5,
  },
       },
    
)
export default ProgressBar