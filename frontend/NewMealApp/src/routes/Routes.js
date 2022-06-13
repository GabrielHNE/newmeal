import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../login/Login';
import Restaurantes from '../assets/restaurantes/Restaurantes';
import TabNav from './TabNav';
import {Context} from './../assets/Context';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [userData,  setUserData] = useState({})

  function externalSetUserData (data){
    setUserData(data)
  }


  return (
    <Context.Provider
      value={{userData: userData, setUserData: externalSetUserData}}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default Routes;
