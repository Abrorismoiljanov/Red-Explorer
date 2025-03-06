import './style.css'
import logoa from '../../assets/icon/Logo.png'
import hustle from '../../assets/icon/hustle.png'
import face from '../../assets/icon/Vector.png'
import twitter from '../../assets/icon/Group.png'
import google from '../../assets/icon/google+.png'
import IN from '../../assets/icon/idk.png'
import { data } from 'react-router-dom'
function Endhero(){

    return(
        <div className="enddiv">
            <nav>
            <img src={logoa} alt="" />
            <h2>Body</h2>
            <h2 className='choosen'>Travel</h2>
            <h2>Account</h2>
            </nav>
            <div className="cont">
                <div className="inf">
                    <p>
                    We are location independent bloggers, digital influencers, small 
                    group tour organizers and world travelers with a serious passion for the sun, the sea and adventure.
                    </p>
                    <p>Eight years and 60-something countries later and we are still on the road</p>
                </div>
                <div className="bdy">
                    <p>Add: 221B John hope 
                    Street, Lekki, Lagos,
                    Nigeria.</p>
                    <p>
                    T: +234 706 507 8544
                    </p>
                    <p>
                    E: info@redexplorers.com
                    </p>
                    <p>
                    W: www. redexplorers.com
                    </p>
                </div>
                <div className="My">
                <p>My List</p>
                <p>My Requests</p>
                <p>My Info</p>
                <p>Contact</p>
                </div>
                <div className="acnt">
                    <p>Travel</p>
                    <p>Why Travel</p>
                    <p>Become a Traveler</p>
                    <p>How Its Works</p>
                    <p>Traveling FAQs</p>
                </div>
            </div>
            <div className="ending">
                <img src={hustle} alt="" className='hustle'/>
                <div className="socialmd">
                    <img src={face} alt="" className='facebook'/>
                    <img src={twitter} alt="" className='imag' />
                    <img src={google} alt="" className='imag' />
                    <img src={IN} alt="" className='imag' />
                </div>
                <p>&copy; {new Date().getFullYear()} Red Explorers. All rights reserved </p>
                <p>|</p><p>Terms</p>
                <p>|</p><p>Privacy</p>
               <p>|</p> <p>Site map</p>
            </div>
        </div>
    )

}
export default Endhero