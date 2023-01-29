import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

export const register = (name: string, surname: string, email: string, password: string) => {
    return axios.post(API_URL + "registration", {
        name,
        surname,
        email,
        password,
    });
};

export const login = (username: string, password: string) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            //console.log("DATA_RESPONSE", response.data)
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
                localStorage.setItem("username", JSON.stringify(response.data.username));
            }

            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
};
