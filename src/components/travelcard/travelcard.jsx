import locat from '../../assets/icon/location.png'
import com from '../../assets/icon/coments.png'
import './style.css'
import { useState } from 'react'

function Travelcard({trvcardimg, h1txt}){

    const [comments] = useState(52);

    return(

        <div className="trcard">
            <img src={trvcardimg} alt="" />
           <div className="text1">
           <p className='datee'>July, 15, 2021 - Tips and Tricks</p>
            <h1>{h1txt}</h1>
            <p className='txtt'>Lorem ipsum dolor sit amet consectetur adipi
            sicing elit. Natus sit magnam fugiat consectetur, cupiditate officiis rerum deserunt praesentium qui dicta.</p>
           </div>
           <div className="sectn">
            <div className="loc">
                <img src={locat} alt="" />
                <p>Penang, Malaysia</p>
            </div>
            <div className="comnts">
                <img src={com} alt="" />
                <p>comment({comments})</p>
            </div>
           </div>
        </div>

    );
    
}

export default Travelcard