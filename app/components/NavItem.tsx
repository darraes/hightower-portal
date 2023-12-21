"use client";

import Nav from 'react-bootstrap/Nav';

const currentPageNavLinkStyle = {
    textDecoration: 'underline'
}

export default function NavItem({ text, path }: { text: string, path: string }) {
    const currentPath = window.location.pathname;
    const linkStyle = (currentPath.endsWith(path) ? currentPageNavLinkStyle : {})

    return (
        <Nav.Link href={path} style={linkStyle}>{text}</Nav.Link>
    )
}

