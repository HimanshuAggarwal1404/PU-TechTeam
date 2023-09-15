import "./Header.scss"
const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="header">
                <div className="title">
                    <div className="title-img"><img src="src/assets/Images/logo.png" alt="" /></div> <div className="title-name">Placement Unit</div>
                </div>
                <div className="navbar">
                    <div>Home</div>
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