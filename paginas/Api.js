import axios from "axios";

const Api = axios.create({
    baseURL: "http://192.168.15.10:3000"
});

export default Api