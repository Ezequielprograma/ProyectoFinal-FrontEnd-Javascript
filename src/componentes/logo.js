import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../imagenes/logo.png';
import '../index.css';

class Logo extends Component  {
  render(){
    return (
      <div class="d-flex">
        <img alt='logo' class="logo img-fluid"src={logo}/>
        <h1 className="text-primary my-auto">OYE</h1>
      </div>
    );
  }
}

export default Logo;