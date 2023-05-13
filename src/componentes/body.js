import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

import Logo from './logo';
//import Menu from './menu';
import BtnContacto from './btnContacto';
import BtnRegistro from './btnRegistro';
import Inicio  from './inicio';
import Canciones from './canciones';
import Registro from './registro';
import IniciarSesion from './iniciarSesion';
import BtnIniciarSesion from './btnIniciarSesion';

class Body extends Component  {

  constructor(props) {
        super(props);
        this.state = {
          seccion_inicio: 'block',
          seccion_canciones: 'none',
          seccion_registro:'none',
          seccion_inicioSesion:'none',
        };
  }

  MostrarInicio = () => {
      this.setState({
          seccion_inicio:'block',
          seccion_canciones: 'none',
          seccion_registro: 'none',
          seccion_inicioSesion:'none',
      })
  }
    
 MostrarCanciones = () => {
    this.setState({
        seccion_inicio:'none',
        seccion_canciones: 'block',
        seccion_registro: 'none',
        seccion_inicioSesion:'none',
  })}
MostrarRegistro = () => {
    this.setState({
        seccion_inicio:'none',
        seccion_canciones: 'none',
        seccion_registro: 'block',
        seccion_inicioSesion:'none',
  })}
MostrarInicioSesion = () => {
    this.setState({
        seccion_inicio:'none',
        seccion_canciones: 'none',
        seccion_registro: 'none',
        seccion_inicioSesion:'block',
  })}

render(){
        return (
            <div className = "container-fluid">
            <div className = 'row no-gutters'>
              <div className = 'col-3 px-1 d-flex justify-content-left  align-items-center'>
                <Logo />
              </div>
              <div className = 'col-6 px-1 d-flex justify-content-center  align-items-center'>
              <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                  <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <div className="navbar-nav">
                        <button onClick={this.MostrarInicio}>inicio</button>
                        <button onClick={this.MostrarCanciones}>canciones</button>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className = 'col-3 p-1 d-flex justify-content-end align-items-center'>
                <div className = " mx-2"  onClick={this.MostrarInicioSesion}>
                  <BtnIniciarSesion/>
                </div>
                <div className = " mx-2">
                  <BtnContacto type="button"/>
                </div>
                <div className = " mx-2"  onClick={this.MostrarRegistro} >
                <BtnRegistro type="button"/>
                </div>
              </div>
            </div>
            <div style={{display: this.state.seccion_inicio}}>
            <Inicio/>
           </div>
           <div style={{display: this.state.seccion_canciones}}>
            <Canciones/>
           </div>
           <div style={{display: this.state.seccion_registro}}>
            <Registro/>
           </div>
           <div style={{display: this.state.seccion_inicioSesion}}>
            <IniciarSesion/>
           </div>
        </div>
        );
}
   

}


export default Body;


/* ref = {div => this.seccion_estado = div} */

/*

<div style={{display: this.state.estadoInicio}}>
            <Inicio/>
           </div>

 {this.state.estado ? <Inicio/> : undefined}
*/

/*


    MostrarInicio = () => {
        this.setState({
            Inicio: true,
            Canciones: false,
            Registro:false,
            IniciarSesion:false
        })
    }

    MostrarCanciones = () => {
        this.setState({
            Inicio: true,
            Canciones: false,
            Registro:false,
            IniciarSesion:false
        })
    }
    MostrarRegistro = () => {
        this.setState({
            Inicio: true,
            Canciones: false,
            Registro:false,
            IniciarSesion:false
        })
    }
    MostrarIniciarSesion = () => {
        this.setState({
            Inicio: true,
            Canciones: false,
            Registro:false,
            IniciarSesion:false
        })
    }
    


*/

/*
const { Inicio, Canciones, Registro,IniciarSesion } = this.state;

    if(Inicio){
        return (
            <div class = "container-fluid">
            <div className = 'row no-gutters'>
              <div className = 'col-3 px-1 d-flex justify-content-left  align-items-center'>
                <Logo />
              </div>
              <div className = 'col-6 px-1 d-flex justify-content-center  align-items-center'>
              <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
                  <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <div class="navbar-nav">
                        <a href='...'  class="nav-link" onClick={this.MostrarInicio()}>inicio</a>
                        <a href='...'  class="nav-link" onClick={this.MostrarCanciones()}>Canciones</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className = 'col-3 p-1 d-flex justify-content-end align-items-center'>
                <div>
                  <BtnIniciarSesion onClick={this.MostrarIniciarSesion}/>
                </div>
                <div class = " mx-2">
                  <BtnContacto/>
                </div>
                <div class = " mx-2">
                  <BtnRegistro onClick={this.MostrarRegistro}/>
                </div>
              </div>
            </div>
            <div>
                <Inicio/>
            </div>
        </div>
        );
    }else if (Canciones) {
        
    }else if (Registro) {
        
    }else {
        
    }
   


*/