// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe(){
    const focused = () => {
        console.log("Good!")
    }

    const blurred = () => {
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onFocus={focused} onBlur={blurred}>Hello</button>
    )
}

// class EyesOnMe extends React.Component{
//     render(){
//         return(
//             1
//         )
//     }
// }

export default EyesOnMe