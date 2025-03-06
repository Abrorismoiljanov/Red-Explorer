import './style.css' 

function Ggcard({backgrnd}){


    return(
        <div className="ggcard">
            
        <img src={backgrnd} alt="" />
        <h2>September 17, 2018 - Tips & Tricks</h2>
        <h1>Finding Love & home in Tbilisi, Georgia</h1>
        <div className="btns">
        <button>&lt;</button>
        <button>&gt;</button>
        </div>
        </div>
    );
};

export default Ggcard