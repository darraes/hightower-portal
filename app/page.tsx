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

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

  var futureMonthAttributes = [
    [{ name: "Receita", value: 'R$ 1.019,76' }, { name: "Reservas", value: "3" }],
    [{ name: "Despesas", value: 'R$ 200,00' }, { name: "Ocupação", value: "89%%" }],
    [{ name: "Lucro", value: 'R$ 819,76' }, { name: "Pagamentos", value: 'R$ 819,76' }]
  ];
  var futureYearAttributes = [
    [{ name: "Receita", value: 'R$ 10.019,76' }, { name: "Reservas", value: "19" }],
    [{ name: "Despesas", value: 'R$ 2.000,00' }, { name: "Ocupação", value: "59%" }],
    [{ name: "Lucro", value: 'R$ 1.819,76' }, { name: "Pagamentos", value: 'R$ 819,76' }]
  ];
  var futureTotalAttributes = [
    [{ name: "Receita", value: "R$ 143.867,12" }, { name: "Reservas", value: "49" }],
    [{ name: "Despesas", value: "R$ 12.234,99" }, { name: "Ocupação", value: "-" }],
    [{ name: "Lucro", value: "R$ 138.547.98" }, { name: "Pagamentos", value: "R$ 135.141.91" }]
  ];


  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'];

  const optionsIncome = {
    scales: {
      y: {
        ticks: {
          callback: function (value: any, index: any, values: any[]) {
            return 'R$' + value.toFixed(2);
          }
        }
      }
    }
  };

  const dataIncome = {
    labels,
    datasets: [
      {
        label: 'Receita dos Últimos 12 Meses',
        data: [2541, 3150, 1900, 4001, 4900, 3600, 3500, 3100, 2900],
        backgroundColor: 'rgba(53, 162, 235, 0.7)',
      },
    ],
  };

  const dataReservedDays = {
    labels,
    datasets: [
      {
        label: 'Dias Reservados dos Últimos 12 Meses',
        data: [21, 22, 25, 19, 26, 20, 18, 14, 19],
        borderColor: 'rgba(53, 162, 235, 0.7)',
        backgroundColor: 'rgba(53, 162, 235, 0.7)',
      },
    ],
  };

  return <>
    <Meta title="Main" />
    <Container className='mt-5'>
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
      <Row className='mt-5'><h3>Previsto</h3></Row>
      <Row>
        <Col>
          <MDBCard >
            <MDBRow className='g-0'>
              <MDBCol md='4' className='borderOffset'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Esse Mês <small className='text-muted'>({month})</small></MDBCardTitle>
                  <AttributeContainer attributes={futureMonthAttributes} />
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4' className='borderOffset'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Esse Ano <small className='text-muted'>({year})</small></MDBCardTitle>
                  <AttributeContainer attributes={futureYearAttributes} />
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4'>
                <MDBCardBody>
                  <MDBCardTitle className='mb-3'>Total <small className='text-muted'>(desde 04/2021)</small></MDBCardTitle>
                  <AttributeContainer attributes={futureTotalAttributes} />
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className='mt-5'><h3>Progresso</h3></Row>
      <Row>
        <Col className='progressChart'>
          <Bar className='floatLeft progressChart' options={optionsIncome} data={dataIncome} />
        </Col>
        <Col className='progressChart'>
          <Line className='floatRight progressChart' options={{}} data={dataReservedDays} />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className='mt-5'>
        <Col><h3>Últimas Movimentações</h3></Col>
        <Col><Button className='floatRight' variant="outline-dark" size="sm">Ver Todas</Button>{' '}</Col>
      </Row>
      <Row>
        <Col className='progressChart'>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 8 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 8 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 8 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 8 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </>;
}