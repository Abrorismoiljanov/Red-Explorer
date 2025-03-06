import logo from '../../assets/icon/Logo.png'
import './navbar.css'

function Mainnav(){


    return(
        <div className="navbar">
            <img src={logo} alt="Logo" />

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>

        </div>
    );
}
export default Mainnav