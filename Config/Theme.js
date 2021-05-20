import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
//Guideline sizes are based on standard ~11" screen mobile device
const guidelineBaseWidth = 720;
const guidelineBaseHeight = 1280;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
 size + (scale(size) - size) * factor;
 const Radius={
     size:40,
     Textbox:20,
 }
const colors={
    Primary:'#4D4867',

   //Random colors 
    backgroundcolor:'rgba(115,149,160,255)',
Animationoverlay:"rgba(255,255,255,0.75)",
    lightcolor:'rgb(212,204,228)',
    white:'#fff',
    activedot:'#FFEE58',
    inactivedot:"#90A4AE",
    activedotcolor:'rgb(40,212,196)',
    skyblue:'rgba(85,172,238,255)',
    cement:'rgba(246,246,246,255)',
    ash:'#8e8e93',
    bordercolor:'rgba(18,100,180,255)',
    darkblue:'rgba(1,36,70,255)',
    violet:'#0cffe9',
    rose:'#ff7171',
    Hot:'#fe4545',
    lightactivedotcolor:'#0cffe9',
    //Colors
    blue: "#007bff",
    indigo: "#6610f2",
    purple: "#6f42c1",
    pink: "#e83e8c",
    red: "#dc3545",
    orange: "#fd7e14",
    yellow: "#ffc107",
    green: "#28a745",
    teal: "#20c997",
    cyan: "#17a2b8",
    white: "#fff",
    gray: "#6c757d",
    grayDark: "#343a40",
    
    success: "#28a745",
    info:"#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#343a40",
    black: "#000000",
    //Text colors
Textcolor1:"#808080"


}
const Size={
    primarysize:20,
    medium:15,
    low:10
}

export { colors,width,height,scale,verticalScale,Radius,Size}