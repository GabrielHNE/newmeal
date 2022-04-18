import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

import Colors from '../../assets/Colors';
import GlobalStyles from '../../assets/GlobalStyles';

import InputField from './InputField';

const Register = props => {
  const tryToLogin = props => {
  
  };
  return (
    <>
      <Text style={{fontSize: 25, color: Colors.white}}>Entrar</Text>
      <View style={Styles.mainContent}>
        <InputField
          value={props.nome}
          onChangeText={props.setNome}
          tag="Nome"
        />
        <InputField
          value={props.email}
          onChangeText={props.setEmail}
          tag="Email"
        />
        <InputField
          value={props.contato}
          onChangeText={props.setContato}
          tag="Contato"
        />
        <InputField
          value={props.endereco}
          onChangeText={props.setEndereco}
          tag="Endereço"
        />
        <InputField
          value={props.senha}
          onChangeText={props.setSenha}
          tag="Senha"
          secureTextEntry
          onSubmitEditing={tryToLogin}
        />
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  mainContent: {
    ...GlobalStyles.roundedBox,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    backgroundColor: Colors.main_color,
    padding: 15,
  },
});

export default Register;
