import React, {useState, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';

import Colors from '../assets/Colors';
import GlobalStyles from '../assets/GlobalStyles';

import PageContainer from '../components/pageContainer/PageContainer';
import LoginComponent from './components/LoginComponent';
import Register from './components/Register';
import {login, signUp} from './apiCalls';
import {Context} from './../assets/Context'

const Login = props => {
  const [tipo, setTipo] = useState('escolher');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');

  let appContext = useContext(Context)

  const loginObj = {
    email: email,
    setEmail: setEmail,
    senha: senha,
    setSenha: setSenha,
  };
  const registerObj = {
    email: email,
    setEmail: setEmail,
    senha: senha,
    setSenha: setSenha,
    nome: nome,
    setNome: setNome,
    contato: contato,
    setContato: setContato,
    endereco: endereco,
    setEndereco: setEndereco,
  };
  const windowHeight = Dimensions.get('window').height;

  const attemptLogin = async () => {
    console.log(`Logando com email:  ${email} e senha: ${senha}`);
    let res = await login(email, senha);
    if (res.statusCode) {
      Alert.alert('Login falhou!', 'Email ou senha incorretos', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      await appContext.setUserData(res)
      props.navigation.push('TabNav', {teste: 'teste'});
    }
  };

  const attemptSignUp = async () => {
    let res = await signUp(nome, email, contato, endereco, senha);
    if (res.statusCode !== 200 || res instanceof Error) {
      Alert.alert('Ops!', res.value || 'Falha na criação de conta', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      Alert.alert('Sucesso!', 'Contra criada com sucesso!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      setTipo('escolher');
    }
  };

  return (
    <PageContainer style={Styles.pageContainer}>
      <ImageBackground
        source={require('./../assets/images/backdrop.png')}
        style={{resizeMode: 'center', height: windowHeight}}>
        <View style={Styles.upper}>
          <Text style={Styles.textDescubra}>Descubra novos sabores!</Text>
          {tipo === 'login' && <LoginComponent {...loginObj} />}
          {tipo === 'register' && <Register {...registerObj} />}
        </View>
        <View style={Styles.lower}>
          {tipo === 'escolher' && (
            <View style={Styles.buttonContainer}>
              <View style={Styles.butttonLeftContainer}>
                <TouchableOpacity
                  style={Styles.button}
                  onPress={() => setTipo('register')}>
                  <Text style={{fontSize: 25, color: Colors.white}}>
                    Registrar-se
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => setTipo('login')}>
                <Text style={{fontSize: 25, color: Colors.orange}}>Entrar</Text>
              </TouchableOpacity>
            </View>
          )}
          {tipo === 'login' && (
            // <TouchableOpacity
            //   style={Styles.buttonAlone}
            //   onPress={() => {attemptLogin()}}>
            //   <Text style={{fontSize: 25, color: Colors.white}}>Entrar</Text>
            // </TouchableOpacity>

            <View style={Styles.buttonContainer}>
              <View style={Styles.butttonLeftContainer}>
                <TouchableOpacity
                  style={Styles.button}
                  onPress={() => setTipo('escolher')}>
                  <Text style={{fontSize: 25, color: Colors.white}}>
                    Voltar
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => {
                  attemptLogin();
                }}>
                <Text style={{fontSize: 25, color: Colors.orange}}>Entrar</Text>
              </TouchableOpacity>
            </View>
          )}
          {tipo === 'register' && (
            // <TouchableOpacity
            //   style={Styles.buttonAlone}
            //   onPress={() => {attemptSignUp()}}>
            //   <Text style={{fontSize: 25, color: Colors.white}}>Cadastrar</Text>
            // </TouchableOpacity>

            <View style={Styles.buttonContainer}>
              <View style={Styles.butttonLeftContainer}>
                <TouchableOpacity
                  style={Styles.button}
                  onPress={() => setTipo('escolher')}>
                  <Text style={{fontSize: 25, color: Colors.white}}>
                    Voltar
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => {
                  attemptSignUp();
                }}>
                <Text style={{fontSize: 25, color: Colors.orange}}>
                  Cadastrar
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
    </PageContainer>
  );
};
const Styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.main_color,
    ...GlobalStyles.alignContent,
  },
  upper: {
    height: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lower: {
    ...GlobalStyles.allCentered,
    height: '20%',
  },
  buttonContainer: {
    width: '80%',
    height: '40%',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    ...GlobalStyles.roundedBox,
  },
  butttonLeftContainer: {
    flex: 1.2,
    backgroundColor: Colors.orange,
    ...GlobalStyles.roundedBox,
  },
  button: {
    flex: 1,
    ...GlobalStyles.allCentered,
  },
  buttonAlone: {
    ...GlobalStyles.roundedBox,
    ...GlobalStyles.allCentered,
    width: '40%',
    height: '40%',
    backgroundColor: Colors.orange,
  },
  textDescubra: {
    fontFamily: 'Pacifico',
    fontSize: 50,
    color: Colors.white,
  },
});

export default Login;
