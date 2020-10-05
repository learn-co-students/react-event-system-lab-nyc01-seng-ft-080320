// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    gooba = e => console.log('Entering password...')
    
    render() {
        return(
            <input type='password'
                onKeyUp = {this.gooba}
            ></input>
        )
    }
}

export default Keypad