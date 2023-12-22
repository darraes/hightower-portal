"use client";

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const currentPageNavLinkStyle = {
    textDecoration: 'underline'
}

function getNavStyle(path: string) {
    const currentPath = window.location.pathname;
    return (currentPath.endsWith(path) ? currentPageNavLinkStyle : {})
}

export function NavItem({ text, path }: { text: string, path: string }) {
    return (
        <Nav.Link href={path} style={getNavStyle(path)}>{text}</Nav.Link>
    )
}

export function NavDropdownItem({ text, path }: { text: string, path: string }) {
    return (
        <NavDropdown.Item href={path} style={getNavStyle(path)}>{text}</NavDropdown.Item>
    )
}

