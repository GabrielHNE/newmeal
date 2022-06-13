import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../login/Login';
import Restaurantes from '../assets/restaurantes/Restaurantes';
import TabNav from './TabNav';
import {Context} from './../assets/Context';
import User from '../user/User';
import Restaurante from './../restaurante/Restaurante'
import AdicionarPratos from '../adicionarPrato/AdicionarPrato';
import Pratos from '../pratos/Pratos';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
        <Stack.Navigator>
          <Stack.Screen
            name="User Home"
            component={User}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Restaurante"
            component={Restaurante}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Adicionar Prato"
            component={AdicionarPratos}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Lista de pratos"
            component={Pratos}
            // options={{headerShown: false}}
          />
        </Stack.Navigator>
  );
};

export default Routes;
