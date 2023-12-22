"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import { NavItem, NavDropdownItem } from './NavItems'
import NavDropdown from 'react-bootstrap/NavDropdown';

const logoStyle = {
    marginRight: '10px',
};

export default function Menu() {
    return (
        <Navbar expand="lg" className="border-bottom">
            <Container>
                <Image
                    alt=""
                    src="/logo.png"
                    width="40"
                    height="40"
                    className='mr-5'
                    style={logoStyle}
                />
                <Navbar.Brand href="/">
                    AirShare
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavItem text='Dashboard' path="/dashboard" />
                        <NavItem text='Oportunidades' path="/opportunities" />
                        <NavDropdown title="Detalhes" id="basic-nav-dropdown">
                            <NavDropdownItem path="/property_account" text="Movimetações" />
                            <NavDropdownItem path="/reservations" text="Reservas" />
                            <NavDropdown.Divider />
                            <NavDropdownItem path="/reports" text="Relatórios" />
                        </NavDropdown>
                        <NavItem text='Conta' path="/digital_account" />
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/profile"></Nav.Link>
                        <NavDropdown title="Daniel Arraes" id="basic-nav-dropdown">
                            <NavDropdownItem path="/profile" text="Perfil" />
                            <NavDropdown.Divider />
                            <NavDropdownItem path="/help" text="Ajuda" />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}