
import Button from "../buttons/button"
import './style.css'

function Emailq({follownum}){

    return(
        <div className="email">
            <h1 className="outertxt"><div className="row">Join <h1 className="innum">{follownum}</h1> Monthly Readers.</div> Subscribe Today!</h1>
            <input type="email" placeholder="Email Address" />
            <Button width={"201px"} height={"78px"} btntxt={"Subscribe"} fontSize={"20px"}/>
        </div>
    )

}
export default Emailq