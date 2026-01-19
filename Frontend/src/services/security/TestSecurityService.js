export class TestSecurityService{
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    async Login(userLoginDto){
        const res = await fetch(`${this.baseUrl}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userLoginDto)
        });
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
