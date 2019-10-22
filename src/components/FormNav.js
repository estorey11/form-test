import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import '../css/FormNav.css';

const FormNav = (props) => {
  return (
    <div>
      <Nav id='formNav'>
        <NavItem id='nav1'>
            <div class='textPad'></div>
            <input type="radio" value="skills" id='skills' checked={props.form === 'skills'} onChange={props.handleTabClick} />
          <label class='radioLabel' for='skills' >
            Skills
          </label>
        </NavItem>
        <NavItem id='nav2'>
            <div class='textPad'></div>
            <input type="radio" value="equip" id='equip' checked={props.form === 'equip'} onChange={props.handleTabClick} />

          <label class='radioLabel' for='equip' >
            Equipment
          </label>
        </NavItem>
        <NavItem id='nav3'>
            <div class='textPad'></div>
            <input type="radio" value="certs" id='certs' checked={props.form === 'certs'} onChange={props.handleTabClick}/>
          <label class='radioLabel' for='certs' >
            Certifications
          </label>
        </NavItem>
      </Nav>
    </div>
  );
}

export default FormNav;
