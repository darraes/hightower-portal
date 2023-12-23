"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { monthText } from '../utils/DateTimeUtils';
import { AttributeBox } from '../components/Attribute';
import Image from 'next/image';
import ReservationsTable from '../reservations/ReservationsTable'
import PropertyDigitalAccountTable from '../digital_account/property/PropertyDigitalAccountTable'

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
        [{ name: "Receita", value: 'R$ 3.019,76' }, { name: "Reservas", value: "4" }],
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
        <Container>
            <Row className='mt-4'><h3>Propriedades</h3></Row>
            <Row>
                <Col>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th key='1'>Endereço</th>
                                <th key='2'>Cotas</th>
                                <th key='3'>Ocupação (12 Meses)</th>
                                <th key='4'>Receita (12 Meses)</th>
                                <th key='5'>Lucro (12 Meses)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Image className='propertyImg' src="/1-0.webp" width={40} height={30} alt='property image'></Image></td>
                                <td key='1' className='propertyTextCell'>122 Disney Springs, Orlando, FL 44555</td>
                                <td key='2' className='propertyTextCell'>250/1200</td>
                                <td key='3' className='propertyTextCell'>81%</td>
                                <td key='4' className='propertyTextCell'>R$ 48.762,09</td>
                                <td key='5' className='propertyTextCell'>R$ 42.163,73</td>
                                <td><Button className='floatRight' variant="outline-dark" size="sm">Ver</Button></td>
                            </tr>
                            <tr>
                                <td><Image className='propertyImg' src="/2-0.webp" width={40} height={30} alt='property image'></Image></td>
                                <td key='1' className='propertyTextCell'>1456 Rancho Juanita, Orlando, FL 44565</td>
                                <td key='2' className='propertyTextCell'>300/900</td>
                                <td key='3' className='propertyTextCell'>79%</td>
                                <td key='4' className='propertyTextCell'>R$ 58.762,09</td>
                                <td key='5' className='propertyTextCell'>R$ 51.167,73</td>
                                <td><Button className='floatRight' variant="outline-dark" size="sm">Ver</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className='mt-4'><h3>Realizados</h3></Row>
            <Row>
                <Col>
                    <MDBCard >
                        <MDBRow className='g-0'>
                            <MDBCol md='4' className='borderOffset'>
                                <MDBCardBody>
                                    <MDBCardTitle className='mb-3'>Esse Mês <small className='text-muted'>({month})</small></MDBCardTitle>
                                    <AttributeBox attributes={currentMonthAttributes} />
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol md='4' className='borderOffset'>
                                <MDBCardBody>
                                    <MDBCardTitle className='mb-3'>Esse Ano <small className='text-muted'>({year})</small></MDBCardTitle>
                                    <AttributeBox attributes={currentYearAttributes} />
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBCardBody>
                                    <MDBCardTitle className='mb-3'>Total <small className='text-muted'>(desde 04/2021)</small></MDBCardTitle>
                                    <AttributeBox attributes={totalAttributes} />
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
                                    <AttributeBox attributes={futureMonthAttributes} />
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol md='4' className='borderOffset'>
                                <MDBCardBody>
                                    <MDBCardTitle className='mb-3'>Esse Ano <small className='text-muted'>({year})</small></MDBCardTitle>
                                    <AttributeBox attributes={futureYearAttributes} />
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBCardBody>
                                    <MDBCardTitle className='mb-3'>Total <small className='text-muted'>(desde 04/2021)</small></MDBCardTitle>
                                    <AttributeBox attributes={futureTotalAttributes} />
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
                <Col><h3>Últimas Reservas</h3></Col>
                <Col><Button className='floatRight' variant="outline-dark" size="sm">Ver Todas</Button></Col>
            </Row>
            <Row>
                <Col>
                    <ReservationsTable disablePagination={true} recordsPerPage={10} />
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className='mt-5'>
                <Col><h3>Últimas Movimentações</h3></Col>
                <Col><Button className='floatRight' variant="outline-dark" size="sm">Ver Todas</Button></Col>
            </Row>
            <Row>
                <Col>
                    <PropertyDigitalAccountTable disablePagination={true} recordsPerPage={10} />
                </Col>
            </Row>
        </Container>

    </>;
}