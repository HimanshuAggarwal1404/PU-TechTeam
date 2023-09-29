import styles from "../HomePage/Home.module.scss"
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
    // if (localStorage.getItem('users')){
    //     isLoggedIn=false;
    // }
    // else{
    //     isLoggedIn=true;
    // }

    function handleCallbackResponse(response) {
        var userObject = jwtDecode(response.credential);
        // console.log(userObject);
        context.setUser(userObject);
        localStorage.setItem('users', JSON.stringify(userObject));
        // console.log(JSON.parse(localStorage.getItem('users')));

        
        // console.log(localStorage.getItem('users'));
        // console.log(context.isLoggedIn);
        // document.getElementById("signInDiv").hidden = true;
    }
    function handleSignOut() {
        context.setUser({});
        localStorage.removeItem('users');
        console.log(localStorage.getItem('users'));

        // console.log(localStorage.getItem('users'));
        // console.log(context.isLoggedIn);
        // document.getElementById("signInDiv").hidden = false;

    }
    useEffect(()=>{
        document.title= 'Placement Unit, BITS Pilani';
    },[]);

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
            
            <div className={styles.allwrap}>
                <Header />
                <div className={styles.Homewrapper}>
                    <Link className={styles.link} to="/ExplorePath"><Homepagebox title="Explore Paths" logo="https://career-development-bits-pilani.notion.site/icons/search_blue.svg?mode=dark" /></Link>
                    <Link className={styles.link} to="/Upskill"><Homepagebox title="Up-Skill" logo="https://career-development-bits-pilani.notion.site/icons/hammer_blue.svg?mode=dark" /></Link>
                    <Link className={styles.link} to="/CrackInterviews"><Homepagebox logo="https://career-development-bits-pilani.notion.site/icons/friends_blue.svg?mode=dark" title="Crack Interviews" /></Link>
                </div>
                <div className={styles.signout}>
                <button className={styles.signOutBtn} onClick={(e) => handleSignOut(e)}>Sign Out</button>
                </div>

                </div>
            }
        
</>

    );
}
export default Home