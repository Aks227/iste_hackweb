import React from "react";
import './First.css';
import Typewriter from 'typewriter-effect';
import AnimationPage from './AnimationPage.jsx';

function App() {

  return (
<div className="firstm">
<div className="heading">
<div className="ref">
    <div className="refw animate__animated animate__fadeIn">
    Refine.<br></br>Optimize.Thrive.
    </div>
    <div className="refw-mobile animate__animated animate__fadeIn">
    Refine.<br></br>Optimize.<br></br>Thrive.
    </div>
    <div className="biline">
    The AI tool you need 
        <Typewriter
    onInit={(typewriter)=>{
        typewriter.pauseFor(0).typeString("to Optimize your code directly from your git repository!").start();
    }}/>
    </div>
</div>
<div className="floating" id="gif"><AnimationPage></AnimationPage></div>
</div>

</div>

  );
}

export default App;
