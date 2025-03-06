import './style.css'
import Button from '../buttons/button';

function AboutCard({faceimg}){


    return(
        <div className="aboutcard">
        <h1>About me</h1>
            <img src={faceimg} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel massa donec s
                it. Mi ut risus sem malesuada ornare. Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit sem
                per lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque sed d.</p>
            <Button btntxt={"Read More"} width={"182px"} height={"71px"} marginTop={"-10px"}/>
        </div>


    );


}
export default AboutCard