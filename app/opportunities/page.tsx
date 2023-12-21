"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Meta from '../components/Meta'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './page.css'


export default function Page() {
    return <>
        <Meta title="Oportunidades" />
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Card className='opportunityCard'>
                        <Card.Img variant="top" src="1-0.webp" className='opp-card-img' />
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
                    <Card className='opportunityCard'>
                        <Card.Img variant="top" src="2-0.webp" className='opp-card-img' />
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
                                <small className='floatRight text-muted'>0 / 1000</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Diária Média</span>
                                <small className='floatRight text-muted'>$419</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <Card className='opportunityCard'>
                        <Card.Img variant="top" src="3-0.webp" className='opp-card-img' />
                        <Card.Body>
                            <Card.Title>Casa 3 Quartos - 5min do MK</Card.Title>
                            <Card.Text>
                                <small>
                                    Uma descrição curta mas legal da casa para atrair investidores
                                </small>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <span className='start-0'>Taxa de Ocupação</span>
                                <small className='floatRight text-muted'>87%</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Cotas Disponíveis</span>
                                <small className='floatRight text-muted'>200 / 1000</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Diária Média</span>
                                <small className='floatRight text-muted'>$259</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col>
                    <Card className='opportunityCard'>
                        <Card.Img variant="top" src="4-0.webp" className='opp-card-img' />
                        <Card.Body>
                            <Card.Title>Casa 3 Quartos - Rancho Blue</Card.Title>
                            <Card.Text>
                                <small>
                                    Uma descrição curta mas legal da casa para atrair investidores
                                </small>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <span className='start-0'>Taxa de Ocupação</span>
                                <small className='floatRight text-muted'>79%</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Cotas Disponíveis</span>
                                <small className='floatRight text-muted'>400 / 1000</small>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className='start-0'>Diária Média</span>
                                <small className='floatRight text-muted'>$229</small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container >
    </>;
}