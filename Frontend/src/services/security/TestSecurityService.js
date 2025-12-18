export class TestSecurityService{
    token = null
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    Login(userLoginDto){
        this.token = "token-" + userLoginDto.email
    }
    Logout(){
        token = null
    }
    GetToken(){
        return token
    }
    Encript(password){
        return "encripted:"+password
    }
} 