// Code Keypad Component Here

import React, { Component } from 'react'

export default class Keypad extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    handlePasswordInput = (event) => {
        console.log('Entering password...')
    }
    

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.handlePasswordInput}/>
            </div>
        )
    }
}
