import React, { Component } from 'react';
import 'bootstrap';
import '../index.css';
import  portada from '../imagenes/portada.jpeg';
import portada2 from '../imagenes/portada2.jpg';
import portada3 from '../imagenes/portada3.jpg';

class ImgPortada extends Component  {
  render(){
    return (      
      <div id="carouselExample"  class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="portada carousel-item active">
            <img src={portada3} class="img-fluid d-block w-100" alt="..."/>
          </div>
          <div class="portada carousel-item">
            <img src={portada} class="img-fluid d-block w-100" alt="..."/>
          </div>
          <div class="portada carousel-item">
            <img src={portada2} class="img-fluid d-block w-100" alt="..."/>
          </div>
        </div>
      </div> 
    );
  }
}

export default ImgPortada;
