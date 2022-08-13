import User from "../Users/User"

export const LOGIN="LOGIN";

export const login= (email,password)=>{
    return{
        type:LOGIN,
        users:new User(email,password)
        
    }
}