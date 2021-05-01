import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux';
import {
  getProducts,
  getProducts1,
  searchProducts,
} from '../../../Store/Actions/index';
import {
  scale,
  verticalScale,
  moderateScale,
  height,
  width,
} from '../../../Styles/Dimensions/Dimentions';

import {colors} from '../../../Styles/colors/Colors';
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
import {useRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Avatar, Badge, withBadge} from 'react-native-elements';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      isEnabled: false,
      des: true,
      icon: true,
    };
  }
  componentDidMount = () => {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getItemsCount1();
      this.getItemsCount();
    });
  };
  componentWillUnmount() {
    this._unsubscribe();
  }
  getItemsCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },

      () => {
        let count = this.props.itemsCount.itemsCount1;
        this.props.navigation.setParams({
          count1: count,
        });
      },
    );
  };
  getItemsCount1 = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },

      () => {
        let count = this.props.itemsCount.itemsCount;
        this.props.navigation.setParams({
          count: count,
        });
      },
    );
  };
  addCartHandler = pro => {
    let qty = 1;
    pro.quantity = qty;
    this.props.addToCart(pro);
    this.getItemsCount1();
    const {navigation} = this.props;
    navigation.navigate('CartScreen');
  };
  addCartHandler1 = pro => {
    let qty = 1;
    pro.quantity = qty;

    this.props.addToCart(pro);
    this.getItemsCount();
  };
  addToWishListHandler = pro => {
    this.props.addToWishList(pro);
    this.getItemsCount();
  };

  render() {
    const {route} = this.props;

    const Text1 = route.params.name;
    const id = route.params.id;
    var data = this.props.products1
      .filter(item => item.name == Text1)
      .map(({id, name, short_description, price, images, description}) => ({
        id,
        name,
        short_description,
        price,
        images,
        description,
      }));
    var data1 = this.props.products1
      .filter(item => item.categories[0].id == id)
      .map(
        ({
          id,
          name,
          short_description,
          price,
          images,
          description,
          categories,
        }) => ({
          id,
          name,
          short_description,
          price,
          images,
          description,
          categories,
        }),
      );
    const regex = /(<([^>]+)>)/gi;
    const Result = data[0].description.replace(regex, '');
    // alert(JSON.stringify(data[0].images));
    //alert(Text)
    return (
      <View style={styles.container}>
        <Header style={{backgroundColor: 'rgba(245,245,245,255)'}}>
          <Left>
            <AntDesign
              onPress={() => this.props.navigation.goBack(null)}
              name="arrowleft"
              style={{color: colors.backgroundcolor}}
              size={20}
            />
          </Left>
          <Body>
            <Title style={{color: colors.backgroundcolor}}>
              Product Details
            </Title>
          </Body>
          <Right>
            <Icon
              onPress={() => this.props.navigation.navigate('WishList')}
              style={{right: width / 10, color: colors.backgroundcolor}}
              name="heart-outline"
              size={25}
            />

            <Badge
              value={route.params.count1}
              status="primary"
              containerStyle={{
                position: 'absolute',
                right: width / 8,
                bottom: height / 50,
              }}
            />
            <Badge
              value={route.params.count}
              status="primary"
              containerStyle={{
                position: 'absolute',
                right: 1,
                bottom: height / 50,
              }}
            />
            <AntDesign
              onPress={() => this.props.navigation.navigate('Cartscreen')}
              style={{right: width / 30, color: colors.backgroundcolor}}
              name="shoppingcart"
              size={25}
            />
          </Right>
        </Header>

        <ScrollView>
          <View>
            <Image
              source={{uri: data[0].images[0].src}}
              resizeMode="contain"
              style={{
                height: height / 3,
                margin: '10%',
                width: width / 1.4,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: colors.backgroundcolor,
                fontSize: 25,
                left: width / 20,
              }}>
              {data[0].name}
            </Text>
            <View style={{top: height / 72, left: width / 20}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Price:{data[0].price} $
              </Text>
            </View>
          
            <View
              style={{
                flexDirection: 'row',
                left: width / 8,
                marginTop: height / 20,
              }}>
              <View style={{width: '50%'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({activeTab: 1, des: !this.state.des})
                  }>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    Description
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{width: '50%'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({activeTab: 2, des: !this.state.des})
                  }>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>Review</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              {this.state.activeTab == 1 ? (
                <View
                  style={{
                    width: '50%',
                    height: 2,
                    alignSelf: 'center',
                    backgroundColor: colors.backgroundcolor,
                  }}></View>
              ) : (
                <View style={{width: '50%', height: 2}} />
              )}
              {this.state.activeTab == 2 ? (
                <View
                  style={{
                    width: '50%',
                    height: 2,
                    backgroundColor: colors.backgroundcolor,
                  }}
                />
              ) : (
                <View style={{width: '50%', height: 2}} />
              )}
            </View>

            {this.state.des ? (
              Result === '' ? (
                <View
                  style={{
                    paddingTop: height / 13,
                    alignSelf: 'center',
                    paddingBottom: height / 13,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: 'bold',
                      color: '#838383',
                    }}>
                    No Description
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    paddingLeft: width / 15,
                    paddingRight: width / 25,
                    alignSelf: 'center',
                    width: width,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#838383',
                      paddingLeft: width / 14,
                      paddingRight: width / 8,
                      alignSelf: 'center',
                      paddingTop: height / 50,
                    }}>
                    {Result}{' '}
                  </Text>
                </View>
              )
            ) : (
              <View
                style={{
                  paddingTop: height / 13,
                  alignSelf: 'center',
                  paddingBottom: height / 13,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: '#838383',
                  }}>
                  No Reviews{' '}
                </Text>
              </View>
            )}

            <View
              style={{
                left: width / 20,
                backgroundColor: 'rgba(245,245,245,255)',
              }}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                Related Products
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{width: width, height: height / 3}}>
              {data1.map((item, index) =>
                item.name === Text1 ? null : (
                  <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Buy', {
                          id: item.categories[0].id,
                          name: item.name,
                        })
                      }
                      style={{padding: scale(30)}}>
                      <Avatar size="large" source={{uri: item.images[0].src}} />
                    </TouchableOpacity>
                    <Text
                      style={{
                        top: height / 120,
                        marginLeft: 30,
                        marginRight: 30,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        top: height / 120,
                        marginLeft: 30,
                        marginRight: 30,
                        fontWeight: 'bold',
                        fontSize: 10,
                      }}>
                      Price:{item.price}$
                    </Text>
                  </View>
                ),
              )}
            </ScrollView>

            <View style={{flexDirection: 'row', bottom: height / 8}}>
              <TouchableOpacity
                onPress={() => {
                  this.addToWishListHandler(data[0]);
                }}
                style={[
                  {
                    height: height / 15,
                    width: width / 2.5,
                    borderRadius: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.backgroundcolor,
                    marginLeft: height / 30,
                    marginRight: height / 60,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  ADD TO WISHLIST
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                //   onPress={()=>  alert("Added to WishList") }
                onPress={() => {
                  this.addCartHandler(data[0]);
                }}
                style={[
                  {
                    height: height / 15,
                    width: width / 2.5,
                    borderRadius: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.backgroundcolor,
                    marginLeft: height / 60,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  products1: state.products1.searchResults1,
  itemsCount: state.itemsCount,
  wishListItems: state.wishListItems,
});
const mapDispatchToProps = dispatch => {
  return {
    getProducts1: () => dispatch(getProducts1()),
    addToCart: itemData => {
      dispatch({
        type: 'ADD_TO_CART',
        item: itemData,
      });
    },
    addToWishList: itemData => {
      dispatch({
        type: 'ADD_TO_WISH_LIST',
        item: itemData,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buy);
