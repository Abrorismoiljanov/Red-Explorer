import './style.css'
function Travels({pic}){



    return(


        <div className="trav">
            <img src={pic} alt="" />
            <div className="txt">
            <h2>September 17, 2018 - Tips & Tricks</h2>
            <h1>Finding Love & home in Tbilisi, Georgia</h1>
            </div>
        </div>


    );

}
export default Travels