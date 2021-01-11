class Auth {
    constructor() {
        this.user_token = localStorage.getItem("auth");
        this.user_data = localStorage.getItem("userData");
    }

    getToken() {
        return this.user_token;
    }

    getUserId() {
        return this.user_data.id;
    }

    getUserDetails() {
        return this.user_data;
    }

    setUserToken(new_token) {
        this.user_token = new_token;
        localStorage.setItem("auth", new_token);
    }

    setUserDetails(user) {
        this.user_data = user;
        localStorage.setItem("userData", JSON.stringify(user));
    }

    logout() {
        localStorage.removeItem("auth");
        localStorage.removeItem("userData");
    }
}

export default new Auth();
