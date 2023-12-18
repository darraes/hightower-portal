"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'

const logoStyle = {
    marginRight: '10px',
};

export default function Menu() {
    const currentPath = window.location.pathname;

    return (
        <Navbar expand="lg" className="border-bottom">
            <Container>
                <Image
                    alt=""
                    src="/logo.png"
                    width="40"
                    height="40"
                    style={logoStyle}
                />
                <Navbar.Brand href="/">
                    AirShare
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/opportunities">Oportunidades</Nav.Link>
                        <Nav.Link href="/about">Sobre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Cliente <a href="/profile">Daniel Arraes</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}