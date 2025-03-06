import Button from "../buttons/button"
import img from "../../assets/pic/Group 72.png"
import './style.css'
function Instagram(){

    return(

        <div className="inst">
            <div className="imageslide">
            <img src={img} alt="" />
            <img src={img} alt="" className="scndimg" />
            </div>
            <Button btntxt={"Follow @ Instagram"} width={"201px"} height={"52px"} marginTop={"120px"} fontSize={"17px"}/>
        </div>

    )

}
export default Instagram