import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './diseñoGeneral.css';

class Encabezado extends Component  {
  render(){
    return (
        <div className='container-fluid'>
        <div className='row no-gutters'>
          <div className='col-3 px-0 d-flex justify-content-left'>  
            <div class="d-flex">
              <img class="logo img-fluid"src={logo}/>
              <h1 class="text-info">OYE</h1>
            </div>
          </div>
          <div className='col-6 px-0 d-flex justify-content-center'>
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
          </div>
          <div className='col-3 px-0 d-flex justify-content-end'>
            <button type="button" class="btn btn-info btn-sm">Contacto</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Encabezado;
