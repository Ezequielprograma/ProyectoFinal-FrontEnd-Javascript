import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './diseñoGeneral.css';

class Logo extends Component  {
  render(){
    return (
        
            <div class="d-flex">
              <img class="logo img-fluid"src={logo}/>
              <h1 class="text-info">OYE</h1>
            </div>
          
    );
  }
}

export default Logo;