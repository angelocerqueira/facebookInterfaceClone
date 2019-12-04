import React, { Component } from 'react';
import logo from '../assets/facebook.png';
class Header extends Component{

render(){
  return (
   <header id="header">
     <div className="logo">
       <a href="index.html">
       <img src={logo} alt="" />
       </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Meu Perfil </a> 
          </li>
        </ul>
      </nav>
   </header>
  )
}

}

export default Header;