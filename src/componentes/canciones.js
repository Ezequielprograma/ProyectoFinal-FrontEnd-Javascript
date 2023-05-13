import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Canciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      canciones: {},
      
    };
    
    this.Filtrar = this.Filtrar.bind(this)
  }
  componentDidMount() {      
fetch("http://192.168.0.101:3000/datos.json")
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
    //console.log(e.target.value);
    /*if(this.state.canciones[0].nombre.test(e.target.value)){
      
    console.log('true');
    }else{console.log('false')}
    */
   var nuevo = RegExp(e.target.value)
   console.log(nuevo)
   if(RegExp(e.target.value).test(this.state.canciones[0].nombre)){
      
    console.log('true');
    }else{console.log('false')}
    /*
    const canciones = this.state;
    for (let index = 0; index < 10; index++) {
      console.log(canciones[index].nombre.toString())
    }*/
}

  render() {
    const { error, isLoaded, canciones } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="container-fluid" >
            <div class="col m-5 d-flex align-items-center justify-content-center ">

                <form>
                   <input  style={{width:"200px"}} type="text" name="Buscador" defaultValue={this.props.value} onChange={this.Filtrar}/>
                </form>

               
            </div>
          <div class="col m-5 d-flex align-items-center justify-content-center">
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
        </div>
      );
    }
  }
}
export default Canciones;
