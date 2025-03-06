// components
import './App.css'
import "@fontsource/lato"; 
import "@fontsource/lato/900.css";
import Hero from './components/Hero/Hero';
import Mainnav from './components/navbar/navbar';
import Button from './components/buttons/button';
import Button2 from './components/buttons/button2';
import Downbut from './components/slidedown/downbut';
import Travelcard from './components/travelcard/travelcard';
import Smalltrvcard from './components/smalltrvcard/smalltrvcard';
import AboutCard from './components/aboutcard/aboutcard';
import Order from './components/order/order';
import ListCard from './components/list/list';
import Ggcard from './components/ggcard/cardgg';
import Travels from './components/travels/travel';
import Aboutbag from './components/aboutbag/aboutbag';
import Productcard from './components/Productcard/ProductCard';
import Socialbtn from './components/buttons/socialbutton';
import Instagram from './components/instagram_follow/instfllw';
import Emailq from './components/email/emailgetter';
import Endhero from './components/end/end';

// images
import pic from './assets/pic/image4.png'
import pic1 from './assets/pic/image5.png'
import pic2 from './assets/pic/Rectangle180.png'
import pic3 from './assets/pic/image 17.png'
import pic4 from './assets/pic/image 18.png'
import pic5 from './assets/pic/image 19.png'
import pic6 from './assets/pic/image 20.png'
import pic7 from './assets/pic/image 21.png'
import pic8 from './assets/pic/image 22.png'
import pic9 from './assets/pic/Rectangle 33.png'
import pic10 from './assets/pic/Rectangle 390.png'
import pic11 from './assets/pic/image 8.png'
import pic12 from './assets/pic/image 13.png'
import pic13 from './assets/pic/image 14.png'
import pic14 from './assets/pic/image 15.png'
import pic15 from './assets/icon/Vector.png'
import pic16 from './assets/icon/Group.png'
import pic17 from './assets/icon/you tube.png'
import pic18 from './assets/icon/instagram.png'
import pic19 from './assets/pic/image 7.png'


function App() {

  return (
    <>
    {/* entarance hero */}
    <div className="hero2">
     <Mainnav />
    <Hero/>
    <Button btntxt={"Read More"} width={"218px"} height={"85px"} fontSize={"25px"} marginTop={"70px"} />
  <Downbut/>
    </div>


    {/* 2nd Hero */}
    <div className="hero3">

    {/* left side of the 2nd hero */}
    <div className="box1">
    <AboutCard faceimg={pic9}/>
    <ListCard/>
    <Button2 btntxt={"Recent Post"} width={"445px"} height={"107px"}/>
    <Ggcard backgrnd={pic10} />
    <Button2 btntxt={"Recent Post"} width={"445px"} height={"107px"}/>
    <Travels pic={pic11}/>
    <Travels pic={pic19}/>
    <Travels pic={pic19}/>
    <Aboutbag/>
    <Button2 btntxt={"Products that I have"} width={"445px"} height={"107px"} fontSize={"30px"} marginTop={"60px"}/>
    <Productcard pic={pic12} value={"514"} name={"Apple MacBook Air "} other={" MJV2ELL/A 13-inch Laptop "}/>
    <Productcard pic={pic13} value={"267"} name={"Iphone Xs case,"} other={" Iphone X case, SUPCASE"}/>
    <Productcard pic={pic14} value={"378"} name={"Master Sport band for Apple"} other={" wrist watch"}/>
    <Button2 btntxt={"Get In Touch"} width={"445px"} height={"107px"} />
    <div className="social">
    <div className="fstrow">
    <Socialbtn pic={pic15} stat={"65.5K"} follow={"Likes"} backgroundColor={"#4056AC"} width={"16px"} height={"32px"}/>
    <Socialbtn pic={pic16} stat={"65.5K"} follow={"tweets"} backgroundColor={"#60B7FE"} width={"30px"} height={"24px"}/>
    </div>
    <div className="sndrow">
    <Socialbtn pic={pic17} stat={"65.5K"} follow={"Likes"} backgroundColor={"#FE2C3C"} width={"41px"} height={"31px"}/>
    <Socialbtn pic={pic18} stat={"65.5K"} follow={"followers"} backgroundColor={"#E14D93"} width={"30px"} height={"30px"}/>
    </div>
    </div>
    </div>

    {/* right side of the 2nd hero */}
    <div className="box2">
    <Travelcard trvcardimg={pic2} h1txt={"A traveler`s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore"}/>
    <div className="box4">
      <Smalltrvcard entimg={pic} innertext={"Have you read the beach by alex?"}/>
      <Smalltrvcard entimg={pic1} innertext={"The writer actually live in Philippines"}/>
    </div>
    <Travelcard trvcardimg={pic3} h1txt={"Finding Love & home in Tbilisi, Georgia"}/>
    <Order backimg={pic4} />
    <div className="box4">
      <Smalltrvcard entimg={pic5} innertext={"Get away from the maddening Crowds"}/>
      <Smalltrvcard entimg={pic6} innertext={"Matsumoto Castle is considered one of"}/>
    </div>
    <div className="box4">
      <Smalltrvcard entimg={pic7} innertext={"Many buildings especially in Japan"}/>
      <Smalltrvcard entimg={pic8} innertext={"There are roughly 1200 semiwild dear"}/>
    </div>
    <Travelcard trvcardimg={pic3} h1txt={"Finding Love & home in Tbilisi, Georgia"}/>
    <div className="box4">
      <Smalltrvcard entimg={pic} innertext={"Have you read The Beach by Alex?"}/>
      <Smalltrvcard entimg={pic1} innertext={"The writer actually live in Philippines"}/>
    </div>
    </div>

    </div>
    <div className="hero4">
      <Instagram/>
      <Emailq follownum={98641}/>
      <Endhero/>
    </div>
    </>
  );
}

export default App
