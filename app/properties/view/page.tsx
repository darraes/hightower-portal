"use client"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertyImagePresenter from '../../components/PropertyImagePresenter'
import { useSearchParams } from 'next/navigation'
import { AttributeList, AttribType } from '@/app/components/Attribute';
import Image from 'next/image'
import Label from '../../components/Label'
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
      <Row className="mt-4">
        <Col>
          <Container>
            <Row>
              <Col><h3>122 Disney Springs, Orlando, FL 44555</h3></Col>
              <Col>
                <Link className='floatRight' href="https://www.google.com/maps/place/870+Reflection+Ln,+Weston,+FL+33327,+USA">
                  <Image width={32} height={32} alt='image-1' src="/gmaps.jpeg" />
                </Link>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <PropertyImagePresenter id={searchParams.get("id")} />
        </Col>
      </Row>
      <Row >
        <Col>
          <Container>
            <Row>
              <Col xs={12} md={8} >
                <div>
                  <AttributeList attributes={priorityAttribs} type={AttribType.Inverted} />
                </div>
              </Col>
              <Col xs={6} md={4}>
                <Row>
                  <Col className='floatLeft'>
                    <Label img='/house-ico.png' text="Casa Individual" />
                    <Label img='/car-ico.png' text="3 Garagens" />
                    <Label img='/tool-ico.png' text="2001 / 2023" />
                    <Label img='/houses-ico.png' text="Condomínio" />
                  </Col>
                  <Col className='floatLeft'>
                    <Label img='/thermo-ico.png' text="Possui AC" />
                    <Label img='/dollar-ico.png' text="HOA U$129" />
                    <Label img='/fence-ico.png' text="Lote de 400m2" />
                    <Label img='/ruler-ico.png' text="Parques a 1KM" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container >
  </>;
}