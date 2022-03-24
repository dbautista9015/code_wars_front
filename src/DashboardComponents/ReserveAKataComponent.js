import React, {useState, useContext, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Tab, Nav, InputGroup, FormControl, Toast, ToastContainer } from 'react-bootstrap';
import UserContext from '../Context/UserContext';
import { GetCodeChallenge, CreateReservation, GetReservationsByUsername } from '../Services/DataService';
import { useUser } from '../Hooks/use-user';

export default function ReserveAKataComponent() {
    
    let { codewarsName, setCodewarsName, cohortName, setCohortName, userId, setUserId, isAdmin, setIsAdmin, isDeleted, setIsDeleted, token, setToken, reservedKatas, setReservedKatas, numberOfReservations, setNumberOfReservations } = useContext(UserContext);

    const [searchedKata, setSearchedKata] = useState("");
    const [fetchedKata, setFetchedKata] = useState([]);
    const [fetchedKataLanguages, setFetchedKataLanguages] = useState([]);
    const [languageChosen, setLanguageChosen] = useState("");
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    useEffect(async () => {

        let allUserReservations = await GetReservationsByUsername(codewarsName);
        
        let currentReservations = allUserReservations.filter(reservation => !reservation.isDeleted && !reservation.isCompleted)
        setNumberOfReservations(currentReservations);
    }, []);

    const handleSubmit = async () => {

        let result = await GetCodeChallenge(searchedKata);
        setFetchedKata(result);
        setFetchedKataLanguages(result.languages);
        console.log(result);
    }

    const handleReserve = async (fetchedKata) => {

        let newReservation = {
            id: 0,  
            kataId: fetchedKata.id,
            codewarsName: codewarsName,
            cohortName: cohortName,
            kataName: fetchedKata.name,
            kataLevel: fetchedKata.rank.name,
            kataLink: fetchedKata.url,
            kataLanguage: languageChosen,
            dateAdded: (new Date()).toLocaleDateString('en-US'),
            isCompleted: false,
            isDeleted: false
        };

        console.log(newReservation);
        // CreateReservation(newReservation);

        let result = await CreateReservation(newReservation);
        if (result) {
            let allUserReservations = await GetReservationsByUsername(codewarsName);
            setReservedKatas(allUserReservations);
    
            let currentReservations = allUserReservations.filter(reservation => !reservation.isDeleted && !reservation.isCompleted)
            setNumberOfReservations(currentReservations);
            toggleShowA();
            setFetchedKata(0);
        }
    }

  return (
    <>
        <Container className=''>
            <Row className='justify-content-center'>
                <Col className='grayCardBg mt-5 pt-4 pb-2 roundedCorners'>
                    <Row>
                        <Col md={6} className=' '>
                            {numberOfReservations.length < 3 ? 
                                <>
                                <Form.Label className="searchKataText headerText">Reserve Your Next Kata</Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                    className='searchBarBg loginForm loginFormText'
                                    placeholder="Enter kata URL" 
                                    onChange={({ target: { value } }) => setSearchedKata(value)}
                                    />
                                    <Button variant="outline-secondary" id="button-addon1"
                                    onClick={handleSubmit}>
                                    Search 🔎
                                    </Button>
                                </InputGroup>
                                </>
                                : 
                                <>
                                <Form.Label className="searchKataText headerText">You're out of reservations</Form.Label>
                                <p className='allText loginFormText'>Check your current reservations on the left-side navigation.</p>
                                </>
                            }   
                        </Col>
                        <Col md={6}></Col>

                        {fetchedKata.length !== 0 ? 
                            <>
                                <Col md={6} className=''>
                                    <div className='d-flex mt-5'>
                                        <p className='dashboardSlugTitle headerText'>Challenge name:</p>
                                        <p className='dashboardSlugText ms-2 allText kataName'>{fetchedKata.name}</p>
                                    </div>
                                    <div className='d-flex'>
                                        <p className='dashboardSlugTitle headerText'>Level:</p>
                                        <p className='dashboardSlugText ms-2 allText' >{fetchedKata.rank.name}</p>
                                    </div>
                                    <Col md={5}>
                                        <div className=''>
                                            {/* <p className='dashboardSlugTitle headerText'>Languages:</p>
                                            <p className='dashboardSlugText ms-2 allText'>{fetchedKataLanguages}</p> */}
                                            <Form.Select className='searchBarBg loginFormText' aria-label="Default select example"
                                            onChange={({ target: { value } }) => setLanguageChosen(value)}>
                                                <option>Select language</option>
                                                {
                                                    fetchedKataLanguages.map((language, idx) => 
                                                        <option className='allText searchKataText' key={idx} value={language}>{language}</option>
                                                    )
                                                }
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col className=''>
                                        <Button className='mt-5 reserveBtn allText reservationBtn mt-3 mb-3' variant="success"
                                        onClick={() => handleReserve(fetchedKata)}>
                                            Reserve challenge
                                        </Button>
                                    </Col>
                                </Col>
                                <Col md={6} className='mt-2'>
                                    <div className=''>
                                        <p className='dashboardSlugTitle headerText'>Description:</p>
                                        <p className='dashboardDescText p-3 scrollFeature allText'>{fetchedKata.description}</p>
                                    </div>
                                </Col>
                            </> 
                            : null
                        }

                        <ToastContainer position="top-end">
                            <Toast onClose={() => setShowA(false)} show={showA} delay={3000} autohide>
                            <Toast.Header>
                                <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                                />
                                <strong className="me-auto">Successfully added! ✅ </strong>
                                <small>Just now</small>
                            </Toast.Header>
                            <Toast.Body>Woohoo, you got this challenge, I believe in you!</Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}
