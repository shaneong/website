import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Gurjot Singh Makkar</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://drive.google.com/open?id=1vzrn9NII-yxi75btk1AtHsNyACclvmrB">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/gurjotsinghmakkar/">LinkedIn</NavLink>
              </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/gurjotmakkar">Github</NavLink>
                </NavItem>
              <NavItem>
                <NavLink href="https://medium.com/@gurjotsingh">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com/const_gurjot">Twitter</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
