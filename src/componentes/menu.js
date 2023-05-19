import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../index.css';

import Logo from './logo';
import BtnContacto from './btnContacto';

class Menu extends Component  {

    constructor(props){
        super(props);
        this.state = {
            inicio: 'inicio',
            canciones: 'canciones',
            registro:'registro',
            iniciarSesion:'inicioSesion'
        }
       
    }

  render(){

    const {elegirPagina} = this.props

    return (
        <nav class="navbar navbar-expand-lg bg-info-subtle shadow m-0 p-0">
            <div class="container-fluid m-0 p-0">

            <div class="navbar-brand m-0 p-0"><Logo/></div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse d-md-flex justify-content-lg-center justify-content-md-star justify-content-sm-start justify-content-md-start" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#" onClick={() => elegirPagina(this.state.inicio)}>Inicio</a>
                <a class="nav-link" href="#" onClick={() => elegirPagina(this.state.canciones)}>Canciones</a>
                <a class="nav-link" href="#" onClick={() => elegirPagina(this.state.iniciarSesion)}>Iniciar Sesión</a>
                <a class="nav-link"  onClick={() => elegirPagina(this.state.registro)}>Registro</a>
                <span className='d-lg-none'>
                 <BtnContacto type="button"/>  
                 </span>
                </div>
            </div>

            <div className='d-none d-lg-block'>
                <BtnContacto type="button"/>  
            </div>
            </div>
      </nav>
    );
  }
}

export default Menu;

 