import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import '../css/FormNav.css';
import BlueBar from './BlueBar'

const FormNav = (props) => {
  return (
    <div id='formNavDiv'>
      <Nav id='formNav'>
        <NavItem id='nav1'>
            <div className='textPad'></div>
            <input type="radio" value="skills" id='skills' checked={props.form === 'skills'} onChange={props.handleTabClick} />
          <label className='radioLabel' htmlFor='skills' >
            Skills
          </label>
        </NavItem>
        <NavItem id='nav2'>
            <div className='textPad'></div>
            <input type="radio" value="equip" id='equip' checked={props.form === 'equip'} onChange={props.handleTabClick} />

          <label className='radioLabel' htmlFor='equip' >
            Equipment
          </label>
        </NavItem>
        <NavItem id='nav3'>
            <div className='textPad'></div>
            <input type="radio" value="certs" id='certs' checked={props.form === 'certs'} onChange={props.handleTabClick}/>
          <label className='radioLabel' htmlFor='certs' >
            Certifications
          </label>
        </NavItem>

      </Nav>
      <div className='navSlider' >
        <BlueBar form={props.form}/>
      </div>
    </div>
  );
}

export default FormNav;
