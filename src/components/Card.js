import React from 'react'
import imageImg from '../images/image.svg'
import './styles/Card.css'
import circlesImg from '../images/circles.png'

class Card extends React.Component{
 /*    constructor(props){
        super(props);
        this.state = {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Dipexercise.svg/1200px-Dipexercise.svg.png',

        }
    }
 */
    /* componentDidMount(){
        setTimeout(() => {
            this.setState({
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKM70lOsq6mi9K1VAiKHFUpOA_iNoNulJgw&usqp=CAU'
            })
        }, 5000);
    } */
    /*background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB); `````*/
    render(){
        const {title,description,img,leftColor,rightColor} = this.props;
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right,${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="Image-Fitness float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;