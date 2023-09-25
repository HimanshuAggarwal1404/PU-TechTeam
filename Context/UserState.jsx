import { React, useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const [user, updateUser] = useState({});

    const setUser = (newUser)=>{
        updateUser(newUser);
    }
    let isLoggedIn=false;
    if (sessionStorage.getItem('users')){
        isLoggedIn=false;
    }
    else{
        isLoggedIn=true;
    }

    return(
        <UserContext.Provider value={{user, setUser, isLoggedIn}}>
            {props.children}
        </UserContext.Provider>
    )
    
}
export default UserState;