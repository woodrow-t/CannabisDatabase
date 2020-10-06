
import React, { useState } from 'react';

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
    <Navbar color="light" light expand="md">
        <NavbarBrand className="title" href="/"><h1>Eden</h1></NavbarBrand>
        <NavbarToggler className="hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="nav-list" navbar>
                <NavItem>
                    <Link to="/race">Get Started!</Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Races
                </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Sativa
                  </DropdownItem>
                        <DropdownItem>
                            Indica
                  </DropdownItem>
                        <DropdownItem>
                            Hybrid
                  </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>
    </Navbar> 
);
}