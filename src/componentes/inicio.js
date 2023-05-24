import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../index.css';
import Top3 from './topCanciones';
import ImgPortada from './imgPortada';


class Inicio extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        canciones: 'canciones',
    }
   
}

  render() {
    const {elegirPagina} = this.props
      return (
        <div className='w-auto d-flex flex-column  justify-content-center align-content-center bg-info-subtle shadow px-2 py-3 my-5 mx-0'>
          <div id='contenedor_inicio' className='d-lg-flex flex-lg-row justify-content-lg-center'>
            <div id='text_Portada' class="d-flex flex-column justify-content-center m-lg-3 mb-3 mb-lg-0">

              <h1 className='text-sm-center text-md-start'>Canciones gratis para la comunidad</h1>
              <p className='text-sm-center text-md-start'>Con este sitio podrás escuchar canciones de manera libre</p>

              <div className='d-flex  justify-content-center justify-content-md-start'>
                <button type="button" class="btn btn-dark mx-1" onClick={() => elegirPagina(this.state.canciones)}>Ver canciones</button>
              </div>

            </div>
          <ImgPortada />
          </div>
          <div>
            <Top3 />
          </div>
        </div>
      );
  }
}

export default Inicio;
