import axios from "axios";

const API_URL = "http://localhost:8000/users/";

class AuthService {
    login(username: string, password: string) {
        return axios
            .post(API_URL + "login", { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("authUser", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("authUser");
    }

    register(username: string, email: string, password: string) {
        return axios.post(API_URL + "register", {
            username,
            email,
            password,
        });
    }
}

export default new AuthService();