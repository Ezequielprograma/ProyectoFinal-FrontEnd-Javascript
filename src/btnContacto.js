import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './diseñoGeneral.css';

class BtnContacto extends Component  {
  render(){
    return (
        <button type="button" class="btn btn-info btn-sm">Contacto</button> 
    );
  }
}

export default BtnContacto;