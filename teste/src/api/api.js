import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.58.72.64:3333',
});

export default api;