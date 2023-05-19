import React, { Component } from 'react';
import 'bootstrap';
import '../index.css';
import Top3 from './topCanciones';
import ImgPortada from './imgPortada';
import TextPortada from './textPortada';

class Inicio extends Component  {
  render(){
    return (      
          <div className='col-auto d-flex justify-content-center bg-info-subtle shadow mt-5  p-5'>
            <div>
              <TextPortada/>
            </div>
            <div class="portada">
                <ImgPortada />
            </div>
          </div>
     
    );
  }
}

export default Inicio;
