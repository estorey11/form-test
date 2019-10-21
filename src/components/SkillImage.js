import React from 'react';
import skillImage from '../images/skills_header_image 1.svg'
import skillText from '../images/Here you can select.svg'


const style= {
  marginTop: '20px',
  marginBottom: '15px'
}

const textStyle={
  marginBottom: '15px'
}

const SkillImage = (props) => {

  return (
    <div>
      <img style={style} src={skillImage}/>
      <div>
        <img style={textStyle} src={skillText}/>
      </div>
    </div>
  );
}

export default SkillImage;
