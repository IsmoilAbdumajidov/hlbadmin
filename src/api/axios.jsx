import axios from "axios";
import { clearLS, getFromLS } from "../utils/localStorage";

export const instance = axios.create({
    baseURL: "https://api.int-audit.uz/",
    // baseURL: "https://hlbplatform.pythonanywhere.com/api/",
    // baseURL: "https://d213-188-113-239-116.ngrok-free.app/api/",
})


instance.interceptors.request.use(
    (config) => {
        const token = getFromLS("a-token");
        // console.log(config);
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
            // console.log(token);
        }
        return config; 
    },
    (error) => {
        console.log("error");
        return Promise.reject(error);
    }
);