import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Meta from './components/Meta'


export default function Page() {
  return <>
    <Meta title="Main" />
    <Container>
      <Row>
        <Col>Portal</Col>
      </Row>
    </Container>
  </>;
}