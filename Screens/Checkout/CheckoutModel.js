import React,{useEffect} from 'react';
import {
   StyleSheet, View,Image,TouchableOpacity,Text
} from 'react-native';

import {colors,width,height,scale,verticalScale} from '../../Config/Theme';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

const CheckoutModel=(props)=>{
    const { item } = props;

                    const [color,setcolor]=React.useState(colors.ash)
    const [visible,setvisible]=React.useState(true)

    const Colorchange=()=>{
        setcolor(item.bordercolor)
       
setvisible(!visible)


  
    }
    const Colorchange1=()=>{
        setcolor(colors.ash)
setvisible(!visible)

    }
   

    return(
        
        <TouchableOpacity onPress={visible?()=>Colorchange():()=>Colorchange1()} style={[styles.MainContainer,!visible?{backgroundColor:item.color,borderWidth:2,borderColor:color}:{backgroundColor:item.color}]}>

  
    <View style={styles.view1}>

<Image       style={styles.topprod}  resizeMode="contain"
                        
   source={item.image}
/>
<Text style={styles.text1}><AntDesign name="check" size={15} color={color}/> {item.text}</Text>
</View>
</TouchableOpacity>
    )
}
const styles = StyleSheet.create(
{
    MainContainer: 
    {
        flex:1,
        borderRadius:20,
    marginLeft:width/50,
   marginRight:width/40,
marginBottom:width/40,
 height: height/9,
 width: width/4,
    },

    topprod:
            {
                alignSelf:"center",
                alignItems: 'center',
                width:width/8,
                height:height/29,

            },
view1:{height:height/8,marginTop:height/100},
text1:{alignSelf:"center",top:height/60}
          
        })
export default CheckoutModel