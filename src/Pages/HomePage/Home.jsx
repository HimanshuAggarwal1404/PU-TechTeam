import "../HomePage/Home.scss"
import Header from "../../Components/Header/Header"
import { Link } from "react-router-dom"
import jwtDecode from "jwt-decode"
import { useEffect } from "react"
import Homepagebox from "../../Components/HomePageBox/HomePageBox"
import { React, useContext } from "react"
import UserContext from "../../../Context/UserContext"
const Home = () => {
    const context= useContext(UserContext);
    // let isLoggedIn = false;
    // if (sessionStorage.getItem('users')){
    //     isLoggedIn=false;
    // }
    // else{
    //     isLoggedIn=true;
    // }

    function handleCallbackResponse(response) {
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        context.setUser(userObject);
        sessionStorage.setItem('users', JSON.stringify(userObject));
        
        // console.log(sessionStorage.getItem('users'));
        // console.log(context.isLoggedIn);
        // document.getElementById("signInDiv").hidden = true;
    }
    function handleSignOut() {
        context.setUser({});
        sessionStorage.removeItem('users');
        // console.log(sessionStorage.getItem('users'));
        // console.log(context.isLoggedIn);
        // document.getElementById("signInDiv").hidden = false;

    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "1028850909564-e2hggnfb2m3n80vbtitdnf54d2j09gsi.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"), { theme: "outline", size: "large" }
        );
        {context.isLoggedIn && google.accounts.id.prompt()};
        
    })


    return (
        <>
        
            {context.isLoggedIn &&
            <div className="signin" id="signin">
            <div id="signInDiv"></div></div>}

            {!context.isLoggedIn &&
            
            <div className="allwrap">
                <Header />
                <div className="Homewrapper">
                    <Link className="link" to="/ExplorePath"><Homepagebox title="Explore Paths" logo="https://career-development-bits-pilani.notion.site/icons/search_blue.svg?mode=dark" /></Link>
                    <Link className="link" to="/Upskill"><Homepagebox title="Up-Skill" logo="https://career-development-bits-pilani.notion.site/icons/hammer_blue.svg?mode=dark" /></Link>
                    <Link className="link" to="/CrackInterviews"><Homepagebox logo="https://career-development-bits-pilani.notion.site/icons/friends_blue.svg?mode=dark" title="Crack Interviews" /></Link>
                </div>
                <div className="signout">
                <button className="signOutBtn" onClick={(e) => handleSignOut(e)}>Sign Out</button>
                </div>

                </div>
            }
        
</>

    );
}
export default Home