import React from 'react';
import skillImage from '../images/skills_header_image 1.svg'


const style= {
  marginTop: '20px',
  marginBottom: '9px'
}

const SkillImage = (props) => {

  return (
    <div>
      <img style={style} src={skillImage}/>
    </div>
  );
}

export default SkillImage;
