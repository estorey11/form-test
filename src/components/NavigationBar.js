import React, { useState } from 'react';
import '../css/NavigationBar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../images/laborocity_logo_main.svg'
import Menu from '../images/menu.svg'

const barStyle= {
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  height: '60px',
  left: '0px',
  top: '0px',
  padding: '0px'
}

const logoStyle = {
  width: '154.78px',
  height: '29.3px',
  marginLeft: '25px',
  marginTop: '.34px'
};

const menuStyle = {
  marginRight: '25px',
  marginTop: '.5px'
};


const NavigationBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

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

export default NavigationBar;
