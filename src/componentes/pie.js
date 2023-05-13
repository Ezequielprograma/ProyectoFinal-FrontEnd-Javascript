import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class piePagina extends Component  {
  render(){
    return (
    <div className='container-fluid text-bg-primary'>
        <div className='row  align-items-center'>
            <div className='col-6 d-flex justify-content-start'>
                Comparte la Musica
            </div>
            <div className='col-6 d-flex justify-content-end'>
            © Derechos reservados
            </div>
        </div>
    </div>
    );
  }
}

export default piePagina;
