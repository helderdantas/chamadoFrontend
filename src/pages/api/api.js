import axios from "axios";

const api = axios.create({
  baseURL:"http://localhost:3032"
})
export default api;

