import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Top3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      canciones: {},
     
    };
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
  render() {
    const { error, isLoaded, canciones } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const topCanciones = [canciones[0], canciones[1], canciones[2]];
      return (
        <div class="container-fluid" >
          <div class="row">
            <div class="col mt-5 d-flex align-items-center justify-content-center">
              <h1>top 3</h1>

            </div>
          </div>
          <div class="col m-5 d-flex align-items-center justify-content-center">
            <ul>
              {
                
                topCanciones.map((cancion => (
                  
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
export default Top3;

