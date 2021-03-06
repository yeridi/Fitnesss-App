import React from 'react'

import ExercicesList from './ExecicesList'

import {Button,Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import './styles/Modal.css'

class ModalNew extends React.Component{
    state={
        open:false,
    }

    openModal=()=>{
        this.setState({open: !this.state.open})
    }

    render(){
        const modalStyles = {
            width:'80%',
            position:'absolute',
            top:'45%',
            left:'50%',
            transform:'translate(-50%, -50%)'
        }
        return (
            <>
            <div className="principal">
                <div className="secundario" onClick={this.openModal}>
                    <Button color="success">Mostrar Modal</Button>
                </div>
            </div>

            /* modal */

            <Modal isOpen={this.state.open} style={modalStyles}>
                <ModalHeader>
                    Este es el header
                </ModalHeader>
                <ModalBody>
                    <h1>The List of the Exercices</h1>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.openModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}
export default ModalNew;