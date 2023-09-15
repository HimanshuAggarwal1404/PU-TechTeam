import "../HomePage/Home.scss"
import Homepagebox from "../../Components/HomePageBox/HomePageBox"
const Home =()=>{
return(
    <div className="Homewrapper">
        <Homepagebox title="Explore Paths" logo="https://career-development-bits-pilani.notion.site/icons/search_blue.svg?mode=dark"/>
        <Homepagebox title="Up-Skill" logo="https://career-development-bits-pilani.notion.site/icons/hammer_blue.svg?mode=dark"/>
        <Homepagebox logo="https://career-development-bits-pilani.notion.site/icons/friends_blue.svg?mode=dark" title="Crack Interviews"/>

    </div>
)
}
export default Home