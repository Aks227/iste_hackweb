import React from "react";
import './Fifth.css';

function App() {

  return (
    <div className='Fifthm ' id="mhs">
        <div className="Fifthmbox">
            <div className="collab">Collaborators.</div>
            <div className="down">
        <div className='mis-vis-eye-par animate__animated animate__fadeInDown' >
            <div className='child-abt-parent-wrap'>
                <div className='child-abt eye-div-wrap'>
                    <div className='dp'>
                    <img src={require("./mee.png")}id="picn"  alt='mission' />
                    </div>
                    <div className="info">Nimit Jain</div> 
                    <a className="gitlink" href="https://github.com/Nimitzzz">
                    <button class="btn" type="button">
                    <p className="gitpara"><i class="bi bi-github"></i>&nbsp;Github</p>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>
                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                    </button>
                    </a>         
                </div>
            </div>
            <div className='child-abt-parent-wrap'>
                <div className='child-abt diamond-div-wrap'>
                    <div className='dp'>
                    <img src={require("./arpitdp.png")} id="pic" alt='mission' />
                    </div>
                    <div className="info">Arpit Diwedi</div>
                    <a className="gitlink" href="https://github.com/cAPRIcaT3">
                    <button class="btn" type="button">
                    <p className="gitpara"><i class="bi bi-github"></i>&nbsp;Github</p>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>
                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                    </button>
                    </a>       
                </div>
            </div>
            <div className='child-abt-parent-wrap'>
                <div className='child-abt mission-div-wrap'>
                    <div className='dp'>
                        <img src={require("./akshaygit.png")} id="pic" alt='mission' />
                    </div>
                <div className="info">Akshay Singhvi</div>
                <a className="gitlink" href="https://github.com/Aks227">
                <button class="btn" type="button">
                <p className="gitpara"><i class="bi bi-github"></i>&nbsp;Github</p>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>
                <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                </button>
                </a>
                </div>
            </div>

            <div className='child-abt-parent-wrap'>
                <div className='child-abt mission-div-wrap'>
                    <div className='dp'>
                        <img src={require("./parima.jpg")} id="pic" alt='mission' />
                    </div>
                <div className="info">Parima Shah</div>
                <a className="gitlink" href="https://github.com/Parima1304">
                <button class="btn" type="button">
                <p className="gitpara"><i class="bi bi-github"></i>&nbsp;Github</p>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>
                <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                </button>
                </a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>

  );
}

export default App;
