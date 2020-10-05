import React from 'react'

export default class EyesOnMe extends React.Component {
  focusUp = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return <button onFocus={this.focusUp} onBlur={this.blur}>Button</button>
  }
}