import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import '../index.css';

class BtnContacto extends Component {

  constructor() {
    super();
    this.state = {
       modalisHidden: true,
       
      };
  }
  mostrarModal = () => {
    this.setState({
      modalisHidden: false
    })
  }
  ocultarModal = () => {
    this.setState({
      modalisHidden: true
    })
  }
  render() {
    if (this.state.modalisHidden) {
      return (
        <div className='d-flex align-content-center shadow-sm px-2 py-2'>
          <button type="button" class="btn btn-primary " onClick={this.mostrarModal}>Contacto</button>
        </div>
      )
    } else {
      return (
       
          <div id='modal-container' className=" container-fluid" >
            <div id='modal-window' class=' row bg-white  bg-text-info'>
              <div class='col-12 border-start'>
                <div  class='d-flex pt-2 justify-content-end'>
                <FontAwesomeIcon id='boton-cerrar' onClick={this.ocultarModal} icon={faCircleXmark} />
                </div>
              
              </div>
              <div class='col-12 '>
                <p>Email:<b>eze1506@live.com.ar</b></p>
                <p>Telefono de contacto: <b>11-4437-3532</b></p>
              
              </div>
              <div class='col-12'>
                <div class='d-flex pt-1 justify-content-end'>
                <button type="button" onClick={this.ocultarModal} class="btn fa-mouse-pointer btn-primary btn-sm">Cerrar</button>
                </div>
              
              </div>
            </div>
        
        </div>
       
          )
    }
  }
}

export default BtnContacto;