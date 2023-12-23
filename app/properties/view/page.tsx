"use client"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertyImagePresenter from '../../components/PropertyImagePresenter'
import { useSearchParams } from 'next/navigation'
import { AttributeHList, AttribType } from '@/app/components/Attribute';
import Image from '../../components/Image'
import Link from 'next/link'



export default function Page() {
  const searchParams = useSearchParams()
  console.log("property id: " + searchParams.get("id"))

  var priorityAttribs =
    [
      { name: "Preço Atual", value: "U$ 929,000.00" },
      { name: "Quartos", value: "4" },
      { name: "Banheiros", value: "3" },
      { name: "Metros Quadrados", value: "142" },
      { name: "Ocupação (12M)", value: "81%" },
      { name: "Cotas", value: "0/1000" },
    ];

  return <>
    <Container>
      <Row className="mt-4"><Col><h3>122 Disney Springs, Orlando, FL 44555</h3></Col></Row>
      <Row className="mt-3">
        <Col>
          <PropertyImagePresenter id={searchParams.get("id")} />
        </Col>
      </Row>
      <Row >
        <Col>
          <Container>
            <Row>
              <Col xs={10} md={7} >
                <div>
                  <AttributeHList attributes={priorityAttribs} type={AttribType.Inverted} />
                </div>
              </Col>
              <Col xs={2} md={1} >
                <Link href="https://www.google.com/maps/place/870+Reflection+Ln,+Weston,+FL+33327,+USA">
                  <Image alt='image-1' src="/gmaps.jpeg" />
                </Link>
              </Col>
              <Col xs={6} md={4}>
                
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container >
  </>;
}