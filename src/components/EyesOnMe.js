import React from 'react'

class EyesOnMe extends React.Component{

    focused = () => {
        console.log("Good!")
    }

    unFocused = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return <button onFocus={this.focused} onBlur={this.unFocused}>Enter</button>
    }
}

export default EyesOnMe
