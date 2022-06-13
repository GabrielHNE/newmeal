import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

import PageContainer from '../components/pageContainer/PageContainer';
import GlobalStyles from '../assets/GlobalStyles';
import Colors from '../assets/Colors';
import { deletarPrato } from './apiCalls';

const Pratos = props => {

  function deletarPratoFunc() {
    Alert.alert('Deletar prato', 'Deseja deletar este prato?', [
      {text: 'Cancelar'},
      {text: 'Deletar', onPress: ()=>{
          console.log(props.prato, props.idRestaurante)
          deletarPrato(props.idRestaurante, props.prato.id)
          props.reload()
      }},
    ]);
  }

  return (
    <View style={GlobalStyles.squareShadedBox}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: '90%'}}>
            {props.prato.nome}: {props.prato.descricao}
          </Text>
          <TouchableOpacity onPress={() => deletarPratoFunc()}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              size={20}
              style={{marginLeft: 'auto', paddingLeft: 10}}
              color={Colors.orange}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}>
          {props.prato.fotos.map((item, index) => {
          return (
            <Image
            key={index}
            source={{uri: item.url}}
            style={{
                ...GlobalStyles.roundedBox,
                height: 100,
                width: 100,
                margin: 5,
              }}
            />
            );
          })}
        
        </View>
    </View>
  );
};

export default Pratos;
