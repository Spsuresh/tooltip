import React, { Component } from 'react';
import Tooltip from './Tooltip';

class App extends Component {
  constructor(){
    super();
    this.state = {
      box: 'text',
      showTooltip: false,
      tooltipPosition: 'top',
    }
  }

// ======================on hover function============================


  onHover = () => {
    this.setState({
      box: 'image',
      showTooltip: true,
    })
  }

// =======================mouse leave function============================


  onLeave = () => {
    this.setState({
      box: 'text',
      showTooltip: false,
    })
  }


// ============================set tooltip position============================



  handleChange = (event) => {
    this.setState({
      tooltipPosition: event.target.value
    })
  }

  render() {
    const { box, showTooltip, tooltipPosition} = this.state;
    return (
      <div>
        <label>
          Set tooltip position:
          <select value={tooltipPosition} onChange={this.handleChange}>

            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="down">Down</option>
            <option value="left">Left</option>

          </select>
        </label>
      <div id="main" onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
        {(showTooltip && <Tooltip props ={tooltipPosition} />)}
        {(box === 'text'  && <span id="downtext">Touch me</span>)}
        {(box === 'image' && <img
              alt="PIC"
              className="icons"
              src="https://img.icons8.com/fluency/35/null/ok.png"/>
             
             )}
      </div>
      </div>
    );
  }
}

export default App;