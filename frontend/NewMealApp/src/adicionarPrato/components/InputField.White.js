import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';

import Colors from '../../assets/Colors';
import GlobalStyles from '../../assets/GlobalStyles';

const InputFieldWhite = props => {
  return (
    <View style={Styles.container}>
      <Text style={{color: Colors.black}}>{props.tag}</Text>
      <TextInput
        multiline = {!!props.numberOfLines}
        numberOfLines = {props.numberOfLines}
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
    backgroundColor: Colors.lightGrey,
    width: '100%',
    padding: 0,
    paddingLeft: 5,
    borderRadius: 5
  },
});

export default InputFieldWhite;
