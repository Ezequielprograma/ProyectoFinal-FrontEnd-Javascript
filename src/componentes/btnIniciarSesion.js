import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class BtnIniciarSesion extends Component {

  render() {
      return (
        <div>
          <button type="button" class="btn btn-primary btn-sm">Iniciar Sesion</button>
        </div>
      ) 
  }
}

export default BtnIniciarSesion;