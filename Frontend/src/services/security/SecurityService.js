import { RequestBuilder } from "../web/RequestBuilder";

export class SecurityService{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

  async Login(userLoginDto){ 
        const request = new RequestBuilder()
        .Body(userLoginDto)
        .JsonContent()
        .Post()
        .Url(`${this.baseUrl}/login`)
        .Build();

        const res = await fetch(request);

        if (!res.ok) throw new Error("Erro no login");
        const data = await res.json();
        if (data?.token) localStorage.setItem("token", data.token);
        return data;
    }

    Logout(){
        localStorage.removeItem("token");
    }

    GetToken(){
        return localStorage.getItem("token");
    }

    Encript(password){
        const encoder = new TextEncoder();
        return btoa(String.fromCharCode(...encoder.encode(password)));
    }

    IsLoggedIn(){
        const token = localStorage.getItem("token");
        return token != null;
    }
}