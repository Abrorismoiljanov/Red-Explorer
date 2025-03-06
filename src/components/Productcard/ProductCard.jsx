import './style.css'
function Productcard({pic, value, name, other}){



    return(


        <div className="prod">
            <img src={pic} alt="" />
            <div className="prodtxt">
            <h2>{name}</h2>
            <h2>{other} </h2>
            <h1>${value}</h1>
            </div>
        </div>


    );

}
export default Productcard