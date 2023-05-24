import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class IniciarSesion extends Component {
    render(){
        return(
                <div className='w-auto h-100 my-5 p-3 shadow bg-info-subtle d-flex flex-column align-content-center text-center'>
                    <h1>Iniciar Sesión</h1>
                    <form className='text-start p-2'>
                        <div class="input-group input-group-lg mb-3">
                            <span class="input-group-text">Correo Electrónico *</span>
                            <input type="text" class="form-control" name="correo electronico" id="email_inicioSesion"/>
                        </div>
                        
                        <div class="input-group input-group-lg mb-3">
                            <span class="input-group-text">Contraseña *</span>
                            <input type="text" class="form-control" name="contraseña" id="contraseña_inicioSesion"/>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <input type="submit" class="btn btn-dark" value="Continuar"/>
                        </div>
                           
                    </form>
                    
                 </div>         
        )
    }
}

export default IniciarSesion;

