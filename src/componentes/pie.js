import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class PiePagina extends Component  {
  render(){
    return (
    <div className='container-fluid d-flex  justify-content-between bg-info-subtle position-absolute bottom-0 '>
      <p className='col-auto'>Comparte la Musica</p>    
      <p className='col-auto'>© Derechos reservados</p>
    </div>
    );
  }
}

export default PiePagina;
