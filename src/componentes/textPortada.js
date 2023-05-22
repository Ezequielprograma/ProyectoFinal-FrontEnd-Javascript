import React, { Component } from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

class TextPortada extends Component  {
  render(){
    return (      
      <div class="portada d-flex flex-column justify-content-center">
        <h1  className=' text-sm-center text-md-start'>Canciones gratis para la comunidad</h1>
        <p className=' text-sm-center text-md-start'>Con este sitio podrás escuchar canciones de manera libre</p>
        <div className='d-flex  justify-content-center justify-content-md-start'>
        <button  type="button" class="btn btn-primary btn-sm mx-1" >Ver canciones</button>
        </div>
      </div>
    );
  }
}
export default TextPortada;
