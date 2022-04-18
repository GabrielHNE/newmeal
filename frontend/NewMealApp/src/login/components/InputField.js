import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';

import Colors from '../../assets/Colors';
import GlobalStyles from '../../assets/GlobalStyles';

const InputField = props => {
  return (
    <View style={Styles.container}>
      <Text style={{color: Colors.white}}>{props.tag}</Text>
      <TextInput
        secureTextEntry = {props.secureTextEntry}
        style={Styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    // backgroundColor: 'black',
  },
  input: {
    backgroundColor: Colors.main_light,
    width: '100%',
    padding: 0,
    paddingLeft: 5,
  },
});

export default InputField;
