import axios from 'axios'

const api = axios.create({
  baseURL: "https://api-salao-leila-production.up.railway.app",
});

 api.interceptors.request.use(async (config) => {
   const userData = await localStorage.getItem('salaoleila:userData')
   const token = userData && JSON.parse(userData).token
   config.headers.authorization = `Bearer ${token}`
   
   console.log(userData);
   return config
 })

export default api


