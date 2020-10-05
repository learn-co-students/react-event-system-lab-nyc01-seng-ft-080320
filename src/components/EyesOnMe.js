// Code EyesOnMe Component Here
import React from 'react';

function buttonFocusHandler(event){
    console.log('Good!');
}
function buttonBlurHandler(event){
    console.log('Hey! Eyes on me!');
}

function EyesOnMe(props){
    return(<button 
        onFocus={buttonFocusHandler}
        onBlur={buttonBlurHandler}>Button</button>);
}

export default EyesOnMe;