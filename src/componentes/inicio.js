import React, { Component } from 'react';
import 'bootstrap';
import '../index.css';
import Top3 from './topCanciones';
import ImgPortada from './imgPortada';
import TextPortada from './textPortada';

class Inicio extends Component  {
  render(){
    return (      
          <div className='col d-flex flex-column flex-lg-row justify-content-center align-content-center bg-info-subtle shadow py-3 mx-0'>
            <TextPortada/>
            
            <ImgPortada/>
            
           
            <Top3/>
          </div>
    );
  }
}

export default Inicio;
/*
<ImgPortada/>
 <Top3/>
*/