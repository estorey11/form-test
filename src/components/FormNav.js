import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';

const FormNav = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <Button >Skills</Button>
        </NavItem>
        <NavItem>
          <Button >Equipment</Button>
        </NavItem>
        <NavItem>
          <Button >Certification</Button>
        </NavItem>
      </Nav>
    </div>
  );
}

export default FormNav;
