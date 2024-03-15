import React from "react";
import './Navbar.css';


function App() {

  return (
<div className="topmost">
<nav className="navbar navbar-expand-lg bg-body-tertiary nav-extra-div">
  <div className="container-fluid animate__animated animate__slideInDown">
    <a className="navbar-brand" href="/#t"><img src={require("./looogo-long.png")} id="tl" alt="Logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="buts;.">
      <span className="toggler">
      <input type="checkbox" id="checkbox"/>
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
      </span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/./#Secondm">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/./#Thirdm">Our story</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/./#users">Installation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/./#mhs">Collaborators</a>
        </li>
      </ul>
    </div>
        <div className="joinbut">
          <a className="joina" href="https://github.com/marketplace/actions/commit-crtiq" target="blank">
          <button class="bt"> Checkout!</button>
          </a>
        </div>
  </div>

</nav>
</div>
  );
}

export default App;
