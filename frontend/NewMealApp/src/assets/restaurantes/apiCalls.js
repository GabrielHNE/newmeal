import { api } from "../../services/api";


export async function getRestaurantes(email, senha) {
    let retorno = {};
    await api
      .get(`/restaurantes`, {
      })
      .then(response => {
        retorno = response.data;
      })
      .catch(e => {
        retorno = e;
        // console.log(JSON.parse(JSON.stringify(e)))
        return e;
      });
    return retorno;
  }
