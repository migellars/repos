import React, { Component } from 'react'
import MyButton from '../utils/MyButton'

import Zoom from 'react-reveal/Zoom'

export default class Pricing extends Component {

    state={
        prices:[100,250,250],
        position:['Balcony', 'Medium', 'Star'],
        desc:['Flash said he and which and. Known pilgrimage deem maidens the hope, who deem lyres with from den, none full.',
                'Sit et sanctus sit kasd sanctus. Sed justo sit et dolor clita stet invidunt sanctus aliquyam. Rebum sanctus at duo.',
                'Zu bist wort o gar dich du träume wie im blieb, zurück stürmten du gedanken brust zurück so und vom..'        
            ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=> (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className='pricing_item'>
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_title'>
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.position[i]}</span>
                        </div>
                        <div className='pricing_description'>
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className='pricing_buttons'>
                            <MyButton
                                text='Purchase'
                                bck='#ffa800'
                                color='#ffffff'
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
            
        ))
    )
    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>


                    <div className='pricing_wrapper'>
                       {this.showBoxes()}
                    </div>
                     
                </div>
            </div>
        )
    }
}
