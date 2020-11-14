import axios from "axios";

const api = axios.create({
    baseURL:  "https://settlers-of-deere.herokuapp.com",
    // baseURL: "http://localhost:3001"
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
    const resp = await api.post("/auth/login", loginData);
    localStorage.setItem("authToken", resp.data.token);
    localStorage.setItem("currentUserId", JSON.stringify(resp.data.user));
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
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

//====== USER DATA =======

export const userData = async () => {
    const resp = await api.get("/user/profile");
    return resp.data
}

export const userProfileData = async (user) => {
    const resp = await api.get(`/profile/${user.id}`);
    return resp.data
}

export const updateUser = async (user, userContent) => {
    const resp = await api.put(`/user/profile/${user.id}`, userContent)
    return resp.data
}

export const updateProfile = async (user, profileContent) => {
    const resp = await api.put(`/profile/${user.id}`, profileContent);
    return resp.data
}

export const deleteUser = async (user) => {
    const resp = await api.delete(`/profile/${user.id}`)
    return resp.data
}