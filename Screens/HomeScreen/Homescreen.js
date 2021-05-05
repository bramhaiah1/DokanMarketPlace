import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';


import {SliderBox} from 'react-native-image-slider-box';
import Icon1 from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar, Badge, withBadge} from 'react-native-elements';
import AnimatedLoader from 'react-native-animated-loader';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Header,
  Right,
  Body,
  Title,
  Left,
  Button,
  Label,
  Card,
  CardItem,
} from 'native-base';

import {
  Category_APICall,
  Product_APICALL,
  searchProducts,
} from '../../Store/Actions/index';

import {colors,width,height,scale,verticalScale} from '../../Config/Theme';
import ProductComponent from "../../Components/ProductComponent";
import CategoryComponent from "../../Components/CategoryComponent";
import Categorycomponent from '../../Components/CategoryComponent';
import Header1 from "../../Components/Header";
const images = [
  require('../../assets/slider1.jpg'),
  require('../../assets/slider2.jpg'),
  require('../../assets/slider1.jpg'),
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      see: -1,
      badge:false
    };
  }
  _keyExtractor = (item, idx) => item.id;

  _renderItem = ({item}) => <Avatarmodel item={item} />;

  componentWillUnmount() {
    this._unsubscribe();
  }
  componentDidMount() {
    this.props.Category_APICall();
    this.props.Product_APICALL();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getItemsCount();
    });
    // alert(this.props.products)
    let count = this.props.itemsCount.itemsCount;
    //alert(count);
    this.props.navigation.setParams({
      count: count,
    });
    //alert(JSON.stringify(this.props.products))
  }
  state = {
    count: -12,
  };
  getItemsCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
        badge:true,
      },
      () => {
        let count = this.props.itemsCount.itemsCount;
        //alert(count);
        this.props.navigation.setParams({
          count: count,
        });
      },
    );
  };

  _keyExtractor1 = (item, idx) => item.id;

  _renderItem1 = ({item}) => <Category2 item={item} />;
  render() {
    // alert(JSON.stringify(this.props.products))

    var see = 0;
    var see1 = 1;
    var see2 = 1;
    const { route } = this.props;
if(!this.state.badge){return null}else{
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <Header1 item={route.params.count}
        />
        
        <View style={{ alignSelf: 'center'}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width: width, height: height}}>
            <SliderBox
              images={images}
              sliderBoxHeight={height / 3}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor={colors.activedot}
              inactiveDotColor={colors.inactivedot}
            />

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                width: width,
                height: height / 4,
                marginTop: height / 20,
                // backgroundColor: colors.backgroundcolor,
              }}>
              {this.props.products != '' ? null : (
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <AnimatedLoader
                    visible={true}
                    overlayColor={colors.Animationoverlay}
                    source={require('./animation.json')}
                    animationStyle={{
                      width: 100,
                      height: 100,
                    }}
                    speed={1}
                  />
                </View>
              )}
              {this.props.products.map(
                (item, index) => (
                  item.parent === 0 ? (see = see + 1) : null,
                  item.image === null &&
                  item.parent === 0 &&
                  item.name != 'Uncategorized' ? (
                    <View
                      style={{
                        alignItems: 'center',
                        marginLeft: width / 20,
                        marginRight: width / 20,
                      }}>
                      <Text style={{top: height / 7}}>{item.name}</Text>
                      <TouchableOpacity></TouchableOpacity>
                    </View>
                  ) : item.parent === 0 &&
                    item.parent === 0 &&
                    item.name != 'Uncategorized' ? (
                      <Categorycomponent item={item}/>
                    // <View style={styles.view1}>
                    //   <TouchableOpacity
                    //     onPress={() =>
                    //       this.props.navigation.navigate('Products', {
                    //         name: item.id,
                    //       })
                    //     }>
                    //     <Image
                    //       style={styles.image}
                    //       resizeMode={'contain'}
                    //       source={{uri: item.image.src}}
                    //     />
                    //     <View style={{height: height / 15}}>
                    //       <Text
                    //         style={{
                    //           textAlign: 'center',
                    //           top: height / 80,
                    //           fontWeight: 'bold',
                    //         }}>
                    //         {item.name}
                    //       </Text>
                    //     </View>
                    //   </TouchableOpacity>
                    // </View>
                  ) : null
                ),
              )}
            </ScrollView>

            <View
              style={{
                flexDirection: 'row',
                bottom: height / 3.8,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', left: width / 20}}>
                Category
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Category')}>
                <Text
                  style={{color: colors.Textcolor1, fontSize: 15, right: width / 20}}>
                  See All({see - 1})
                </Text>
              </TouchableOpacity>
            </View>

           <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                width: width,
                height: height / 4,
              //  marginTop: height / 20,
              }}>
              {this.props.products1 != '' ? null : (
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <AnimatedLoader
                    visible={true}
                    overlayColor={colors.overlayColor}
                    source={require('./animation.json')}
                    animationStyle={{
                      width: 100,
                      height: 100,
                    }}
                    speed={1}
                  />
                </View>
              )}
              {this.props.products1.map(
                (item, index) => (
                  item.featured ? (see1 = see1 + 1) : null,
                  item.featured ? (
                    <ProductComponent item={item}/>
                    // <View style={styles.view1}>
                    //   <TouchableOpacity
                    //     onPress={() =>
                    //       this.props.navigation.navigate('ProductBuy', {
                    //         id: item.categories[0].id,
                    //         name: item.name,
                    //       })
                    //     }>
                    //     <Image
                    //       style={styles.image}
                    //       resizeMode={'contain'}
                    //       source={{uri: item.images[0].src}}
                    //     />
                    //     <View style={{height: height / 15}}>
                    //       <Text
                    //         style={{
                    //           textAlign: 'center',
                    //           top: height / 80,
                    //           fontWeight: 'bold',
                    //         }}>
                    //         {item.name}
                    //       </Text>
                    //     </View>
                    //   </TouchableOpacity>
                    // </View>
                  ) : null
                ),
              )}
            </ScrollView>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                bottom: height / 3.8,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', left: width / 40}}>
                Top Featured
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('BestsaleProduct', {name: ''})
                }>
                <Text
                  style={{color: colors.Textcolor1, fontSize: 15, right: width / 20}}>
                  See All({see1 - 1})
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                width: width,
                height: height / 5,
                marginTop: height / 20,
                marginBottom: height / 10,
              }}>
              {this.props.products1 != '' ? null : (
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <AnimatedLoader
                    visible={true}
                    overlayColor={colors.overlayColor}
                    source={require('./animation.json')}
                    animationStyle={{
                      width: 100,
                      height: 100,
                    }}
                    speed={1}
                  />
                </View>
              )}
              {this.props.products1.map(
                (item, index) => (
                  item.total_sales >= 1 ? (see2 = see2 + 1) : null,
                  item.total_sales >= 1 ? (
                    <ProductComponent item={item}/>

                    // <View style={styles.view1}>
                    //   <TouchableOpacity
                    //     onPress={() =>
                    //       this.props.navigation.navigate('ProductBuy', {
                    //         id: item.categories[0].id,
                    //         name: item.name,
                    //       })
                    //     }>
                    //     <Image
                    //       style={styles.image}
                    //       resizeMode={'contain'}
                    //       source={{uri: item.images[0].src}}
                    //     />
                    //     <View style={{height: height / 15}}>
                    //       <Text
                    //         style={{
                    //           textAlign: 'center',
                    //           top: height / 80,
                    //           fontWeight: 'bold',
                    //         }}>
                    //         {item.name}
                    //       </Text>
                    //     </View>
                    //   </TouchableOpacity>
                    // </View>
                  ) : null
                ),
              )}
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                bottom: height / 2.7,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', left: width / 40}}>
                Best Selling Products
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('BestsaleProduct', {
                    name: 'Bestsale',
                  })
                }>
                <Text
                  style={{color:colors.Textcolor1, fontSize: 15, right: width / 20}}>
                  See All({see2 - 1})
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );}
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  products1: state.products1.searchResults1,

  itemsCount: state.itemsCount,
});
const mapDispatchToProps = dispatch => {
  return {
    Category_APICall: () => dispatch(Category_APICall()),
    Product_APICALL: () => dispatch(Product_APICALL()),
  };
};
const styles = StyleSheet.create({
  textView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFEA61',
    borderRadius: 10,
  },

  text1: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    paddingLeft: 50,
    fontSize: 15,
    margin: 5,
    marginTop: 20,
  },
  text2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    fontSize: 13,
    paddingLeft: 55,
    marginBottom: 20,
  },
  searchBar: {
    width: verticalScale(540),
    backgroundColor: '#fff',
    paddingLeft: scale(22),
    height: verticalScale(80),
    elevation: 9,
  },
  icon: {
    paddingStart: 15,
    position: 'absolute',
    marginTop: 17,
  },
  view1: {
    alignSelf: 'center',
    marginLeft: width / 50,
    marginRight: width / 50,
    justifyContent: 'center',
    backgroundColor: colors.lightactivedotcolor,
    height: height / 5,
    width: width / 3,
  },
  image: {height: height / 13, width: width / 3},
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
