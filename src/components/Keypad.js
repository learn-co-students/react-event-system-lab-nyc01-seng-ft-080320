// Code Keypad Component Here
import React from 'react'

function Keypad(){
    const enterPassword = () => {
        console.log('Entering password...')
    }

    return (
        <input onKeyUp={enterPassword} type="password"></input>
    )
}


// class Keypad extends React.Component{

//     enterPassword = () => {
//         console.log('Entering password...')
//     }
//     render(){
//         return(
//             <input onKeyUp={this.enterPassword} type="password"></input>
//         )
//     }
// }

export default Keypad