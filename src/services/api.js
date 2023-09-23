import axios from "axios";
// * CONEXÃO COM O SERVIDOR  */

const api = axios.create({
  baseURL: "https://api-salao-leila-production.up.railway.app",
});

// * BUSCA O TOKEN E DISPONIBILIZA PARA O LOCALSTORAGE  */

api.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("salaoleila:userData");
  const token = userData && JSON.parse(userData).token;
  config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default api;
