import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Logo from './logo';
import Menu from './menu';
import BtnContacto from './btnContacto.js';
import PiePagina from './pie';
import Inicio from './inicio';


var paginaOYE = [ 
        <div className='container-fluid'>
            <div className='row no-gutters'>
              <div className='col-3 px-0 d-flex justify-content-left'>  
                <Logo/>
              </div>
              <div className='col-6 px-0 d-flex justify-content-center'>
              <Menu/>
              </div>
              <div className='col-3 px-0 d-flex justify-content-end'>
                <BtnContacto/>
              </div>
            </div>

            <div className='row no-gutters p-5 d-flex justify-content-center'>
                
                    <div class="col-4 d-flex flex-column justify-content-center align-items-star">
                        <h2>Canciones gratis para la comunidad</h2>
                        <p>Con este sitio podras escuchar canciones de manera libre</p>
                        <BtnContacto/>
                    </div>
                    <div class="col-4">
                        <Inicio/>
                    </div>
                 
            </div>
        </div>     
]

ReactDOM.render(paginaOYE,document.getElementById('encabezado'));
ReactDOM.render(<PiePagina/>,document.getElementById('piePagina'));

reportWebVitals();
