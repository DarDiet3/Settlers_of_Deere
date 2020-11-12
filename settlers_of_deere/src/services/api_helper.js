import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001"
})

// ===== AUTH ======

export const signupUser = async (signupData) => {
    const resp = await api.post("/auth/signup", signupData);
    console.log(resp.data)
    localStorage.setItem('authToken', resp.data.token);
    localStorage.setItem("currentUserId", JSON.stringify(resp.data.user));
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const loginUser = async (loginData) => {
    console.log(1)
    const resp = await api.post("/auth/login", loginData);
    console.log(2)
    localStorage.setItem("authToken", resp.data.token);
    console.log(3)
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    console.log(4)
    return resp.data.user;
}

export const verifyUser = async () => {
    const token = localStorage.getItem("authToken");

    if(token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get("/auth/verify");
        return resp.data
    }
    return false;
}
