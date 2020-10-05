import React, {Component} from 'react';

class Keypad extends Component {
    constructor() {
        super()
    }

    passwordInput = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.passwordInput} />
            </div>
        )
    }
}

export default Keypad