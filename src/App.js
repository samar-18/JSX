
import './App.css';
import React from "react";
import imageInSrc from './imageInSrc.png';


function App() {
  return ( 
  <>
  <div className="principal" >
    <h1 class="title-red">Samar Ben Zeineb</h1>

  
    <img src="/imageInPublic.png"  alt="myprofile" className="myprofile" />

    <img className="my-profile" src={imageInSrc} />

    <video className="VI" src="/react.mp4" />
    
    
</div>
    </>

  )
}

export default App;
