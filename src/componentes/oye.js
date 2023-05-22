import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Inicio  from './inicio';
import Canciones from './canciones';
import Registro from './registro';
import IniciarSesion from './iniciarSesion';
import Menu from './menu';
import PiePagina from './pie';
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
      <div className = "container-fluid p-0">
        <header className='col'>
          <Menu elegirPagina={this.elegirPagina}/>      
        </header>
       <section className='row d-flex justify-content-center  p-0 mx-0'>
        {
          seleccion_pagina == 'inicio' ? <Inicio/> : (seleccion_pagina == 'canciones' ? <Canciones/> : (seleccion_pagina == 'inicioSesion'? <IniciarSesion/> : <Registro/>))
        }
       </section>
        <footer className='d-none' >
          <PiePagina/>
        </footer>
    </div>
    );
  }
}

export default Oye;

