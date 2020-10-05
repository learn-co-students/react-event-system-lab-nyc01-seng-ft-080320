import React from 'react'
import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

class App extends React.Component{
    render(){
        return(
            <div>
            <Keypad />
            <EyesOnMe />
          </div>  
        )
    }
}

export default App