import but1 from '../../assets/button/Group97.png'
import locat from '../../assets/icon/coolicon.png'
import './style.css'
function Downbut(){

    return(
        <>
        <div className="scroll">
        <h1 className='text'>Scroll Down to Continue</h1>
        <img src={but1} alt="" className='btnimg'/>
        </div>
        <img src={locat} alt="" className='abs' />  
        </>

    );

}

export default Downbut