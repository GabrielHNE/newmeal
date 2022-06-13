import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import GlobalStyles from '../assets/GlobalStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight,} from '@fortawesome/free-solid-svg-icons';

const MenuItem = props => {
  return (
    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}} onPress = {props.onPress}>
      <FontAwesomeIcon icon={props.icon} size={20} />
      <Text style={{marginLeft: 20}}>{props.tag}</Text>
      <FontAwesomeIcon
        icon={faChevronRight}
        size={20}
        style={{marginLeft: 'auto'}}
      />
    </TouchableOpacity>
  );
};

export default MenuItem;
