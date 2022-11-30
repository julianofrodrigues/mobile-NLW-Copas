import axios from "axios";

export const api = axios.create({
    baseURL: 'http://Your backend IP:3333'
})