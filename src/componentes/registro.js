import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';


class Registro extends Component {

    constructor(props){
        super(props);
        this.state = {
            completado: false,
            email:'',
            error_email: 'none',
            clave:'',
            error_clave: 'none',
            claveConf:'',
            error_claveConf: 'none',
            grupo: 0,
            error_grupo: 'none',
            edad: 0,
            error_edad: 'none',
            terminos: false,
            error_terminos: 'none'
        }

        this.cambiarEdad = this.cambiarEdad.bind(this)
    }
    
    registro = () => {
        
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        //Verificación Correo electrónico
        if (!re.test(this.email.value.trim())) {
            this.setState({
                error_email: 'block'
            })
            return false
        }else{
            this.setState({
                email: this.email.value,
                error_email: 'none'
            })  
        }

        //Verificación Contraseña
        if (this.clave.value.length <= 7) {
            this.setState({
                error_clave: 'block'
            })
            return false
        }else{
            this.setState({
                clave: this.clave.value,
                error_clave: 'none'
            })
        }
  
        //Verificación  confirmación de Contraseña
        if(this.claveConf.value == this.clave.value){
            this.setState({
                error_claveConf: 'none'
            })
        }else{
            this.setState({
                claveConf: this.claveConf.value,
                error_claveConf: 'block'
            })
            return false
        }
       
        //Verificación de genero Musical
        if(this.state.grupo >= 1 && this.state.grupo <= 4){
            this.setState({
                error_grupo: 'none'
            })
        }else{
            this.setState({
                error_grupo: 'block'
            }) 
            return false
        }

        //Verificación de edad
        if(this.state.edad >= 1 && this.state.edad <= 3){
            this.setState({
                error_edad: 'none'
            })
        }else{
            this.setState({
                error_edad: 'block'
            })
            return false
        }

        //Verificación de términos y condiciones
        if(!this.state.terminos){
            this.setState({
                error_terminos: 'block'
            })
            return false
        }else{
            this.setState({
                error_terminos: 'none'
            })
        }

       if(this.state.error_email == 'none' && this.state.error_clave == 'none' && this.state.error_claveConf == 'none'
        && this.state.error_grupo == 'none' && this.state.error_edad == 'none' && this.state.error_terminos == 'none' ){
            alert("Registro Exitoso")
            return true
        }
       
    }

    cambiarGrupo = () =>{
        this.setState({
            grupo: this.grupo.value
        })
    }

    cambiarEdad(e){

        this.setState({
            edad: e.target.value
        })
    }

    cambiarTerminos = () => {
        if(!this.state.terminos){
            this.setState({
                terminos:true
               })
        }else{
            this.setState({
                terminos:false
               })
        }
    }

    render(){
        return (
            <div className='rounded shadow login m-5 col-auto p-5 d-flex flex-column justify-content-center bg-info-subtle login'>
                
                <h1 className='text-center'>Registro</h1>

                <form  className='fw-bold'>

                    <div className="input-group pb-3  d-flex flex-column">                        
                        <div className=' d-flex flex-column'>
                            <p>Correo Electrónico *</p>
                            <input id='usuario'  className="form-control w-100" type="text" placeholder="correo Electrónico" ref={input => this.email = input}/>
                            <div style={{display: this.state.error_email}}><p className=' text-danger'>El correo electrónico no cumple con los requisitos.</p></div> 
                        </div> 
                    </div>

                    <div className="input-group pb-3">
                        <div className='d-flex flex-column w-100'>
                        <p>Contraseña *</p>
                        <input id='clave' className="form-control" type="password" placeholder="contraseña" ref={input => this.clave = input}/>
                        <div style={{display: this.state.error_clave}}><p className=' text-danger'>La clave no cumple los requisitos. Debe tener 8 o mas digitos.</p></div> 
                        </div>   
                    </div>

                    <div className="input-group pb-3  w-100">
                        <div className='d-flex flex-column  w-100'>
                        <p>Confirmación de Contraseña *</p>
                        <input id='clave2' className="form-control" type="password" placeholder="confirmar contraseña" ref={input => this.claveConf = input}/>
                        <div style={{display: this.state.error_claveConf}}><p className=' text-danger'>La clave no coincide, o no cumple los requisitos.</p></div>
                        </div>   
                    </div>

                    <div className='input-group pb-3'>
                     <p className='w-100'>Género musical favorito *</p>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example"  ref={select => this.grupo = select} onChange={this.cambiarGrupo}>
                            <option value="0" selected>Genero Musical Favorito</option>
                            <option value="1">Balada</option>
                            <option value="2">Rock</option>
                            <option value="3">Salsa</option>
                            <option value="4">Otro</option>
                        </select>
                        <div style={{display: this.state.error_grupo}}><p className=' text-danger'>Debe seleccionar un grupo.</p></div>
                    </div>

                    <div>
                        <label>Edad*</label>
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
                        <div style={{display: this.state.error_edad}}><p className=' text-danger'>Debe seleccionar una edad.</p></div>
                    </div> 

                    <div className='my-3'>    
                        <label for="terminos"><input type="checkbox" name="terminos" id="terminos" onClick={this.cambiarTerminos}/>Aceptar términos de uso*</label> 
                        <div style={{display: this.state.error_terminos}}><p  className=' text-danger'> Debe acepte los términos de uso.</p></div>
                    </div>
                    
                    <div className='d-flex justify-content-center'>
                        <div className=' my-3 btn-group pb-3'>
                            <a className="btn btn-dark" onClick={this.registro}>
                            <i className="fa fa-user fa-fw"></i>Registrar</a>
                        </div>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default Registro;

