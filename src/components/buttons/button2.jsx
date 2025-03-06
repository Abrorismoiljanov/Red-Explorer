import './style.css'

function Button2({btntxt, width, height, fontSize , marginTop}){
    return(
        
        <button className="button2" style={{width, height, fontSize, marginTop}}>{btntxt}</button>

    );

};

export default Button2