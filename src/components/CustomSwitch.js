import React from 'react';
import '../css/CustomSwitch.css';





const CustomSwitch = (props) => {

  return (
    <div>
      <Navbar style={barStyle}>
          <img style={logoStyle} src={Logo}/>

          <img  style={menuStyle} src={Menu}/>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomSwitch;
