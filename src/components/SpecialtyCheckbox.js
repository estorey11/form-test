import React from 'react';
import checkbox_checked from '../images/checkbox_checked.svg'
import checkbox_unchecked from '../images/checkbox_unchecked.svg'


const SpecialtyCheckbox = (props) => {
  if (props.checked) {
    return (
        <img
          src={checkbox_checked}
        />
    );
  }
  return (
      <img
        src={checkbox_unchecked}
      />
  );
}

export default SpecialtyCheckbox;
