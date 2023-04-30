import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './diseñoGeneral.css';

class piePagina extends Component  {
  render(){
    return (
    <div className='container-fluid text-bg-primary position-absolute bottom-0'>
        <div className='row align-items-center px-0 mx-auto'>
            <div className='col d-flex justify-content-start px-0 mx-auto'>
                Comparte la Musica
            </div>
            <div className='col d-flex justify-content-end px-0 mx-auto'>
            © Derechos reservados
            </div>
        </div>
    </div>
    );
  }
}

export default piePagina;
