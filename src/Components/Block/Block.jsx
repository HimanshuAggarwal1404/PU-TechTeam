import "../../Components/Block/Block.scss"
const Block = (props) => {

    return (
        <div className="Blockwrapper">
            <div className="Block">
                <div className="BlockImg">
                    <img src={props.url} alt="" />
                </div>
                <div className="BlockText">
                   <center> {props.text}</center>
                </div>
            </div>
        </div>
    )
}
export default Block