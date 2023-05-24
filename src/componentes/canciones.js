import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Icono from './iconos';

class Canciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      canciones: {},
      coincidencia: false,
      cancionEncontrada:''
    };
    this.Filtrar = this.Filtrar.bind(this)
  }
  componentDidMount() {      
fetch("http://localhost:3000/datos.json")
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
      coincidencia: false,
    });
  }else{
    
    for (const p in this.state.canciones) {
      if(RegExp(e.target.value).test(this.state.canciones[p].nombre)){   
        this.setState({
          coincidencia:true,
          cancionEncontrada: this.state.canciones[p]
        })
      }
    }  
    
    
  }

}
  render() {
    const { error, isLoaded, canciones,coincidencia,cancionEncontrada} = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        <div id='SongsContainerMaster' class="m-0 p-0 my-5 py-3 shadow bg-info-subtle d-flex flex-column justify-content-center" >
            <div class="col-auto d-flex flex-column align-items-center justify-content-center ">
              <h1>Canciones</h1>
                <form>
                   <input  style={{width:"200px"}} type="text" name="Buscador" defaultValue={this.props.value} onChange={this.Filtrar}/>
                </form>
            </div>
            <div className='w-100'>
              {
                coincidencia ?
                <div id='SongsContainer' className='px-4'>    
                  {
                        <div id='SongsBox'  className='my-2 p-1 border border-opacity-25 border-dark-subtle rounded'>
                        <Icono numero={cancionEncontrada.icono}/>
                        <h2>{cancionEncontrada.nombre}</h2>
                        <audio src={`../canciones/${cancionEncontrada.ruta}`} controls></audio>
                      </div>
                  }
              </div>
                :
                <div id='SongsContainer' className='px-4'>
                  {
                    canciones.map((cancion => ( 
                      <div key={cancion.nombre} id='SongsBox'  className='my-2 p-1 border border-opacity-25 border-dark-subtle rounded'>
                          <Icono numero={cancion.icono}/>
                          <h2>{cancion.nombre}</h2>
                          <audio src={`../canciones/${cancion.ruta}`} controls></audio>
                      </div>
                    )
                    )
                    )
                  }
                </div>
              }
            </div>
        </div>
      );
    }
  }
}
export default Canciones;



