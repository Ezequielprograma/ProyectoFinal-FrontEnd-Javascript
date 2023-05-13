import React, { Component } from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

class TextPortada extends Component  {
  render(){
    return (      
       <div class="portada d-flex flex-column justify-content-around text-bg-dark">
        <div>
          <h2>Canciones gratis para la comunidad</h2>
          </div>
            <div>
            <p>Con este sitio podras escuchar canciones de manera libre</p>
            </div>
          <div>
          <button type="button" class="btn btn-primary btn-sm">Ver canciones</button>
        </div>
         
      </div>
    );
  }
}
export default TextPortada;
