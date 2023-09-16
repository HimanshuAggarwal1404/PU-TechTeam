import "../HomePage/Home.scss"
import { Link } from "react-router-dom"
import Homepagebox from "../../Components/HomePageBox/HomePageBox"
const Home =()=>{
return(
    <div className="Homewrapper">
        <Link className="link" to="/ExplorePath"><Homepagebox title="Explore Paths" logo="https://career-development-bits-pilani.notion.site/icons/search_blue.svg?mode=dark"/></Link>
        <Link className="link" to="/Upskill"><Homepagebox title="Up-Skill" logo="https://career-development-bits-pilani.notion.site/icons/hammer_blue.svg?mode=dark"/></Link>
        <Link className="link" to="/CrackInterviews"><Homepagebox logo="https://career-development-bits-pilani.notion.site/icons/friends_blue.svg?mode=dark" title="Crack Interviews"/></Link>

    </div>
)
}
export default Home