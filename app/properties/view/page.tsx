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
import { FinancialsCard } from '../../components/FinancialsCard'
import Button from 'react-bootstrap/Button';
import { FinancialsType } from '../../components/FinancialsType';
import { FinancialsProgressCharts } from '../../components/FinancialsProgress'
import ReservationsTable from '../../reservations/ReservationsTable'
import { CitadelClient } from '../../server/Citadel'
import React, { useState, useEffect } from 'react';

const detailsButtonStyle = {
  marginTop: '15px',
  marginRight: '40px'
};




export default function Page() {
  const searchParams = useSearchParams()
  const propertyId = searchParams.get("id")

  const [called, setCalled] = useState(false);
  useEffect(() => {
    var citadel = new CitadelClient()
    citadel.post("")
    citadel.get("")
    setCalled(true)

  }, [])


  var priorityAttribs =
    [
      { name: "Preço Atual", value: "U$ 929,000.00" },
      { name: "Quartos", value: "4" },
      { name: "Banheiros", value: "3" },
      { name: "Metros Quadrados", value: "142" },
      { name: "Cotas Disponíveis", value: "0/1000" },
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
                <div className="" style={{ clear: 'left', paddingTop: '10px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu urna in ipsum ullamcorper bibendum eu nec neque. Nam non tincidunt eros. Nam eu ipsum id massa cursus pulvinar. Sed placerat, mauris sit amet laoreet egestas, est massa pretium libero, eu mollis velit odio eget sapien. Nulla vestibulum magna urna, vitae condimentum odio mattis ut.
                </div>
              </Col>
              <Col xs={6} md={4}>
                <Row>
                  <Col className='floatLeft'>
                    <Label img='/house-ico.png' text="Casa Individual" />
                    <Label img='/car-ico.png' text="3 Garagens" />
                    <Label img='/tool-ico.png' text="2001 / 2023" />
                    <Label img='/houses-ico.png' text="Condomínio" />
                    <Label img='/dollar-ico.png' text="Tax U$8,929" />
                  </Col>
                  <Col className='floatLeft'>
                    <Label img='/thermo-ico.png' text="Possui AC" />
                    <Label img='/dollar-ico.png' text="HOA U$129" />
                    <Label img='/fence-ico.png' text="Lote de 400m2" />
                    <Label img='/ruler-ico.png' text="Parques a 1KM" />
                    <Button style={detailsButtonStyle} variant="outline-dark" size="sm">Detalhes</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col><h3>Financeiro</h3></Col>
            </Row>
            <Row className='mt-2'>
              <Col>
                <FinancialsCard type={FinancialsType.Property} />
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col>
                <FinancialsProgressCharts type={FinancialsType.User} />
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col><h3>Últimas Reservas</h3></Col>
              <Col><Button className='floatRight' variant="outline-dark" size="sm">Ver Todas</Button></Col>
            </Row>
            <Row>
              <Col>
                <ReservationsTable disablePagination={true} recordsPerPage={10} propertyId={propertyId} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container >
  </>;
}