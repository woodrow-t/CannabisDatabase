
import React, { useState } from 'react';
import "./NavBar.scss"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Link} from "react-router-dom";

export default function NavBar (){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <Navbar className="navbar" light expand="md">
            <Link className="title" to="/"><img className="eden-logo" src="https://i.imgur.com/sFo519A.png"></img></Link>
        <NavbarToggler className="hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="nav-list" navbar>
                <NavItem>
                    <Link to="/race"><p>Get Started!</p></Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <p>Races</p>
                </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <Link to="/race/sativa"><p className="drop-list">Sativa</p></Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/race/indica"><p className="drop-list">Indica</p></Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/race/hybrid"><p className="drop-list">Hybrid</p></Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>
    </Navbar> 
);
}