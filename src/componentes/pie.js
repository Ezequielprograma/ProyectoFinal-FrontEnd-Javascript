import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class PiePagina extends Component  {
  render(){
    return (
    <div className='d-flex justify-content-between bg-info-subtle align-content-center px-2'>
      <p>Comparte la Musica</p>    
      <p>© Derechos reservados</p>
    </div>
    );
  }
}

export default PiePagina;
