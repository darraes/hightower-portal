"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Meta from './components/Meta'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { monthText } from './utils/DateTimeUtils';
import { AttributeContainer } from './components/Attribute';

import './page.css'

export default function Page() {
  const month = monthText(new Date().getMonth());
  const year = new Date().getFullYear().toString();

  var currentMonthAttributes = [
    [{ name: "Receita", value: 'R$ 3.019,76' }, { name: "Reservas", value: "21" }],
    [{ name: "Despesas", value: 'R$ 1.000,00' }, { name: "Ocupação", value: "82%" }],
    [{ name: "Lucro", value: 'R$ 2.019,76' }, { name: "Pagamentos", value: 'R$ 1.559,31' }]
  ];
  var currentYearAttributes = [
    [{ name: "Receita", value: "R$ 43.867,12" }, { name: "Reservas", value: "21" }],
    [{ name: "Despesas", value: "R$ 5.234,99" }, { name: "Ocupação", value: "79%" }],
    [{ name: "Lucro", value: "R$ 38.547.98" }, { name: "Pagamentos", value: "R$ 35.141.91" }]
  ];
  var totalAttributes = [
    [{ name: "Receita", value: "R$ 143.867,12" }, { name: "Reservas", value: "49" }],
    [{ name: "Despesas", value: "R$ 12.234,99" }, { name: "Ocupação", value: "79%" }],
    [{ name: "Lucro", value: "R$ 138.547.98" }, { name: "Pagamentos", value: "R$ 135.141.91" }]
  ];

  return <>
    <Meta title="Main" />

    <Container className='mt-4'>
      <Row><h3>Realizados</h3></Row>
      <Row>
        <Col>
          <MDBCard >
            <MDBRow className='g-0'>
              <MDBCol md='4' className='borderOffset'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Esse Mês <small className='text-muted'>({month})</small></MDBCardTitle>
                  <AttributeContainer attributes={currentMonthAttributes} />
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4' className='borderOffset'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Esse Ano <small className='text-muted'>({year})</small></MDBCardTitle>
                  <AttributeContainer attributes={currentYearAttributes} />
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Total <small className='text-muted'>(desde 04/2021)</small></MDBCardTitle>
                  <AttributeContainer attributes={totalAttributes} />
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Col>
      </Row>
      <Row className='mt-4'><h3>Previsto</h3></Row>
      <Row>
        <Col>
          <MDBCard >
            <MDBRow className='g-0'>
              <MDBCol md='4' className='borderOffset'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Esse Mês <small className='text-muted'>({month})</small></MDBCardTitle>
                  <AttributeContainer attributes={currentMonthAttributes} />
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4' className='borderOffset'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Esse Ano <small className='text-muted'>({year})</small></MDBCardTitle>
                  <AttributeContainer attributes={currentYearAttributes} />
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Total <small className='text-muted'>(desde 04/2021)</small></MDBCardTitle>
                  <AttributeContainer attributes={totalAttributes} />
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Col>
      </Row>
    </Container>
  </>;
}