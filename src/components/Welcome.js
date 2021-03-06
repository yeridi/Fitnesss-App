import React from 'react'

import './styles/welcome.css'
//no se utiliza el ciclo de vida de un componente
function Welcome(props){
    return (
        <div clasName="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>Lets workout to get someone gains!</p>
            </div>
        </div>
    )
}
export default Welcome;