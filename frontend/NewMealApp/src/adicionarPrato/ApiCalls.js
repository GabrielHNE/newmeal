import { api } from "../services/api";


export async function addPrato(idRestaurante, nome, descricao, preco, fotos) {
    let retorno = {};
    // console.log({nome: nome,
    //   descricao: descricao,
    //   preco: parseFloat(preco).toFixed(2),
    //   categoriaPreco: 0,
    //   fotos: fotos})
    //   return
    await api
      .post(`/restaurantes/${idRestaurante}/cardapio/addPrato`, {
        nome: nome,
        descricao: descricao,
        preco: parseFloat(preco).toFixed(2),
        categoriaPreco: 0,
        fotos: fotos
      })
      .then(response => {
          console.log('Resposta de add cardapio', response)
        retorno = response.data;
      })
      .catch(e => {
        retorno = e;
        console.log(JSON.parse(JSON.stringify(e)))
        return e;
      });
    return retorno;
  }