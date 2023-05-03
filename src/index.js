import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './diseñoGeneral.css';
import Logo from './logo';
import Menu from './menu';
import BtnContacto from './btnContacto.js';
import PiePagina from './pie';
import Inicio from './inicio';


var paginaOYE = [
  
  <div className='container-fluid'>
    
    <div className='row no-gutters'>
      <div className='col-3 px-1 d-flex justify-content-left  align-items-center'>
        <Logo />
      </div>
      <div className='col-6 px-1 d-flex justify-content-center  align-items-center'>
        <Menu />
      </div>
      <div className='col-3 p-1 d-flex justify-content-end align-items-center'>
        <div>
          <BtnContacto/>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div className=' col-auto bg-info d-flex p-5 flex-row justify-content-center'>
        <div class="portada m-3 d-flex flex-column justify-content-center align-items-star bg-info">
          <h2>Canciones gratis para la comunidad</h2>
          <p>Con este sitio podras escuchar canciones de manera libre</p>
          <div>
            <button type="button" class="btn btn-primary btn-sm">Ver canciones</button>
          </div>
        </div>
        <div class="portada m-3 bg-info">
          <Inicio />
        </div>
      </div>
    </div>
  </div>
]

ReactDOM.render(paginaOYE, document.getElementById('encabezado'));
ReactDOM.render(<PiePagina />, document.getElementById('piePagina'));

reportWebVitals();
