import User from "../Users/User"

export const LOGIN='LOGIN'

export const login=(email,password) => { 
    const token=email+password;
    return{
        type:'LOGIN',
        payload:token,
    }
}