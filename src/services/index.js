import {getToken} from '../lib/auth'
import axios from "axios";

export const BASE_API_URL = process.env.VUE_APP_CORE_SERVER_ORIGIN + '/api/v1';

export const authInterceptor = [
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
];

export const Service = (url) => axios.create({
    baseURL: BASE_API_URL + url,
    params: {json: true},
});

export const AuthorizedService = (url) => {
    const authorizedService = Service(url);
    authorizedService.interceptors.request.use(...authInterceptor);
    return authorizedService
};

export const authorizedReq = axios.create({
    params: {json: true},
});
authorizedReq.interceptors.request.use(...authInterceptor);


export const ApiService = (url) => AuthorizedService(BASE_API_URL);
