// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    keyHandler = (event) => {
        console.log("Entering password...")
    }

    render() { 
        return (
            <input type="password" onKeyUp={this.keyHandler}/>
        )
    }

}

export default Keypad