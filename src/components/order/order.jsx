import './style.css'
import { useState } from 'react'
import Button from '../buttons/button';

function Order({backimg, }){

    const [comments, setcomments] = useState(52);

    return(

        <div className="ctryprb">
            <img src={backimg} alt="" />
            <h1 className='offertxt'>Want<a href="#">Me to Purchase</a> Something For You That isn`t available in your country?</h1>
            <Button btntxt={"Place Order"} width={"218px"} height={"85px"} fontSize={"16px"} marginTop={"70px"}/>
        </div>

    );
}

export default Order