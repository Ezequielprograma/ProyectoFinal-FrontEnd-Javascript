import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class IniciarSesion extends Component {
    render(){
        return(
                 <div>
                    <h1>IniciarSesion</h1>
                    <form action="">
                        <p>
                            <label>Correo Electronico *</label>
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

