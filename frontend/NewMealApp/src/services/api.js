import axios from 'axios';

const api = axios.create({
  baseURL: 'https://191.52.64.93:5001', 
});
const apiTeste = axios.create({
  baseURL: 'https://api.publicapis.org'
});

export {api, apiTeste};