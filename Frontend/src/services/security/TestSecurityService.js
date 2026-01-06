export class TestSecurityService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.listeners = new Set();
    }
    Login(userLoginDto) {
        localStorage.setItem("token", "token-" + userLoginDto.email);
        this.notifyListeners();
    }
    Logout() {
        localStorage.removeItem("token")
        this.notifyListeners();
    }
    GetToken() {
        return localStorage.GetToken("token");
    }
    Encript(password) {
        return "encripted:" + password
    }
    IsLoggedIn() {
        let token = localStorage.getItem("token")
        return token != null
    }
    onLoginChange(callback) {
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
    }
    notifyListeners() {
        this.listeners.forEach((callback) => callback());
    }
} 