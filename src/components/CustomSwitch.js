
import '../css/CustomSwitch.css';
import React, { Component } from 'react'

class CustomSwitch extends React.Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props
    return (
      <>
        <label class="switch">
          <input type="checkbox" value={this.props.value} onClick={() => onChange(!value)}/>
          <span class="slider"></span>
        </label>
      </>
    );
  }
}

export default CustomSwitch;
