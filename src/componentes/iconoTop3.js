import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import icon_1 from '../imagenes/icon_1.svg';
import icon_2 from  '../imagenes/icon_2.svg';
import icon_3 from  '../imagenes/icon_3.svg';
import icon_4 from  '../imagenes/icon_4.svg';



class Icono extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: props.numero
    };
  }
 
  render() {

    switch (this.state.numero) {
        case 1:
          return( <img src={icon_1} class="img-fluid d-block w-100" alt="..."/>)
          break;
        case 2:
            return( <img src={icon_2} class="img-fluid d-block w-100" alt="..."/>)
          break;
        case 3:
            return( <img src={icon_3} class="img-fluid d-block w-100" alt="..."/>)
          break;
        case 4:
            return( <img src={icon_4} class="img-fluid d-block w-100" alt="..."/>)
          break;
      
        default:
          <p>error</p>
          break;
      }
}
}

export default Icono;