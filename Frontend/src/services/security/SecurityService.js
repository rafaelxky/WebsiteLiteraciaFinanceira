import { RequestBuilder } from "../web/RequestBuilder";

export class SecurityService{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

  async Login(userLoginDto){ 
        console.log(userLoginDto);

        const request = new RequestBuilder()
        .Body(userLoginDto)
        .JsonContent()
        .Post()
        .Url(`${this.baseUrl}/login`)
        .Build();

        const res = await fetch(request);

          if (!res.ok) {
            const text = await res.text();
            console.error(`[Login] HTTP ${res.status} - ${text}`);
            throw new Error("Loggin error");
        }

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