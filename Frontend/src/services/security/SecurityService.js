import { usersService } from "../../Dependencies";
import { WrongCredentialsError } from "../../errors/WrongCredentialsError";
import { RequestBuilder } from "../web/RequestBuilder";

export class SecurityService{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    // encript password
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
            console.error(`[Login] HTTP ${res.status}`);
            throw new WrongCredentialsError("Loggin error");
        }
        
         const data = await res.json(); 

        if (data?.token) {
            localStorage.setItem("token", data.token);
            let user = await usersService.GetUserByEmail(userLoginDto.email);
            localStorage.setItem("user", user);
            console.log("Successfully logged in!");
        } else {
            throw new Error("Did not receive jwt token!")
        }
        return data;
    }

    Logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
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

    IsUserWriter(){
        const user = localStorage.getItem("user");
        if(user == null){
            return false;
        }
        return user.role == "WRITE";
    }
}