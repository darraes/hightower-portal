"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropertyCardImg from '../../components/PropertyCardImg'


export default function Page() {
    return <>
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Card className='propertyCard'>
                        <PropertyCardImg path='/opportunies/view' id='123' imgSrc="../1-0.webp" />
                        <Card.Body>
                            <Card.Title>Casa 4 Quartos - Disney Springs</Card.Title>
                            <Card.Text>
                                <small>
                                    Uma descrição curta mas legal da casa para atrair investidores
                                </small>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <span className='start-0'>Taxa de Ocupação</span>
                                <small className='floatRight text-muted'>83%</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Cotas Disponíveis</span>
                                <small className='floatRight text-muted'>120 / 1200</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Diária Média</span>
                                <small className='floatRight text-muted'>$319</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <Card className='propertyCard'>
                        <PropertyCardImg path='/opportunies/view' id='123' imgSrc="../2-0.webp" />
                        <Card.Body>
                            <Card.Title>Casa 5 Quartos - Super Piscina</Card.Title>
                            <Card.Text>
                                <small>
                                    Uma descrição curta mas legal da casa para atrair investidores
                                </small>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <span className='start-0'>Taxa de Ocupação</span>
                                <small className='floatRight text-muted'>81%</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Cotas Disponíveis</span>
                                <small className='floatRight text-muted'>300 / 1000</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Diária Média</span>
                                <small className='floatRight text-muted'>$419</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container >
    </>;
}