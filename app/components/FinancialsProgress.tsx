import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FinancialsType } from './FinancialsType';
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

const chartStyle = {
    height: '18em',
};

const containerStyle = {
    paddingRight: '0',
    paddingLeft: '0',
};

export function FinancialsProgressCharts({ type }: { type: FinancialsType }) {
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

    return (
        <Container style={containerStyle}>
            <Row>
                <Col style={chartStyle}>
                    <Bar style={chartStyle} className='floatLeft ' options={optionsIncome} data={dataIncome} />
                </Col>
                <Col style={chartStyle}>
                    <Line style={chartStyle} className='floatRight' options={{}} data={dataReservedDays} />
                </Col>
            </Row>
        </Container>
    );
}