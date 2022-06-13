import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faTrophy,
  faHistory,
  faUser,
  faPaperclip,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

import Login from '../login/Login';
import User from '../user/User';
import Restaurantes from '../assets/restaurantes/Restaurantes';

import Colors from '../assets/Colors';
import GlobalStyles from '../assets/GlobalStyles';
import UserStack from './UserStack'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = props => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          
            "tabBarActiveTintColor": Colors.orange,
            "tabBarInactiveTintColor": Colors.black,
            "tabBarActiveBackgroundColor": Colors.main_color,
            "tabBarInactiveBackgroundColor": Colors.main_color,
            "tabBarShowLabel": false,
            "tabBarLabelStyle": {
              "fontSize": 12
            },
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ],
          
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            color = 'white';

            switch (route.name) {
              case 'Home':
                iconName = faHome;
                color = focused ? Colors.orange : Colors.black;
                break;
              case 'Notificacoes':
                iconName = faBell;
                color = focused ? Colors.orange : Colors.black;

                break;
              case 'Filtros':
                return (
                  <Image
                    source={require('./../assets/images/center_icon.png')}
                    style={Styles.centerNavButton}
                  />
                );
                break;
              case 'Historico':
                iconName = faHistory;
                color = focused ? Colors.orange : Colors.black;

                break;

              case 'Perfil':
                iconName = faUser;
                color = focused ? Colors.orange : Colors.black;

                break;
              default:
                iconName = faUser;
                color = focused ? Colors.orange : Colors.black;
            }
            return <FontAwesomeIcon icon={iconName} color={color}  size={25}/>;
          },
          
        })}
        >
        <Tab.Screen
          name="Home"
          component={Restaurantes}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Notificacoes"
          component={Restaurantes}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Filtros"
          component={Restaurantes}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Historico"
          component={Restaurantes}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="User"
          component={UserStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </>
  );
};

const Styles = StyleSheet.create({
  centerNavButton: {
    marginTop: -30
  },
});

export default Routes;
