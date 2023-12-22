import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'

export default function MoneyMovementTable(
    { disablePagination, recordsPerPage }: { disablePagination: boolean, recordsPerPage: number }) {
    return (<Table responsive>
        <thead>
            <tr>
                <th></th>
                <th>Data</th>
                <th>Tipo</th>
                <th>Propriedade</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>12/03/2024</td>
                <td>Hospedagem</td>
                <td><small className="text-muted">122 Disney Springs, Orlando, FL 44555</small></td>
                <td>
                    <small className="text-muted">Pagamento da reserva <Link href='#'>34RFT7</Link></small>
                </td>
                <td>R$ 4.762,09</td>
                <td><Button className='floatRight' variant="outline-dark" size="sm">Ver</Button></td>
            </tr>
            <tr>
                <td></td>
                <td>16/03/2024</td>
                <td>Gerenciamento</td>
                <td><small className="text-muted">122 Disney Springs, Orlando, FL 44555</small></td>
                <td>
                    <small className="text-muted">Taxa de gerenciamento referente à reserva <Link href='#'>34RFT7</Link></small>
                </td>
                <td>(R$ 476,90)</td>
                <td><Button className='floatRight' variant="outline-dark" size="sm">Ver</Button></td>
            </tr>
            <tr>
                <td></td>
                <td>21/03/2024</td>
                <td>Distribuição</td>
                <td><small className="text-muted">122 Disney Springs, Orlando, FL 44555</small></td>
                <td>
                    <small className="text-muted">Distribuição de lucro à cliente</small>
                </td>
                <td>(R$ 3.838,1)</td>
                <td><Button className='floatRight' variant="outline-dark" size="sm">Ver</Button></td>
            </tr>
        </tbody>
    </Table>);
}