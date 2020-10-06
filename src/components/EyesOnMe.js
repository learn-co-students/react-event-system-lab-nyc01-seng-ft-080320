// Code EyesOnMe Component Here


import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    focusHandler = (event) => {
        console.log('Good!')
    }

    blueHandler = (event) => {
        console.log('Hey! Eyes on me!')
    }
    

    render() {
        return (
            <div>
                <button onFocus={this.focusHandler} onBlur={this.blueHandler}>
                    Eyes on me, please!
                </button>
            </div>
        )
    }
}
