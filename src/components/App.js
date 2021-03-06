import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
/* Awitch sirve para validar las rutas */
/* import {BrowserRouter as Router} from 'react-router-dom' */

/* componentes */
import Exercices from '../pages/Exercices'
import ExerciceNew from '../pages/ExcerciceNew'
import NotFound from '../pages/NotFound'

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    exact path="/exercice" 
                    component={Exercices}
                />
                <Route 
                    path="/exercice/new" 
                    exact component={ExerciceNew}
                />
                <Route
                    component={NotFound}
                />
            </Switch>
        </BrowserRouter>
    )


}
export default App