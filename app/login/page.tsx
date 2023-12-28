"use client";

import React, { useState, useEffect } from 'react';
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
import Form from 'react-bootstrap/Form';
import { CitadelClient } from '../server/Citadel'
import { CookiesProvider, useCookies } from "react-cookie";

const containerStyle = {
    maxWidth: '50em'
}

function tryLogin(e: any, user: string, password: string) {
    e.preventDefault();

    var citadel = new CitadelClient()
    citadel.get("/logout/")
    citadel.post("/login/", { "username": user, "password": password }).then(function (response) {
        // handle success
        console.log(response.headers);
    }).catch(function (error) {
        // handle error
        console.log(error);
    }).finally(function () {
        // always executed
    });

}

export default function Page() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

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


                            <Form onSubmit={(e) => tryLogin(e, user, password)}>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Control type="user" placeholder="Usuário" onChange={e => setUser(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                </Form.Group>

                                <Button className='mb-4 px-5' variant="dark" size="lg" type="submit">Entrar</Button>
                            </Form>

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

Page.getLayout = function (page: any) {
    return <LoginLayout>{page}</LoginLayout>;
};