import locat from '../../assets/icon/location.png'
import com from '../../assets/icon/coments.png'
import './style.css'
import { useState } from 'react'

function Smalltrvcard({ entimg, innertext}){

    var [comments, setcomments] = useState(52);
    setcomments

    return(

        <div className="smtrcard">
            <img src={entimg} alt="" />
           <div className="smtext1">
           <p className='smdatee'>July, 15, 2021 - Tips and Tricks</p>
            <h1>{innertext}</h1>
           </div>
           <div className="smsectn">
            <div className="smloc">
                <img src={locat} alt="" />
                <p>Georgia</p>
            </div>
            <div className="smcomnts">
                <img src={com} alt="" />
                <p>comment({comments})</p>
            </div>
           </div>
        </div>

    );
}

export default Smalltrvcard