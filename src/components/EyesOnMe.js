// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    blar = e => console.log('Good!')
    flar = e => console.log('Hey! Eyes on me!')
    
    render() {
        return(
            <button
                onFocus = {this.blar}
                onBlur = {this.flar}
            ></button>
        )
    }
}

export default EyesOnMe