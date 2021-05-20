import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import {colors, width, height, scale, verticalScale} from '../../Config/Theme';
import {Header, Right, Body, Title, Left} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const PreviousTransaction = (props) => {
    const navigation = useNavigation();

  return (
    <View style={styles.MainContainer}>
         <ScrollView>
      
        <View style={{flex: 1, backgroundColor: colors.white}}>
          
          <View
            style={{
              flex: 1,
              width: '90%',
              alignSelf: 'center',
              margin: 20,
              borderColor: colors.ash,
              borderRadius: 10,
              elevation: 10,
              backgroundColor: colors.white,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: colors.cement,
                  borderRadius: 200,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  margin: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Roboto',
                  }}>
                  27-04-2021
                </Text>
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={{fontWeight: 'bold'}}>Product Name</Text>
                    <Text style={{fontWeight: 'bold', color: colors.ash}}>
                      LP
                    </Text>
                  </View>
                  <View style={{flexDirection: 'column', marginHorizontal: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Transaction Id</Text>
                    <Text style={{fontWeight: 'bold', color: colors.ash}}>
                      LoooA1C
                    </Text>
                  </View>
                </View>
                <Text style={{fontWeight: 'bold'}}>Price:$ 40</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>Order Date</Text>
                <Text style={{fontWeight: 'bold', color: colors.ash}}>
                  28-02-2021
                </Text>
              </View>
              <View style={{flexDirection: 'column', marginHorizontal: 80}}>
                <Text style={{fontWeight: 'bold'}}>Delivery Date</Text>
                <Text style={{fontWeight: 'bold', color: colors.ash}}>
                  31-03-2021
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginHorizontal: 20,marginVertical:10}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>Total Items</Text>
                <Text style={{fontWeight: 'bold', color: colors.ash}}>
1                </Text>
              </View>
              <View style={{flexDirection: 'column', marginHorizontal: 80}}>
                <Text style={{fontWeight: 'bold'}}>Delivery Address</Text>
                <Text style={{fontWeight: 'bold', color: colors.ash}}>
3-6/b,Mangalam,Tirupati,517501                </Text>
              </View>
            </View>
                <Text
                  style={{
                    color: colors.green,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
Order Delivered Sucesssfully!!!                </Text>
              
            <View
              style={{
                height: 1,
                backgroundColor: colors.Primary,
                marginVertical: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                width: width / 2,
                marginVertical: 10,
              }}>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: colors.Primary,
                  borderRadius: 10,
                  justifyContent: 'center',
                  marginHorizontal: 30,
                }}>
                <Text
                  style={{
                    color: colors.white,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Return
                </Text>
              </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>navigation.navigate("AddReview")}

                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: colors.Primary,
                  borderRadius: 10,
                  justifyContent: 'center',
                  marginHorizontal: 30,
                }}>
                <Text
                  style={{
                    color: colors.white,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Add Review
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: '90%',
              alignSelf: 'center',
              margin: 20,
              borderColor: colors.ash,
              borderRadius: 10,
              elevation: 10,
              backgroundColor: colors.white,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: colors.cement,
                  borderRadius: 200,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  margin: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Roboto',
                  }}>
                  27-04-2021
                </Text>
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={{fontWeight: 'bold'}}>Product Name</Text>
                    <Text style={{fontWeight: 'bold', color: colors.ash}}>
                      LP
                    </Text>
                  </View>
                  <View style={{flexDirection: 'column', marginHorizontal: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Transaction Id</Text>
                    <Text style={{fontWeight: 'bold', color: colors.ash}}>
                      LoooA1C
                    </Text>
                  </View>
                </View>
                <Text style={{fontWeight: 'bold'}}>Price:$ 40</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>Order Date</Text>
                <Text style={{fontWeight: 'bold', color: colors.ash}}>
                  28-02-2021
                </Text>
              </View>
              <View style={{flexDirection: 'column', marginHorizontal: 80}}>
                <Text style={{fontWeight: 'bold'}}>Delivery Date</Text>
                <Text style={{fontWeight: 'bold', color: colors.ash}}>
                  31-03-2021
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginHorizontal: 20,marginVertical:10}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>Total Items</Text>
                <Text style={{fontWeight: 'bold', color: colors.ash}}>
1                </Text>
              </View>
              <View style={{flexDirection: 'column', marginHorizontal: 80}}>
                <Text style={{fontWeight: 'bold'}}>Delivery Address</Text>
                <Text style={{fontWeight: 'bold', color: colors.ash}}>
3-6/b,Mangalam,Tirupati,517501                </Text>
              </View>
            </View>

                <Text
                  style={{
                    color: colors.green,
                    textAlign: 'center',
                    alignSelf:"center",
                    justifyContent:"center",
                    fontWeight: 'bold',
                  }}>
Order Delivered Sucesssfully!!!                </Text>
              
            <View
              style={{
                height: 1,
                backgroundColor: colors.Primary,
                marginVertical: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                width: width / 2,
                marginVertical: 10,
              }}>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: colors.Primary,
                  borderRadius: 10,
                  justifyContent: 'center',
                  marginHorizontal: 30,
                }}>
                <Text
                  style={{
                    color: colors.white,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Return
                </Text>
              </TouchableOpacity>
                       <TouchableOpacity onPress={()=>navigation.navigate("AddReview")}

                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: colors.Primary,
                  borderRadius: 10,
                  justifyContent: 'center',
                  marginHorizontal: 30,
                }}>
                <Text
                  style={{
                    color: colors.white,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Add Review
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.Primary,
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    alignSelf: 'center',
    left: width / 10,
  },
  topprod: {
    alignSelf: 'center',
  },
  Done: {
    width: width / 1.4,
    height: height / 20,
    backgroundColor: colors.darkblue,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  Getstartedtext: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontSize: 12,
    left: width / 20,
    marginBottom: 30,
    marginVertical: 10,
  },
  text1: {
    color: colors.black,
    fontSize: 12,
    left: width / 20,
    paddingRight: 45,
    marginBottom: 40,
  },
  text2: {fontWeight: 'bold', fontSize: 18},
  text3: {
    color: colors.black,
    fontWeight: 'bold',
    marginHorizontal: 2,
    margin: 2,
    fontSize: 12,
  },
  text5: {
    color: colors.ash,
    fontWeight: 'bold',
    marginHorizontal: 2,
    marginBottom: 20,
    fontSize: 12,
  },
  text6: {
    color: colors.ash,
    fontWeight: 'bold',
    marginHorizontal: 2,
    fontSize: 12,
  },

  text4: {color: colors.ash, fontWeight: 'bold', fontSize: 12},
  commontext: {
    fontSize: 14,
    fontWeight: '500',
    alignContent: 'space-between',
  },
  view4: {
    paddingLeft: width / 15,
    paddingRight: width / 3.5,
    justifyContent: 'space-between',
  },
  view1: {
    backgroundColor: colors.cement,
    paddingBottom: height / 70,
    paddingTop: height / 70,
    margin: width / 15,
    borderRadius: 10,
  },
  view2: {
    left: width / 15,
    justifyContent: 'space-between',
  },

  view3: {
    marginTop: height / 15,
    backgroundColor: colors.lightcement,
    margin: width / 15,
    height: height / 20,
    justifyContent: 'center',
  },
  button1: {
    elevation: 159,
    backgroundColor: colors.Primary,
    height: 2,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 5,
  },
  Text6: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 10,
  },
  Basic: {
    height: 30,
    width: 100,
    justifyContent: 'center',
    borderColor: colors.ash,
    borderRadius: 5,
    backgroundColor: colors.Primary,
    elevation: 2,
  },
  Basic1: {
    height: 30,
    width: 100,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 10,
  },
  BasicText1: {textAlign: 'center', fontWeight: 'bold', color: colors.black},
  BasicText: {textAlign: 'center', fontWeight: 'bold', color: colors.white},
});
export default PreviousTransaction;
