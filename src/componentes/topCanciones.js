import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';


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
  render() {
    const { error, isLoaded, canciones } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const topCanciones = [canciones[0], canciones[1], canciones[2]];
      return (
        <div class="w-100 d-flex flex-column align-items-center justify-content-center" >
            <ul className='p-0 w-100'>    
                  <hr/>
                  <h1 className=' text-center'>top 3</h1>
                {
                  topCanciones.map((cancion => (  
                    <li key={cancion.nombre}>
                      <div>
                        <hr/>
                        <p>{cancion.nombre}</p>
                        <audio src={`../canciones/${cancion.ruta}`} controls></audio>
                      </div>
                    </li>
                  )))
                }
            </ul>
        </div>
      );
    }
  }
}
export default Top3;
/*
<div class="container-fluid" >
        
          <div class="col m-5 d-flex flex-column align-items-center justify-content-center">
            <ul className=' w-100'>
                 
            <hr/>
            <div className='d-flex justify-content-center'>
            <h1>top 3</h1>
            </div>
           
          
         
              {
                
                topCanciones.map((cancion => (
                  
                  <li key={cancion.nombre}>
                    <div>
                      <hr/>
                      <p>{cancion.nombre}</p>
                      <audio src={`../canciones/${cancion.ruta}`} controls></audio>
                    </div>
                  </li>
                )
                )
                )
              }
            </ul>
          </div>
        </div>*/