export class TestSecurityService{
    token = null
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    Login(token){
        this.token = token
    }
    Logout(){
        token = null
    }
    GetToken(){
        return token
    }
} 