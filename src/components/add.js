import { render } from '@testing-library/react';
import React from 'react'
import AddImg from '../images/add.png'
import './styles/add-style.css'

import { Link } from 'react-router-dom'
class Add extends React.Component{
    render(){
        return (
            <Link to="/exercice/new">
                <img src={AddImg} className="ButtonAgregate"></img>
            </Link>
        )
    }
}

export default Add;