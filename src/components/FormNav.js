import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';

const FormNav = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <Button onClick={props.handleTabClick} name="skills">Skills</Button>
        </NavItem>
        <NavItem>
          <Button onClick={props.handleTabClick} name="equip">Equipment</Button>
        </NavItem>
        <NavItem>
          <Button onClick={props.handleTabClick} name="cert">Certification</Button>
        </NavItem>
      </Nav>
    </div>
  );
}

export default FormNav;
