import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './diseñoGeneral.css';

class Menu extends Component  {
  render(){
    return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <div class="navbar-nav">
                    <a class="nav-link">inicio</a>
                    <a class="nav-link">Canciones</a>
                    <a class="nav-link">Iniciar sesion</a>
                    <a class="nav-link">Registro</a>
                  </div>
                </div>
              </div>
            </nav>
    );
  }
}

export default Menu;