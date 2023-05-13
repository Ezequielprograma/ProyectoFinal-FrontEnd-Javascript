import React, { Component } from 'react';
import 'bootstrap';
import '../index.css';
import Top3 from './topCanciones';
import ImgPortada from './imgPortada';
import TextPortada from './textPortada';


class Inicio extends Component  {
  render(){
    return (      
        <div class="container-fluid">
        <div class="row  no-gutters d-flex flex-column align-items-center mt-3">
          <div class='col-6  bg-dark d-flex p-5 flex-row justify-content-center'>
            <div class="portada">
              <TextPortada/>
            </div>
            <div class="portada">
              <ImgPortada />
            </div>
          </div>
          <div class= "col-6 d-flex flex-row justify-content-center">
            <Top3/>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
