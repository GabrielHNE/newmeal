import {api, apiTeste} from './../services/api';

export async function getRestauranteByUser(id) {
  //AXIOS
  let retorno = {};
  await api
    .get(`/restaurantes/${id}/cardapio`, {

    })
    .then(response => {
      retorno = response.data;
      console.log(response);
    })
    .catch(e => {
      retorno = e;
      console.log(JSON.parse(JSON.stringify(e)));
      // return e;
    });
  return retorno;
}
export async function deletarPrato(idRestaurante, idPrato) {
  //AXIOS
  // console.log('Deletando prato ', idPrato, ' do restaurante ', idRestaurante)
  // return
  let retorno = {};
  await api
    .delete(`/restaurantes/${idRestaurante}/cardapio/${idPrato}`, {

    })
    .then(response => {
      retorno = response.data;
      console.log(response);
    })
    .catch(e => {
      retorno = e;
      console.log(JSON.parse(JSON.stringify(e)));
      // return e;
    });
  return retorno;
}
