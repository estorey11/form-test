import React from 'react';
import '../css/CustomSwitch.css';





const CustomSwitch = (props) => {

  return (
    <div>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  );
}

export default CustomSwitch;
