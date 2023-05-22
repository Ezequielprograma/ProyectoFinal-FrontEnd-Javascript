import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PiePagina from './pie';

class Canciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      canciones: {},
      coincidencia: false,
      cancionEncontrada: {},
    };
    
    this.Filtrar = this.Filtrar.bind(this)
  }
  componentDidMount() {      
fetch("http://192.168.0.181:3000/datos.json")
.then(res => res.json())
.then((result) => {
  this.setState({
    isLoaded: true,
    canciones: result.canciones.sort((x, y) => y.reproducciones - x.reproducciones),
  });
},
  (error) => {
    this.setState({
      isLoaded: true,
      error
    });
  }
)
  }
  
  Filtrar(e){
  if(e.target.value.trim()===""){
    this.setState({
      coincidencia: false
    });
  }else{
    
    for (const p in this.state.canciones) {
      if(RegExp(e.target.value).test(this.state.canciones[p].nombre)){   
        this.setState({
          coincidencia: true,
          cancionEncontrada: this.state.canciones[p]
        });
      }
    }  
  }
}

  render() {
    const { error, isLoaded, canciones,coincidencia,cancionEncontrada } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <div class="m-5 p-5 shadow bg-info-subtle" >
            <div class="col-auto d-flex flex-column align-items-center justify-content-center ">
              <h1>Canciones</h1>
                <form>
                   <input  style={{width:"200px"}} type="text" name="Buscador" defaultValue={this.props.value} onChange={this.Filtrar}/>
                </form>
            </div>
            <div>
              {
                coincidencia ?
                <div class="col m-5 d-flex align-items-center justify-content-center">
                <ul>
                  {
                   <ul>
                    <li>
                        <div>
                          <p>{cancionEncontrada.nombre}</p>
                          <audio src={`../canciones/${cancionEncontrada.ruta}`} controls></audio>
                        </div>
                      </li>
                   </ul>
                  }
                </ul>
              </div>
                :
                <div class="col m-5 d-flex align-items-center justify-content-center bg-info-subtle">
                <ul>
                  {
                    canciones.map((cancion => ( 
                      <li key={cancion.nombre}>
                        <div>
                          <h1>{cancion.nombre}</h1>
                          <audio src={`../canciones/${cancion.ruta}`} controls></audio>
                        </div>
                      </li>
                    )
                    )
                    )
                  }
                </ul>
              </div>
              }
            </div>
            


         
        </div>
      );
    }
  }
}
export default Canciones;

