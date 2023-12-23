import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from './Image'


export default function PropertyImagePresenter({ id }: { id: string | null }) {
    return <>
        <Container>
            <Row>
                <Col xs={12} md={8} >
                    <Image alt='image-1' src="/1-0.webp" />
                </Col>
                <Col xs={6} md={4}>
                    <Row>
                        <Image alt='image-1' src="/2-0.webp" />
                    </Row>
                    <Row className="mt-3">
                        <Image alt='image-1' src="/2-0.webp" />
                    </Row>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Button className='floatRight img-overlay-button' variant="outline-dark" size="sm">37 Imagens</Button>
                </Col>
            </Row>
        </Container>
    </>;
}