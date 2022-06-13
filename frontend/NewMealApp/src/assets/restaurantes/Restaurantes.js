import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import PageContainer from '../../components/pageContainer/PageContainer';
import GlobalStyles from '../GlobalStyles';
import UserHeader from '../../components/UserHeader';
import Colors from '../Colors';
import {Context} from './../Context'

import {getRestaurantes} from './apiCalls';
import staticData from './staticData';


const Restaurantes = props => {
  const [restauranteAtivo, setRestauranteAtivo] = useState({});
  const [data, setData] = useState([]);
  let appContext = useContext(Context)

  useEffect(() => {
    async function fetchData() {
      let temp = staticData;
      temp = await getRestaurantes();
      setData(temp);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // if (data.length > 0) {
    //   setRestauranteAtivo(data[0]);
    // }
  }, [data]);

  return (
    <PageContainer style={GlobalStyles.allCentered}>
      <View style={Styles.pageContainer}>
        <UserHeader userData={appContext.userData}></UserHeader>
        <View style={GlobalStyles.divisor} />
        <View style={Styles.textConainer}>
          <Text style={{fontSize: 25, color: Colors.black, width: '60%'}}>
            Com fome? Você está no lugar certo
          </Text>
        </View>
        <View style={Styles.listConainer}>
          <Text style={{fontSize: 20, color: Colors.black, padding: 5}}>
            Nossos restaurantes parceiros
          </Text>
          {data != [] && (
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              renderItem={(item, index) => (
                <TouchableOpacity
                  style={Styles.restaurantImageContainer}
                  onPress={() => setRestauranteAtivo(item.item)}>
                  <Image
                    source={{uri: item.item.urlFoto}}
                    style={Styles.restaurantImage}
                  />
                  <Text style={{color: Colors.black}}>{item.item.nome}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        <View style={GlobalStyles.divisor} />

        <View style={Styles.contentContainer}>
          {restauranteAtivo.nome && (
            <>
              <Text style={{fontSize: 35, color: Colors.black}}>
                {restauranteAtivo.nome}
              </Text>
              <Image source={require('./../../assets/images/Rate.png')} />
              <Text
                style={{fontSize: 15, color: Colors.black, paddingVertical: 5}}>
                {restauranteAtivo.endereco}
              </Text>
              <Image
                source={{uri: restauranteAtivo.urlFoto}}
                style={Styles.restauranteImageDetalhes}
              />
            </>
          )}
        </View>
      </View>
    </PageContainer>
  );
};

const Styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    ...GlobalStyles.yCentered,
    padding: 10,
  },
  userContainer: {
    width: '100%',
    height: '10%',
    // backgroundColor: 'black'
    flexDirection: 'row',
    alignItems: 'center',
  },
  textConainer: {
    width: '100%',
    height: '15%',
    // backgroundColor: 'pink',
  },
  listConainer: {
    width: '100%',
    height: '30%',
    // backgroundColor: 'yellow',
  },
  contentContainer: {
    width: '100%',
    height: '50%',
    // backgroundColor: 'blue',
  },
  avatarContainer: {
    height: '100%',
    // padding: 10
    // width: 40,
  },
  userAvatar: {
    height: '100%',
    resizeMode: 'contain',
    // width: 20,
  },
  textUserInfo: {
    marginLeft: 'auto',
    color: Colors.black,
  },
  restaurantImageContainer: {
    width: Dimensions.get('window').width * 0.6,
    flex: 1,
  },
  restaurantImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    ...GlobalStyles.roundedBox,
  },
  restauranteImageDetalhes: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
    ...GlobalStyles.roundedBox,
    alignSelf: 'center',
  },
});

export default Restaurantes;
