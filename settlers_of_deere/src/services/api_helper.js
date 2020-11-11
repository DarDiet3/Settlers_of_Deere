import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001"
})

// ===== AUTH ======

export const signupUser = async (signupData) => {
    const resp = await api.post("auth/singUp", signupData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const loginUser = async (loginData) => {
    const resp = await api.post("auth/login", loginData);
    localStorage.setItem("authToken", resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const verifyUser = async () => {
    const token = localStorage.getItem("authToken");

    if(toke) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get("auth/verify");
        return resp.data
    }
    return false;
}