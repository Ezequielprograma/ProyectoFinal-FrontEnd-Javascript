import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class PiePagina extends Component  {
  render(){
    return (
    <div className='row bg-info-subtle text-dark justify-content-between'>
      <p className='w-auto d-none d-sm-block'>Comparte la Musica</p>    
      <p className='w-auto'>© Derechos reservados</p>
    </div>
    );
  }
}

export default PiePagina;


