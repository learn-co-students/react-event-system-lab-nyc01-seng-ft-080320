// Code Keypad Component Here
import React from 'react'; 

class Keypad extends React.Component {

    KeyUpHandler= () => {
        console.log('Entering password...')
    }
    

    render() {
        return ( 
            <div> 
                <input type="password" onKeyUp={this.KeyUpHandler}/>
            </div>

        )
    }

}

export default Keypad