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

import PageContainer from '../components/pageContainer/PageContainer';
import GlobalStyles from '../assets/GlobalStyles';
import Colors from '../assets/Colors';
import {getRestaurantes} from './apiCalls';
import staticData from './staticData';

const Pratos = props => {
  let appContext = useContext(Context)

  return (
    <PageContainer >
      <Text>pfoaisjdfpoi</Text>
    </PageContainer>
  );
};


export default Pratos;