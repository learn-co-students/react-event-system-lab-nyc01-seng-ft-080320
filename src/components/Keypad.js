// Code Keypad Component Here
import React from 'react';

function keyUpHandler(event){
    console.log('Entering password...');
}

function Keypad(props){
    return(<input type='password' onKeyUp={keyUpHandler}/>);
}

export default Keypad;