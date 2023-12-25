"use client";

import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import Image from 'next/image'
import LoginLayout from './layout';
import Button from 'react-bootstrap/Button';

const containerStyle = {
    maxWidth: '50em'
}

export default function Page() {
    return (
        <MDBContainer style={containerStyle} className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div style={{ alignItems: 'center' }} className=' d-flex flex-row mt-2'>
                                <Image
                                    alt=""
                                    src="/logo.png"
                                    width="40"
                                    height="40"
                                    className='mr-6'
                                />
                                <span className="h3 fw-bold mb-0 pl-2">AirShare</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-1" style={{ letterSpacing: '1px' }}>Acesse sua conta</h5>

                            <MDBInput wrapperClass='mb-4' label='Usuário' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' label='Senha' id='formControlLg' type='password' size="lg" />

                            <Button className='mb-4 px-5' variant="dark" size="lg">Entrar</Button>
                            
                            <a className="small text-muted" href="#!">Esqueci a senha</a>

                            <div className='mt-5 d-flex flex-row justify-content-start centeredText'>
                                <a href="#!" className="small text-muted me-1">Termos de uso</a>
                                &nbsp;&nbsp;
                                <a href="#!" className="small text-muted">Política de Privacidade</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

Page.getLayout = function(page: any) {
    return <LoginLayout>{page}</LoginLayout>;
  };