import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Oye from './componentes/oye.js';
import PiePagina from './componentes/pie';



ReactDOM.render(<Oye/>, document.getElementById('root'));
ReactDOM.render(<PiePagina/>, document.getElementById('bottomPage'));

reportWebVitals();
