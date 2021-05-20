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
import CurrentTransaction from './Currenttransaction';
import PreviousTransaction from './PreviousTransaction';
const MyTransaction = props => {
  const [Visible, setvisible] = React.useState({Active: true});
  const [des, setdes] = React.useState({activeTab: 1, des: true});

  return (
    <View style={styles.MainContainer}>
      <Header style={{backgroundColor: 'rgba(245,245,245,255)'}}>
        <Left>
          <Entypo
            name="menu"
            size={35}
            onPress={() => props.navigation.openDrawer()}
            style={{color: colors.Primary}}
          />
        </Left>
        <Body>
          <Title style={{color: colors.Primary,fontWeight:"bold"}}>My Orders</Title>
        </Body>
      </Header>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: colors.white,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 40,
              borderRadius: 10,
              justifyContent: 'center',
            }}
            onPress={() => setdes({activeTab: 1, des: !des.des})}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: colors.Primary,
                textAlign: 'center',
              }}>
              Current Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: 120, justifyContent: 'center', height: 40}}
            onPress={() => setdes({activeTab: 2, des: !des.des})}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: colors.Primary,
                textAlign: 'center',
              }}>
              Previous Orders
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width / 1.1,
            justifyContent: 'space-evenly',
            alignSelf: 'center',
          }}>
          {des.activeTab == 1 ? (
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
          {des.activeTab == 2 ? (
            <View
              style={{
                width: '50%',
                alignSelf: 'center',
                height: 2,
                backgroundColor: colors.backgroundcolor,
              }}
            />
          ) : (
            <View style={{width: '50%', height: 2, alignSelf: 'center'}} />
          )}
        </View>
        {des.activeTab === 1 ? <CurrentTransaction /> : <PreviousTransaction />}
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
    backgroundColor: colors.backgroundcolor,
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
    backgroundColor: colors.backgroundColor,
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
    backgroundColor: colors.backgroundcolor,
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
export default MyTransaction;
