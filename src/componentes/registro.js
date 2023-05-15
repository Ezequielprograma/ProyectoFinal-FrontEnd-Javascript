import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';


class Registro extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            emailVerificado: false,
            clave:'',
            claveVerificada: false,
            claveConf:'',
            claveConfVerificada: false,
            grupo: '',
            grupoVerificado: false,
            edad: 0,
            edadVerificada: false,
            terminos: 1,
            termCondVerificado: false
        }

        this.cambiarEdad = this.cambiarEdad.bind(this)
       
    }
    
    registro = () => {
        
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        //Verificación Correo electrónico
        if (!re.test(this.email.value.trim())) {
            this.setState({
                emailVerificado: false
            })
           
        }else{
            this.setState({
                email: this.email.value,
                emailVerificado: true
            })
            
        }

        //Verificación Contraseña
        if (this.clave.value.length >= 1 && this.clave.value.length <= 8) {
           
            this.setState({
                clave: this.clave.value,
                claveVerificada: true
            })
           
          
        }else{
            this.setState({
                claveVerificada: false
            })
          
        }
  

        //Verificación  confirmación de Contraseña
        if(this.claveConf.value !== this.clave.value){
            this.setState({
                claveConfVerificada: false
            })
        
        }else{
            this.setState({
                claveConf: this.claveConf.value,
                claveConfVerificada: true
            })
        }
        console.log(this.claveConf.value)

        //Verificación de genero Musical
        if(this.state.grupo >= 1 && this.state.grupo <= 4){
            this.setState({
                grupoVerificado: true
            })
        }else{
            this.setState({
                grupoVerificado: false
            })
            
        }

        //Verificación de edad
        if(this.state.edad >= 1 && this.state.edad <= 3){
            this.setState({
                edadVerificada:true
            })
        }else{
            this.setState({
                edadVerificada:false
            })
            
        }

        //Verificación de términos y condiciones
        if(!this.state.terminos){
            return false
        }else{
            this.setState({
                termCondVerificado: true
            })
        }

        if(
        this.state.emailVerificado === true &&
        this.state.claveVerificada=== true &&
        this.state.claveConfVerificada=== true &&
        this.state.grupoVerificado=== true &&
        this.state.edadVerificada=== true &&
        this.state.termCondVerificado=== true
        ){
            alert("Registro Exitoso")
        }else{
            return false;
        }
       
    }

    cambiarEdad(e){
        this.setState({
            edad: e.target.value
        })
        console.log(e.target.value)
    }

    cambiarTerminos = () => {
        if(this.state.terminos){
            this.setState({
                terminos: false
            })
            
        }else{
            this.setState({
                terminos: true
            })
            
        }
         
    }

    render(){
        return (
            <div className=' border rounded login m-5 container login'>
                
                <h2>Registro</h2>

                <form>

                    <div className="input-group pb-3">                        
                        <div className=' d-flex flex-column'>
                            <input id='usuario'  className="form-control" type="text" placeholder="correo Electrónico" ref={input => this.email = input}/>
                        {!this.state.emailVerificado && <p>Email incorrecto</p>} 
                        </div> 
                    </div>

                    <div className="input-group pb-3">
                        <div className='d-flex flex-column'>
                        <input id='clave' className="form-control" type="password" placeholder="contraseña" ref={input => this.clave = input}/>
                        {!this.state.claveVerificada  && <p>Clave incorrecta</p>} 
                        </div>   
                    </div>

                    <div className="input-group pb-3">
                        <div className='d-flex flex-column'>
                        <input id='clave2' className="form-control" type="password" placeholder="confirmar contraseña" ref={input => this.claveConf = input}/>
                        {!this.state.claveConfVerificada && <p>Claves incorrecta</p>} 
                        </div>   
                    </div>

                    <div className='input-group pb-3'>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example"  ref={select => this.grupo = select}>
                            <option value="0" selected>Genero Musical Favorito</option>
                            <option value="1">Balada</option>
                            <option value="2">Rock</option>
                            <option value="3">Salsa</option>
                            <option value="4">Otro</option>
                        </select>
                        {!this.state.grupoVerificado && <p>Debe seleccionar un grupo</p>} 
                    </div>

                    <div>
                        <label>Edad</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="1" name="flexRadioDefault" id="flexRadioDefault1" onChange={this.cambiarEdad} checked={this.state.edad==1 ? true : false}/>
                            <label class="form-check-label" for="flexRadioDefault1">Menor a 20</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="2" name="flexRadioDefault" id="flexRadioDefault2" onChange={this.cambiarEdad} checked={this.state.edad==2 ? true : false}/>
                            <label class="form-check-label" for="flexRadioDefault2">20 a 40</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="3" name="flexRadioDefault" id="flexRadioDefault3" onChange={this.cambiarEdad} checked={this.state.edad==3 ? true : false}/>
                            <label class="form-check-label" for="flexRadioDefault3">Mayor a 50</label>
                        </div>
                        <div>
                        {!this.state.edadVerificada && <p>Debe seleccionar una edad</p>}
                        </div>
                        
                    </div> 

                    <div>    
                        <label for="terminos"><input type="checkbox" name="terminos" id="terminos" onClick={this.cambiarTerminos}/>Aceptar términos y condiciones</label> 
                        {!this.state.termCondVerificado && <p> Debe acepte los términos y condiciones</p>} 
                    </div>
                    
                    <div className='btn-group pb-3'>
                        <a className="btn btn-secondary" onClick={this.registro}>
                            <i className="fa fa-user fa-fw"></i>Registrar</a>
                    </div>

                </form>
            </div>
        )
    }
}

export default Registro;
