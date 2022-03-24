import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import { UserLogin, GetUserByUsername } from '../Services/DataService'
import UserContext from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    let navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    let { codewarsName, setCodewarsName, cohortName, setCohortName, userId, setUserId, isAdmin, setIsAdmin, isDeleted, setIsDeleted, token, setToken } = useContext(UserContext);


    const handleSubmit = async () => {

        let userData = {
            codewarsName,
            password: password,
        };

        console.log(userData);

        let fetchedToken = await UserLogin(userData);
        console.log(fetchedToken);

        if (fetchedToken.token != null) {
            localStorage.setItem('Token', fetchedToken.token);
            let userInfo = await GetUserByUsername(userData.codewarsName)
            setCohortName(userInfo.cohortName);
            console.log(userInfo);
            setIsAdmin(userInfo.isAdmin);
            setToken(localStorage.getItem('Token'));
            if (userInfo.isAdmin) {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } else {
            // Do something
            toggleShowA();
        }
    }

    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={3} className='grayCardBg mt-5 pt-4'>
                        <Row className='justify-content-center'>
                            <Col className='mb-5'>
                                <img className="center" src="https://www.codewars.com/packs/assets/logo-square-red-big.c74ae0e7.png" />
                            </Col>
                        </Row>
                        <Form>
                            <div className='ms-3 me-3'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/* <Form.Label className='allText enterUsernameLoginText'>Codewars username</Form.Label> */}
                                    <Form.Control className='loginForm loginFormText' type="username" placeholder="Codewars username" onChange={({ target: { value } }) => setCodewarsName(value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className='loginForm loginFormText' type="password" placeholder="Password" onChange={({ target: { value } }) => setPassword(value)}/>
                                </Form.Group>
                            <Row className='justify-content-center mt-5 mb-3 ms-1 me-1'>
                                <Button className='allText signinBtnBg' variant="primary"
                                onClick={handleSubmit}>
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
            <ToastContainer position="top-center">
                <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">Unable to login</strong>
                </Toast.Header>
                <Toast.Body>Username and/or password is incorrect. Please try again.</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default LoginPage;
