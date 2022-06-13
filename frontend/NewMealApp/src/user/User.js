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
  faCutlery
} from '@fortawesome/free-solid-svg-icons';

import GlobalStyles from './../assets/GlobalStyles';
import Colors from './../assets/Colors';
import PageContainer from './../components/pageContainer/PageContainer';
import {Context} from '../assets/Context';
import UserHeader from '../components/UserHeader';
import MenuItem from '../components/MenuItem';

const User = props => {
  let appContext = useContext(Context);
  return (
    <PageContainer>
      <View style={{flex: 1, ...GlobalStyles.yCentered, padding: 10}}>
        <UserHeader userData={appContext.userData} />
        <View style={GlobalStyles.divisor} />
        <Text style={{fontSize: 25, color: Colors.black, width: '60%'}}>
          Configurações
        </Text>
        <View style={{...GlobalStyles.squareShadedBox}}>
          <MenuItem tag="Conta" icon={faUser} />
          <MenuItem tag="Aparência" icon={faEye} />
          <MenuItem tag="Segurança" icon={faLock} />
          <MenuItem tag="Notificações" icon={faBell} />
          {appContext.userData.user.role === 'Restaurante' &&<MenuItem tag="Restaurante" icon={faCutlery} onPress= {()=>{props.navigation.navigate('Restaurante')}}/>}
          <MenuItem tag="Sair" icon={faWindowClose} />
        </View>
        {/* <View style={GlobalStyles.divisor} /> */}
      </View>
    </PageContainer>
  );
};

export default User;
