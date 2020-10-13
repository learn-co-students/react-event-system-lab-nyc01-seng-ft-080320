// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    FocusHandler = () => {
        console.log('Good!')
    }

    BlurHandler = () => {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return (
            <div>
                <button onFocus={this.FocusHandler} onBlur={this.BlurHandler}>
                </button>
            </div>
        )
    }
}

export default EyesOnMe