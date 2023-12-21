"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Meta from './components/Meta'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import {monthText} from './utils/DateTimeUtils';

export default function Page() {
  const month = monthText(new Date().getMonth());
  const year = new Date().getFullYear().toString();

  return <>
    <Meta title="Main" />
    <Container>
      <Row>
        <Col>
          <MDBCard >
            <MDBRow className='g-0'>
            <MDBCol md='4'>
                <MDBCardBody>
                  <MDBCardTitle>Esse Mês <small className='text-muted'>({month})</small></MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional content. This
                          content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small className='text-muted'>Last updated 3 mins ago</small>
                        </MDBCardText>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4'>
                <MDBCardBody>
                  <MDBCardTitle>Esse Ano <small className='text-muted'>({year})</small></MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional content. This
                          content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small className='text-muted'>Last updated 3 mins ago</small>
                        </MDBCardText>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4'>
                <MDBCardBody>
                  <MDBCardTitle>Total</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a natural lead-in to additional content. This
                          content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>
                          <small className='text-muted'>Last updated 3 mins ago</small>
                        </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Col>
      </Row>
    </Container>
  </>;
}