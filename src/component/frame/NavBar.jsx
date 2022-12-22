import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
const links = [
 
  { href: '#card', text: 'Les Bars'},
  { href: '#about', text: 'Connexion', className: '.text-right' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink className={className}>{text}</NavLink>
  </NavItem>
);

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">NOM DU SITE</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className='text-right'>
                          <Link to="/"> Acceuil </Link>
                        </NavItem>
                        <NavItem className='text-right'>
                          <Link to="/Connexion">Connexion</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
          
      </div>
    );
  }
}
