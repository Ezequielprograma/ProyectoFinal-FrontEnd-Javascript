import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class IniciarSesion extends Component {
    render(){
        return(
                <div className='m-5 p-5 shadow bg-info-subtle'>
                    <h1>Iniciar Sesión</h1>
                    <form action="">
                        <p>
                            <label>Correo Electrónico *</label>
                            <input type="text" name="correo electronico" id="email_inicioSesion"/>
                        </p>
                        
                        <p>
                            <label>Contraseña *</label>
                            <input type="text" name="contraseña" id="contraseña_inicioSesion"/>
                        </p>

                        <p>
                            <input type="submit" value="Continuar"/>
                        </p>
                    </form>
                 </div>         
        )
    }
}

export default IniciarSesion;

