"use client";

import { AttributeBox } from '../components/Attribute';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { monthText } from '../utils/DateTimeUtils';
import { FinancialsType } from './FinancialsType';

export function FinancialsCard({ type }: { type: FinancialsType}) {
    const month = monthText(new Date().getMonth());
    const year = new Date().getFullYear().toString();

    var monthAttributes = [
        [{ name: "Receita", value: 'R$ 3.019,76' }, { name: "Reservas", value: "4" }],
        [{ name: "Despesas", value: 'R$ 1.000,00' }, { name: "Ocupação", value: "82%" }],
        [{ name: "Lucro", value: 'R$ 2.019,76' }, { name: "Pagamentos", value: 'R$ 1.559,31' }]
    ];
    var yearAttributes = [
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

    if (type == FinancialsType.PropertyFuture || type == FinancialsType.UserFuture) {
        monthAttributes = futureMonthAttributes
        yearAttributes = futureYearAttributes
        totalAttributes = futureTotalAttributes
    }

    return (
        <MDBCard >
            <MDBRow className='g-0'>
                <MDBCol md='4' className='borderOffset'>
                    <MDBCardBody>
                        <MDBCardTitle className='mb-3'>Esse Mês <small className='text-muted'>({month})</small></MDBCardTitle>
                        <AttributeBox attributes={monthAttributes} />
                    </MDBCardBody>
                </MDBCol>
                <MDBCol md='4' className='borderOffset'>
                    <MDBCardBody>
                        <MDBCardTitle className='mb-3'>Esse Ano <small className='text-muted'>({year})</small></MDBCardTitle>
                        <AttributeBox attributes={yearAttributes} />
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
    )
}