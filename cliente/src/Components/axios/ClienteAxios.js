import axios from "axios";

const clienteAxios = axios.create({
    headers : {'Content-Type':'multipart/form-data'},
    baseURL : 'https://gestordeproductos.onrender.com/'
})

export default clienteAxios;