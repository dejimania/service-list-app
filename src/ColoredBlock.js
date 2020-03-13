import React from 'react';

import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    // let newColor = this.state.color === 'red' ? 'blue' : 'red';
    this.setState((prevColor, props) => ({
      color: prevColor.color === 'red' ? 'blue' : 'red'
    }));
  }

  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: this.state.color}}>
        <ChangeColorButton clickHandler={this.changeColor} currentColor={this.state.color}></ChangeColorButton>
      </div>
    );
  }
}

export default ColoredBlock;