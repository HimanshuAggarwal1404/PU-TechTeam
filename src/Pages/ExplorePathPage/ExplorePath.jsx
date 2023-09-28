import styles from '../../Pages/ExplorePathPage/ExplorePath.module.scss'
import Block from "../../Components/Block/Block"
import jwtDecode from "jwt-decode"
import { useEffect } from "react"
import { React, useContext } from "react"
import UserContext from "../../../Context/UserContext"
import img from "../../assets/Images/clock-tower.png"
const ExplorePath = () => {
    const context = useContext(UserContext);

    function handleCallbackResponse(response) {
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        context.setUser(userObject);
        localStorage.setItem('users', JSON.stringify(userObject));
        // console.log(localStorage.getItem('users'));
        // console.log(context.isLoggedIn);
        // document.getElementById("signInDiv").hidden = true;
    }


    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "1028850909564-e2hggnfb2m3n80vbtitdnf54d2j09gsi.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"), { theme: "outline", size: "large" }
        );
        { context.isLoggedIn && google.accounts.id.prompt() };

    })

    return (
        <>
            {context.isLoggedIn &&
            <div className="signin" id="signin">
            <div id="signInDiv"></div></div>}
            
            {!context.isLoggedIn && <div className={styles.ExplorePath}>
                <div className={styles.ExplorePathBlackBox}>
                    <div className={styles.ExplorePathBlackBoxDesc}>
          
                            <div className={styles.ExplorePathBlackBoxDescHeading1}>Learning</div>
                            <div className={styles.ExplorePathBlackBoxDescHeading2}>Tracks</div>
                        
                        <div className={styles.ExplorePathBlackBoxDescContent}>The career tracks are meant especially from the point of view to help you start your preparation journey in the field of your choice. We have compiled an ordered playlist of resources for you to follow regarding each of these career fields.</div>
                    </div>
                    <div className={styles.ExplorePathBlackBoxImg}><img src={img} alt="clockTower"/></div>
                </div>
                <div className={styles.threeColorRectangles}>
                    <div className={styles.redRectangle}></div>
                    <div className={styles.blueRectangle}></div>
                    <div className={styles.yellowRectangle}></div>
                </div>

                <div className={styles.ExplorePathWrapper}>
                    <Block url="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200" text="Competitive Coding" />
                    <Block url="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200" text="Web Development" />
                    <Block url="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200" text="ML/AI" />
                    <Block url="https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200" text="Excel" />
                    <Block url="https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200" text="SQL" />
                    <Block url="https://images.unsplash.com/photo-1511883040705-6011fad9edfc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200" text="Quant" />
                    <Block url="https://images.unsplash.com/photo-1586527155314-1d25428324ff?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200" text="Guesstimates" />
                    <Block url="https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200" text="Consulting" />
                    <Block url="https://career-development-bits-pilani.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F16efc1c5-af33-4cf7-8383-daffa3a5fd16%2FProduct-Management-Concepts-1.png?id=2af2f76b-6cd6-4ba6-8b76-780a6575ce8f&table=block&spaceId=add8950f-c935-46b2-861e-df4f67053f75&width=640&userId=&cache=v2" text="Product" />
                    <Block url="https://career-development-bits-pilani.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff4adaca8-2386-44ee-9ac4-04c6cfc626c7%2Fsequoia-capital-ep.jpeg?id=6972bd79-c820-4bde-b115-2667b4be00d6&table=block&spaceId=add8950f-c935-46b2-861e-df4f67053f75&width=640&userId=&cache=v2" text="Venture Capital" />
                    <Block url="https://career-development-bits-pilani.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc77e0549-9cf0-4183-bdcf-67fc5f6342a0%2Ffeature-750x300.jpg?id=bf7f7ad9-f3cb-4e94-b013-a153818405fa&table=block&spaceId=add8950f-c935-46b2-861e-df4f67053f75&width=640&userId=&cache=v2" text="Investment Banking" />
                    <Block url="https://career-development-bits-pilani.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbe346eb9-2abf-4861-94be-70d27050dade%2Fwhat-is-data-analytics.webp?id=b510a4e8-c4e8-4135-badc-e56e37669001&table=block&spaceId=add8950f-c935-46b2-861e-df4f67053f75&width=640&userId=&cache=v2" text="Risk Ananlysis" />
                    <Block url="https://career-development-bits-pilani.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc21ecae8-b1af-4b83-90dc-525af5d267d2%2F2020-01-trends-technology-flow_tcm7-267085_w1024_n.png?id=3228979a-e58f-459f-a8f8-a3e8bb376dfe&table=block&spaceId=add8950f-c935-46b2-861e-df4f67053f75&width=640&userId=&cache=v2" text="Design" />
                    <Block url="https://career-development-bits-pilani.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F836194d0-2440-46ea-8a3c-ef06f739c37c%2Fstartup-creative-pitch-deck-powerpoint-template_151167-2-original.webp?id=9a914477-d850-4129-9e6d-18764e8fe395&table=block&spaceId=add8950f-c935-46b2-861e-df4f67053f75&width=640&userId=&cache=v2" text="Decks/Presentations" />
                </div></div>}
        </>
    )
}
export default ExplorePath