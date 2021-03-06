/* const element = document.createElement('h1')
element.innerText = "Hola React.."
const container = document.getElementById('root')
container.appendChild(element) */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
/* componentes */
import App from './components/App'
//estilos
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root');


ReactDOM.render(<App/>,container);
