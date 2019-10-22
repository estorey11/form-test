
import '../css/CustomSwitch.css';
import React from 'react'

class CustomSwitch extends React.Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props
    return (
      <>
        <label class="switch">
          <input type="checkbox"
            onChange={() => onChange(!value)}/>
          <span class="slider"></span>
        </label>
      </>
    );
  }
}

export default CustomSwitch;
