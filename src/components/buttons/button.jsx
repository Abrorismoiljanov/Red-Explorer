import './style.css'

function Button({btntxt, width, height, fontSize , marginTop}){
    return(
        
        <button className="button1" style={{width, height, fontSize, marginTop}}>{btntxt}</button>

    );

};

export default Button