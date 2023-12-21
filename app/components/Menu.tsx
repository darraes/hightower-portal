"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import NavItem from './NavItem'

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
                        <NavItem text='Dashboard' path="/"/>
                        <NavItem text='Oportunidades' path="/opportunities"/>
                        <NavItem text='Movimentações' path="/money_movement"/>
                        <NavItem text='Ajuda' path="/help"/>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Navbar.Text>
                            Cliente:
                        </Navbar.Text>
                        <Nav.Link href="/profile">Daniel Arraes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}