"use client";

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavItem({ text, path }: { text: string, path: string }) {
    return (
        <Nav.Link href={path}>{text}</Nav.Link>
    )
}

export function NavDropdownItem({ text, path }: { text: string, path: string }) {
    return (
        <NavDropdown.Item href={path}>{text}</NavDropdown.Item>
    )
}

