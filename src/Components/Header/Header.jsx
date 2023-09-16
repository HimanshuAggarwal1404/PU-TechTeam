import "./Header.scss"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="header">
                <div className="title">
                    <div className="title-img"><img src="https://career-development-bits-pilani.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3ea98837-d2cf-499e-9c36-fa2fad469497%2FBITS_Pilani-Logo.svg?table=block&id=9cf70dec-239b-457c-b61a-7e3e3d21e285&spaceId=add8950f-c935-46b2-861e-df4f67053f75&userId=&cache=v2" alt="" /></div> <div className="title-name">Placement Unit</div>
                </div>
                <div className="navbar">
                    <Link to="/" className="link"><div>Home</div></Link>
                    <div>Page1</div>
                    <div>Page2</div>
                    <div>Page3</div>
                    <div>Page4</div>
                    <div>Page5</div>
                    </div>
            </div>
        </div>
    )
}
export default Header;