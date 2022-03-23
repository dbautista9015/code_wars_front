import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={3} className='grayCardBg mt-5 pt-4'>
                        <Row class='justify-content-center'>
                            <Col className='mb-5'>
                                <img className="center" src="https://www.codewars.com/packs/assets/logo-square-red-big.c74ae0e7.png" />
                            </Col>
                        </Row>
                        <Form>
                            <div className='ms-3 me-3'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/* <Form.Label className='allText enterUsernameLoginText'>Codewars username</Form.Label> */}
                                    <Form.Control className='loginForm loginFormText' type="username" placeholder="Codewars username" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control selectionColor='red' className='loginForm loginFormText' type="password" placeholder="Password" />
                                </Form.Group>
                            <Row className='justify-content-center mt-5 mb-3 ms-1 me-1'>
                                <Button className='allText signinBtnBg' variant="primary" type="submit">
                                    Sign in 🚀
                                </Button>
                            </Row>
                            </div>
                            <Row className='justify-content-center'>
                                <Col sm={8}>
                                    <p className='askAnAdminLoginText'>Ask your Admin for an account.</p>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </>
    );
}

export default LoginPage;
