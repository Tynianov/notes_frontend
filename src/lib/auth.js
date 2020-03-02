import axios from "axios";
const TOKEN = 'token';

export const getToken = () => localStorage.getItem(TOKEN);
const setToken = (token) => localStorage.setItem(TOKEN, token);
export const removeToken = () => localStorage.removeItem(TOKEN);

export const BASE_API_URL = process.env.VUE_APP_CORE_SERVER_ORIGIN + '/api/v1';
export const BASE_AUTH_URL = process.env.VUE_APP_CORE_SERVER_ORIGIN + '/api/auth';

export const logIn = (username, password) => {
    return axios({
        baseURL: BASE_API_URL + '/register',
        method: 'post',
        params: {
            format: 'json'
        },
        data: {username, password},
    })
        .then(res => {
            setToken(res.data.token);
            return res
        })
};

export const isLoggedIn = () => {
    const access_token = getToken();
    return !!access_token
};

export const logOut = () => {
    localStorage.removeItem(TOKEN);
};