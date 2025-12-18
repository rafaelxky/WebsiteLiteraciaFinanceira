export class TestSecurityService{
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    Login(userLoginDto){
        localStorage.setItem("token","token-"+userLoginDto.email);
    }
    Logout(){
        localStorage.removeItem("token")
    }
    GetToken(){
        return localStorage.GetToken("token");
    }
    Encript(password){
        return "encripted:"+password
    }
    IsLoggedIn(){
        let token = localStorage.getItem("token")
        return token != null
    }
} 