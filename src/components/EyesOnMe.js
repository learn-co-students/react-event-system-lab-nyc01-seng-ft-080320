// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    foci = (event) => {
        console.log("Good!")
    }

    blu = (event) => {
        console.log("Hey! Eyes on me!")
    }
    render(){
        return(
            <button onFocus={this.foci} onBlur={this.blu}></button>
        )
    }

}

export default EyesOnMe