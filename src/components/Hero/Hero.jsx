const counter = 0;
const city = 0;
import './style.css'

function Hero(){

    return(
        
        <div className="hero">
          <div className="ctg"><h3>THE COUNTER:</h3><h3 className="count">{counter}</h3><h3>Countries</h3><h3 className="cities">{city}</h3><h3>Cities</h3></div> 
           <h1>Leave your mark on all over the world</h1>
            
        </div>

    );
}

export default Hero