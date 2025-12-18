import { UserPublicDto } from "../../models/users/UserPublicDto";

export class TestUserService{
    testUser = new UserPublicDto("username", 1, "Reader");
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    NewUser(createdUser){
        return
    }
    UpdateUser(createdUser){
        return
    }
    RemoveUser(){
        return   
    }
    GetUserById(id){
        return testUser
    }
}