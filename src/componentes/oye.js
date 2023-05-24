import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Inicio  from './inicio';
import Canciones from './canciones';
import Registro from './registro';
import IniciarSesion from './iniciarSesion';
import Menu from './menu';
import '../index.css'

class Oye extends Component  {

  constructor(props) {
        super(props);
        this.state = {
          seleccion_pagina: 'inicio',
    };
  }

elegirPagina = (e) => {
      switch (e) {
        case 'inicio':
          this.setState({
            seleccion_pagina: 'inicio'
            }) 
        break;

        case 'registro':
          this.setState({
            seleccion_pagina: 'registro'
          })
        break;

        case 'canciones':
          this.setState({
            seleccion_pagina: 'canciones'
          })
        break;

        case 'inicioSesion':
            this.setState({
              seleccion_pagina: 'inicioSesion'
            })
        break;

        default:

          break;
      }
    }

  render(){
    const {seleccion_pagina} = this.state
    return (
    <div id='oye'>
        <header className='z-1'>
          <Menu elegirPagina={this.elegirPagina}/>      
        </header>
       <section className='d-flex justify-content-center w-100 m-0 p-0'>
        {seleccion_pagina === 'inicio' ? <Inicio  elegirPagina={this.elegirPagina}/> : (seleccion_pagina === 'canciones' ? <Canciones/> : (seleccion_pagina === 'inicioSesion'? <IniciarSesion/> : <Registro/>))}
       </section>
    </div>
    );
  }
}

export default Oye;

