import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


import GlobalStyles from '../assets/GlobalStyles';
import Colors from '../assets/Colors';

const UserHeader = props => {
  return (
    <View style={Styles.userContainer}>
      <View style={Styles.avatarContainer}>
        <Image
          source={require('./../assets/images/Ellipse1.png')}
          style={Styles.userAvatar}
        />
      </View>
      <Text style={{color: Colors.black}}> {props.userData?.user?.nome}</Text>
      <Text style={Styles.textUserInfo}>{props.userData?.user?.role}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
    userContainer: {
      width: '100%',
      height: '10%',
      // backgroundColor: 'black'
      flexDirection: 'row',
      alignItems: 'center',
    },
    listConainer: {
      width: '100%',
      height: '30%',
      // backgroundColor: 'yellow',
    },
    contentContainer: {
      width: '100%',
      height: '50%',
      // backgroundColor: 'blue',
    },
    avatarContainer: {
      height: '100%',
      // padding: 10
      // width: 40,
    },
    userAvatar: {
      height: '100%',
      resizeMode: 'contain',
      // width: 20,
    },
    textUserInfo: {
      marginLeft: 'auto',
      color: Colors.black,
    },
    restaurantImageContainer: {
      width: Dimensions.get('window').width * 0.6,
      flex: 1,
    },
    restaurantImage: {
      width: '80%',
      height: '80%',
      resizeMode: 'contain',
      ...GlobalStyles.roundedBox,
    },
    restauranteImageDetalhes: {
      width: '80%',
      height: '50%',
      resizeMode: 'contain',
      ...GlobalStyles.roundedBox,
      alignSelf: 'center',
    },
  });

export default UserHeader;
