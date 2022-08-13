import { LOGIN } from "../actions/authActions";
import User from "../Users/User"

const initialState = {
    users: [new User("admin","admin")],
    loginEmail: "",
}

export default (state = initialState, action) => {
    const{type,User}=action;
    switch (type) {
        case LOGIN:
            const loginedUser=state.users.find(item=>item.email===User.email&& item.password===User.password)
            return { 
                ...state, 
                loginedEmail:loginedUser? loginedUser.email :"Fales",       
            }

        default:
            return state
    }
}
