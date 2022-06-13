import React, {useEffect, useState, useContext,} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import PageContainer from '../components/pageContainer/PageContainer';
import GlobalStyles from '../assets/GlobalStyles';
import Colors from '../assets/Colors';
import InputFieldWhite from './components/InputField.White';
import {addPrato} from './ApiCalls'
import {Context} from './../assets/Context'

const AdicionarPratos = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [urlList, setUrlList] = useState([]);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [url, setUrl] = useState('');


  let appContext = useContext(Context)

  function clearStates(){
    setUrl('')
    setNome('')
    setDescricao('')
    setPreco('')
    setUrlList([])
  }

  function addUrlToList() {
    setUrlList([...urlList, {url: url}]);
    closeModal();
  }
  function closeModal() {
    setUrl('');
    setModalVisible(false);
  }
  async function  addPratoApi(){
    // console.log(appContext.userData.user.restaurante.id, nome, descricao, preco, urlList)
    let res = await addPrato(appContext.userData.user.restaurante.id, nome, descricao, preco, urlList)
    // console.log(appContext.userData.user.restaurante.id)
    console.log('res.status:', res)
    if (!(res instanceof Error)){
      Alert.alert(
        "Sucesso!",
        "Prato adicionado",
        [
          { text: "OK" }
        ]
      );
      clearStates()
    }
    else{
      Alert.alert(
        "Falha",
        "Não foi possível adicionar o prato",
        [
          { text: "OK" }
        ]
      );
      clearStates()
    }
  }
  return (
    <PageContainer>
      <>
        {modalVisible && (
          <TouchableOpacity
            onPress={() => closeModal()}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(52, 52, 52, 0.2)',
              zIndex: 3,
              ...GlobalStyles.allCentered,
            }}>
            <View
              style={{
                ...GlobalStyles.squareShadedBox,
                ...GlobalStyles.allCentered,
                width: '60%',
                backgroundColor: Colors.white,
                paddingVertical: 20,
              }}>
              <InputFieldWhite
                value={url}
                onChangeText={setUrl}
                tag="Url"></InputFieldWhite>
              <TouchableOpacity
                style={{
                  ...GlobalStyles.roundedBox,
                  backgroundColor: Colors.orange,
                  marginTop: 10,
                }}
                onPress={() => addUrlToList()}>
                <Text style={{padding: 10, color: Colors.white}}>
                  Adicionar
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        <ScrollView
          style={{flex: 1, padding: 10}}
          contentContainerStyl={GlobalStyles.yCentered}>
          <View style={GlobalStyles.squareShadedBox}>
            <InputFieldWhite
              value={nome}
              onChangeText={setNome}
              tag="Nome"></InputFieldWhite>
            <InputFieldWhite
              value={descricao}
              onChangeText={setDescricao}
              tag="Descrição"></InputFieldWhite>
            <InputFieldWhite
              value={preco}
              onChangeText={setPreco}
              tag="Preço"></InputFieldWhite>
            <Text style={{color: Colors.black}}>Imagens</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  ...GlobalStyles.roundedBox,
                  ...GlobalStyles.allCentered,
                  width: 100,
                  height: 100,
                  backgroundColor: Colors.lightGrey,
                  margin: 5,
                }}>
                <FontAwesomeIcon icon={faPlus} color={Colors.grey} size={25} />
              </TouchableOpacity>
              {urlList.map((item, index) => {
                return (
                  <Image
                    key={index}
                    style={{
                      ...GlobalStyles.roundedBox,
                      ...GlobalStyles.allCentered,
                      width: 100,
                      height: 100,
                      backgroundColor: Colors.lightGrey,
                      margin: 5,
                    }}
                    source={{uri: item.url}}
                  />
                );
              })}
            </View>
            <TouchableOpacity
              style={{
                ...GlobalStyles.roundedBox,
                ...GlobalStyles.allCentered,
                backgroundColor: Colors.orange,
                paddingVertical: 10,
                width: '40%',
                alignSelf: 'center',
                marginTop: 15,
              }}
              onPress={() => {addPratoApi()}}>
              <Text style={{fontSize: 25, color: Colors.white}}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    </PageContainer>
  );
};

export default AdicionarPratos;
