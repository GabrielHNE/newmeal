import {api, apiTeste} from './../services/api';

export async function login(email, senha) {
  //AXIOS
  let retorno = {};
  await api
    .post(`/login`, {
      email: email,
      senha: senha,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        "Content-Type": "application/json;charset=UTF-8"
    },
    mode: "cors"
    }
    )
    .then(response => {
      retorno = response.data;
      console.log(response)
    })
    .catch(e => {
      retorno = e;
      console.log(JSON.parse(JSON.stringify(e)))
      return e;
    });

  //FETCH
  // fetch('191.52.64.250:3333/items', {
  //   method: 'GET',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': 'Authorization',
  //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //     'Content-Type': 'application/json;charset=UTF-8',
  //   },
  // })
  //   .then(res => res.json())
  //   .then(res => console.log('Resposta', res))
  //   .catch(err => console.log('ERRO: ', JSON.parse(JSON.stringify(err))));

  //API TESTE
  // let retorno = {};
  // await apiTeste
  //   .get(`/entries`, {

  //   })
  //   .then(response => {
  //     retorno = response.data;
  //     console.log('Resposta teste',response)
  //   })
  //   .catch(e => {
  //     retorno = e;
  //     console.log(e)
  //     console.log(JSON.parse(JSON.stringify(e)))
  //     return e;
  //   });
  // return retorno;
}
export async function signUp(nome, email, contato, endereco, senha) {
  let retorno = {};
  console.log('Cadastreando....');
  await api
    .post(`/signup`, {
      nome: nome,
      email: email,
      contato: contato,
      endereco: endereco,
      senha: senha,
    })
    .then(response => {
      console.log(response);
      retorno = response.data;
    })
    .catch(e => {
      retorno = e;
      console.log(JSON.parse(JSON.stringify(e)));
      return e;
    });
  return retorno;
}
