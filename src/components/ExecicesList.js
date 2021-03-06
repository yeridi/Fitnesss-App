import React from 'react'
import Card from './Card'
import Modal from './Modal'

function EcercicesList(props){
    return (
        <div>
            {props.exercices.map((exercice) =>{
                return (
                    <Card
                        title={exercice.title}
                        description={exercice.description}
                        img={exercice.img}
                        leftColor={exercice.leftColor}
                        rightColor={exercice.rightColor}
                    />
                )
            })}
        </div>
    )
}
export default EcercicesList;