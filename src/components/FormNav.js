import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../css/FormNav.css';

const FormNav = (props) => {
  return (
    <div>
      <Nav id='formNav'>
        <NavItem id='nav1'>
          <button class='navButton' onClick={props.handleTabClick} name="skills">Skills</button>
        </NavItem>
        <NavItem id='nav2'>
          <button class='navButton' onClick={props.handleTabClick} name="equip">Equipment</button>
        </NavItem>
        <NavItem id='nav3'>
          <button class='navButton' onClick={props.handleTabClick} name="cert">Certifications</button>
        </NavItem>
      </Nav>
    </div>
  );
}

export default FormNav;
