"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'next/navigation'



export default function Page() {
    const searchParams = useSearchParams()
    console.log("property id: " + searchParams.get("id"))

    return <>
        <Container>
            <Row>
                <Col>Opportunity View</Col>
            </Row>
        </Container>
    </>;
}