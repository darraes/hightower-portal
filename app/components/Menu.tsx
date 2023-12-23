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
                        <NavItem text='Oportunidades' path="/opportunities/list" />
                        <NavItem text='Propriedades' path="/properties/list" />
                        <NavDropdown title="Financeiro" id="basic-nav-dropdown">
                            <NavDropdownItem path="/digital_account/property" text="Movimetações" />
                            <NavDropdownItem text='Conta' path="/digital_account/user" />
                            <NavDropdownItem path="/reservations/list" text="Reservas" />
                            <NavDropdown.Divider />
                            <NavDropdownItem path="/reports" text="Relatórios" />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/profile"></Nav.Link>
                        <NavDropdown title="Daniel Arraes" id="basic-nav-dropdown">
                            <NavDropdownItem path="/settings" text="Perfil" />
                            <NavDropdown.Divider />
                            <NavDropdownItem path="/help" text="Ajuda" />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}