import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

class Registro extends Component {
    render(){
        return(
                 <div>
                    <h1>Registro</h1>
                    <form action="">
                        <p>
                            <label>Correo Electronico *</label>
                            <input type="text" name="correo electronico" id="email"/>
                        </p>
                        
                        <p>
                            <label>Contraseña *</label>
                            <input type="text" name="contraseña" id="contraseña"/>
                        </p>
                        
                        <p>
                            <label>Confirmación de constraseña</label>
                            <input type="password" name="confirmacion de contraseña" id="confirmacion"/>
                        </p>
                
                        <p>
                            <label>Género musical favorito *</label>
                            <select name="genero musical" id="genero">
                                <option value="">Selecccione</option>
                                <option value="1">Rock</option>
                                <option value="2">Balada</option>
                                <option value="3">Salsa</option>
                                <option value="4">Otro</option>
                            </select>
                        </p>
                
                        <p>
                            <label for="terminos"><input type="checkbox" name="terminos" id="terminos" value="aceptar"/></label>
                            Acepta términos y condiciones
                        </p>
                
                        <p>
                            <input type="submit" value="Continuar"/>
                        </p>
                    </form>
                 </div>         
        )
    }
}

export default Registro;

