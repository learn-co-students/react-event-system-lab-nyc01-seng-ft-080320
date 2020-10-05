import React from 'react'

class Keypads extends React.Component {

    enterPassword = () => {
        console.log("Entering password...")
    }

    render() {
        return <input type="password" onKeyUp={this.enterPassword}></input>
    }
}

export default Keypads
