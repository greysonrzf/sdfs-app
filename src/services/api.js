import axios from 'axios';

const api = axios.create({
  baseURL: 'https://podcasts-json-server.herokuapp.com'
});

export default api;
