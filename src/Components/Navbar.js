import React from 'react'
import '../css/nav.css';
import Home from '../Components/Home';
function BasicExample() {
  return (
    <div className='container'>
      <nav>
   {/* <!-- Checkbox for toggling menu --> */}
    <input type="checkbox" id="check"/>
    {/* <!-- Menu icon --> */}
    <label for="check" className="checkbtn">
      <i className="fas fa-bars"></i>
    </label>
    {/* <!-- Site logo --> */}
    <img src="/img/logo192.png" alt="logo" className="logo-img"/>
    
    {/* <!-- Navigation links --> */}
    <ul>
      <li><a className="active" href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Projects</a></li>
      <li><a href="/">Events</a></li>
      <li><a href="/">Team</a></li>
      <li><a href="/">News</a></li>
      <li><a href="/">Achievements</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </nav>
 
  <Home/>
  </div>
  );
}

export default BasicExample;