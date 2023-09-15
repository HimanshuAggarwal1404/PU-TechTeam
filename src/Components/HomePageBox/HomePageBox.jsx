import "./HomePageBox.scss"
const Homepagebox = (props) => {
    return (
        <div className="Homepageboxwrapper">
            <div className="Homepagebox">
                <div className="logo"><img src={props.logo}></img></div>
                <div className="title">{props.title}</div>

            </div>
        </div>
    )
}
export default Homepagebox