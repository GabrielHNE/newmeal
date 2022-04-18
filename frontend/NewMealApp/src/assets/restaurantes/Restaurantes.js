import React, {useEffect, useState} from 'react';
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
import Colors from '../Colors';

import {getRestaurantes} from './apiCalls';
import staticData from './staticData';

const Restaurantes = props => {
  const [restauranteAtivo, setRestauranteAtivo] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let temp = staticData;
      temp = await getRestaurantes();
      if (temp instanceof Error) {
        // console.log(
        //   'Nao foi possivel localizar dados na api. Retornando dados locais',
        // );
        temp = staticData;
      }
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
        <View style={Styles.userContainer}>
          <View style={Styles.avatarContainer}>
            <Image
              source={require('./../../assets/images/Ellipse1.png')}
              style={Styles.userAvatar}
            />
          </View>
          <Text style={{color: Colors.black}}> Jasmine Gibson</Text>
          <Text style={Styles.textUserInfo}>Não assinante</Text>
        </View>
        <View style={Styles.divisor} />
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
                    source={{uri: item.item.foto}}
                    style={Styles.restaurantImage}
                  />
                  <Text style={{color: Colors.black}}>{item.item.nome}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        <View style={Styles.divisor} />

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
                source={{uri: restauranteAtivo.foto}}
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
    resizeMode: 'cover',
    ...GlobalStyles.roundedBox,
  },
  divisor: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.grey,
    margin: 2,
  },
  restauranteImageDetalhes: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
    ...GlobalStyles.roundedBox,
    alignSelf: 'center',
  },
});

export default Restaurantes;
