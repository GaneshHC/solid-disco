import React from 'react';

class ButtonClicker extends React.Component {
  handleClick = () => {
    alert('Button Clicked');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ButtonClicker;
