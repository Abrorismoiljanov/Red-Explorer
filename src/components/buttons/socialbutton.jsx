import './style.css'

function Socialbtn({pic, stat, follow, backgroundColor, height, width}){
    return(
        
        <div className="socbtn" style={{backgroundColor}}>
            <img src={pic} alt="" style={{height, width}}/>
            <div className="stats">
                <h2>{stat}</h2>
                <h2>{follow}</h2>
            </div>
        </div>

    );

};

export default Socialbtn