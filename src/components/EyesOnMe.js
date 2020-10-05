import React, {Component} from 'react';

class EyesOnMe extends Component {
    constructor() {
        super()
    }

    focusHandler = () => {
        console.log("Good!")
    }

    blurHandler = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div>
                <button onFocus={this.focusHandler} onBlur={this.blurHandler}>Button for Eyes</button>
            </div>
        )
    }
}

export default EyesOnMe