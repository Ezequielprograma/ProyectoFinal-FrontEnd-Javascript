import React, { Component } from 'react';
import 'bootstrap';
import '../index.css';
import  portada from '../imagenes/portada.jpeg';
import portada2 from '../imagenes/portada2.jpg';
import portada3 from '../imagenes/portada3.jpg';

class ImgPortada extends Component  {

  render(){
    return (   
      <div className='d-flex justify-content-center m-lg-3'>
          <div id="carouselExample"  class="carousel slide my-0" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class=" carousel-item active">
              <img src={portada3} class="img-fluid d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={portada} class="img-fluid d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={portada2} class="img-fluid d-block w-100" alt="..."/>
            </div>
          </div>
        </div> 
      </div>  
    );
  }
}

export default ImgPortada;
