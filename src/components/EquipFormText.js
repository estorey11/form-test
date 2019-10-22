import React from 'react';
import equip_text from '../images/equip_text.svg'


const divStyle= {
  height: '110px',
  width: '100%',
  background: '#FFFFFF'
}

const textStyle={
  marginTop: '30px'
}

const EquipFormText = (props) => {

  return (
    <div style={divStyle}>
      <img style={textStyle} src={equip_text}/>
    </div>
  );
}

export default EquipFormText;
