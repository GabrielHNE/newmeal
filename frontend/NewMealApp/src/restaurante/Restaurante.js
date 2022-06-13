import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faTrophy,
  faHistory,
  faUser,
  faPaperclip,
  faBell,
  faChevronRight,
  faEye,
  faLock,
  faWindowClose,
  faCutlery,
  faCog,
  faBook,
  faBowlFood,
  faPlus,
  faFork
} from '@fortawesome/free-solid-svg-icons';

import GlobalStyles from './../assets/GlobalStyles';
import Colors from './../assets/Colors';
import PageContainer from './../components/pageContainer/PageContainer';
import {Context} from '../assets/Context';
import UserHeader from '../components/UserHeader';
import MenuItem from '../components/MenuItem';

const Pratos = props => {
  let appContext = useContext(Context);
  return (
    <PageContainer>
      <View style={{flex: 1, ...GlobalStyles.yCentered, padding: 10}}>
        <UserHeader userData={appContext.userData} />
        <View style={GlobalStyles.divisor} />
        <Text style={{fontSize: 25, color: Colors.black, width: '60%'}}>
          Restaurante {appContext.userData.user.restaurante.nome}
        </Text>
        <View style={{...GlobalStyles.squareShadedBox}}>
          <MenuItem tag="Editar Restaurante" icon={faCog} />
          <MenuItem tag="Contratos" icon={faBook} />
          <MenuItem tag="Lista de Pratos" icon={faBowlFood} onPress= {()=>props.navigation.navigate("Lista de pratos")}/>
          <MenuItem tag="Adicionar Prato" icon={faPlus} onPress= {()=>props.navigation.navigate("Adicionar Prato")} />
        </View>
        {/* <View style={GlobalStyles.divisor} /> */}
      </View>
    </PageContainer>
  );
};


export default Pratos;