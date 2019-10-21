import React from 'react';
import '../css/CustomSwitch.css';





const CustomSwitch = (props) => {

  return (
    <>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
    </>
  );
}

export default CustomSwitch;
