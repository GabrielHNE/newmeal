import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import PageContainer from '../components/pageContainer/PageContainer';
import GlobalStyles from '../assets/GlobalStyles';
import UserHeader from '../components/UserHeader';
import Colors from '../assets/Colors';
import Prato from './Prato';
import {getRestauranteByUser} from './apiCalls';
import {Context} from '../assets/Context';

const Pratos = props => {
  const [pratosList, setPratosList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reloadData, setReloadData] = useState(false);
  let appContext = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      let res = await getRestauranteByUser(appContext.userData.user.id);
      setPratosList(res);
      setLoading(false);
    }
    fetchData();
  }, [reloadData]);

  function reload() {
    console.log('Recarregando dados de pratos');
    setReloadData(!reloadData);
  }
  return (
    <PageContainer>
      <View style={{flex: 1, ...GlobalStyles.yCentered, padding: 10}}>
        <UserHeader userData={appContext.userData} />
        <View style={GlobalStyles.divisor} />
        <Text
          style={{
            fontSize: 25,
            color: Colors.black,
            alignSelf: 'flex-start',
          }}>
          Pratos do restaurante
        </Text>
        <ScrollView>
          {pratosList.length == 0 && <Text style={{marginTop: 200}}>Não há pratos cadastrados</Text>}
          {pratosList.map((item, index) => {
            return (
              <Prato
                prato={item}
                reload={reload}
                idRestaurante={appContext.userData.user.restaurante.id}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
    </PageContainer>
  );
};

export default Pratos;
