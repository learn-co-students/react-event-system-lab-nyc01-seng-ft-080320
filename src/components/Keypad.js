import React from 'react';

class Keypad extends React.Component {
  handleKeyPress = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.handleKeyPress}/>
    );
  }
}

export default Keypad;