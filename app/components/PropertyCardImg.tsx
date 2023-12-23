import Card from 'react-bootstrap/Card';
import Link from 'next/link'

export default function PropertyCardImg({ path, id, imgSrc }: { path: string, id: string, imgSrc: string }) {
    return (
        <Link href={{
            pathname: path,
            query: {
                id: id
            }
        }}>
            <Card.Img variant="top" src={imgSrc} className='property-card-img' />
        </Link>);
}