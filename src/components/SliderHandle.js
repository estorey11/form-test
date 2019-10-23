import React from 'react';
import slider_handle from '../images/slider_handle.svg'



const SliderHandle = (props) => {

  return (
      <img
        src={slider_handle}
        style={{
          position: 'relative',
          bottom: '8px',
          right: '10px'
        }}
         />
  );
}

export default SliderHandle;
