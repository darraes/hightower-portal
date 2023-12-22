import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function PropertyDigitalAccountTable(
    { disablePagination, recordsPerPage }: { disablePagination: boolean, recordsPerPage: number }) {
    return (<Table responsive>
        <thead>
            <tr>
                <th>Código</th>
                <th>Fonte</th>
                <th>Status</th>
                <th>Propriedade</th>
                <th>Hóspede</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Valor Total</th>
                <th>Custos</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>AA34FT</td>
                <td>Airbnb</td>
                <td>Reservado</td>
                <td><small className="text-muted">122 Disney Springs, Orlando, FL 44555</small></td>
                <td><small className="text-muted">João e o Pé de Feijão</small></td>
                <td>12/03/2024</td>
                <td>16/03/2024</td>
                <td>R$ 4.762,09</td>
                <td>R$ 1.163,73</td>
                <td><Button className='floatRight' variant="outline-dark" size="sm">Ver</Button></td>
            </tr>
            <tr>
                <td>AD67BC</td>
                <td>Airbnb</td>
                <td>Cancelada</td>
                <td><small className="text-muted">1456 Rancho Juanita, Orlando, FL 44565</small></td>
                <td><small className="text-muted">Mickey e Minnie</small></td>
                <td>09/02/2024</td>
                <td>15/02/2024</td>
                <td>R$ 7.762,09</td>
                <td>R$ 2.103,73</td>
                <td><Button className='floatRight' variant="outline-dark" size="sm">Ver</Button></td>
            </tr>
            <tr>
                <td>89UJIH</td>
                <td>Direto</td>
                <td>Finalizada</td>
                <td><small className="text-muted">122 Disney Springs, Orlando, FL 44555</small></td>
                <td><small className="text-muted">Franchesca Mizzoni</small></td>
                <td>28/12/2023</td>
                <td>05/01/2024</td>
                <td>R$ 8.962,09</td>
                <td>R$ 1.563,73</td>
                <td><Button className='floatRight' variant="outline-dark" size="sm">Ver</Button></td>
            </tr>
        </tbody>
    </Table>);
}