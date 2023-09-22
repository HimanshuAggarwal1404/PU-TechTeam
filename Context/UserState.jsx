import { React, useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const [user, updateUser] = useState({});

    const setUser = (newUser)=>{
        updateUser(newUser);
    }
    return(
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
    
}
export default UserState;