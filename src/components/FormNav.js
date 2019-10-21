import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../css/FormNav.css';

const FormNav = (props) => {
  return (
    <div>
      <Nav id='formNav'>
        <NavItem id='nav1'>
          <label>
            <input type="radio" value="skills" checked={props.form === 'skills'} onChange={props.handleTabClick} />
            Skills
          </label>
        </NavItem>
        <NavItem id='nav2'>
          <label>
            <input type="radio" value="equip" checked={props.form === 'equip'} onChange={props.handleTabClick} />
            Equipment
          </label>
        </NavItem>
        <NavItem id='nav3'>
          <label>
            <input type="radio" value="certs" checked={props.form === 'certs'} onChange={props.handleTabClick}/>
            Certifications
          </label>
        </NavItem>
      </Nav>
    </div>
  );
}

export default FormNav;
