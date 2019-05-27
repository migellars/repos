import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'


import MyButton from '../utils/MyButton'

export default class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart +1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                <Fade
                onReveal={() => this.porcentage()}
                >
                <div className='discount_porcentage'>
                        <span>{this.state.discountStart}%</span>
                        <span>off</span>
                    </div>
                </Fade>
                    
                <Slide right>
                <div className="discount_description">
                        <h3>Purchase tickets before 20th November</h3>
                        <p>Et ut amet est invidunt est nonumy eos labore, magna dolor dolores sadipscing diam stet sit ipsum. Ipsum dolores eirmod.<br/>Invidunt ipsum eos eos et labore lorem takimata eirmod. Sit magna est eirmod consetetur voluptua sit rebum kasd. Sed sit.<br/>Sadipscing et amet tempor eirmod dolore, sanctus sea tempor sit sit. Et ipsum rebum sit dolor eos sanctus accusam et..</p>

                        <MyButton
                            text='Purchase tickets'
                            bck='#ffa800'
                            color='#ffffff'
                            link='http://google.com'
                        />

                    </div>
                </Slide>
                    

                </div>
            </div>
        )
    }
}
