import React, {useState, useContext } from 'react'
import { Container, Row, Col, Form, Button, Tab, Nav, InputGroup, FormControl } from 'react-bootstrap';
import UserContext from '../Context/UserContext';
import { GetCodeChallenge } from '../Services/DataService';
import { useUser } from '../Hooks/use-user';

export default function ReserveAKataComponent() {
    
    let { codewarsName, setCodewarsName, cohortName, setCohortName, userId, setUserId, isAdmin, setIsAdmin, isDeleted, setIsDeleted, token, setToken } = useContext(UserContext);

    const [searchedKata, setSearchedKata] = useState("");
    const [fetchedKata, setFetchedKata] = useState({});
    const [fetchedKataLanguages, setFetchedKataLanguages] = useState([]);
    const [languageChosen, setLanguageChosen] = useState("");

    const handleSubmit = async () => {

        let result = await GetCodeChallenge(searchedKata);
        console.log(result);   

        setFetchedKata(result);

        setFetchedKataLanguages(result.languages);

    }


  return (
    <>
        <Container className=''>
            <Row className='justify-content-center'>
                <Col className='grayCardBg mt-5 pt-4 pb-2 roundedCorners'>
                    <Row>
                        <Col md={6} className=' '>
                            <Form.Label className="searchKataText headerText">Reserve Your Next Kata</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                className='searchBarBg loginForm loginFormText'
                                placeholder="Enter kata URL" 
                                onChange={({ target: { value } }) => setSearchedKata(value)}
                                />
                                <Button variant="outline-secondary" id="button-addon1">
                                Search
                                </Button>
                            </InputGroup>

                            <div className='d-flex mt-4'>
                                <p className='dashboardSlugTitle headerText'>Challenge name:</p>
                                <p className='dashboardSlugText ms-2 allText'>{fetchedKata.name}</p>
                            </div>
                            <div className='d-flex'>
                                <p className='dashboardSlugTitle headerText'>Level:</p>
                                <p className='dashboardSlugText ms-2 allText' >{fetchedKata.name}</p>
                            </div>
                            <Col md={5}>
                                <div className='d-flex'>
                                    {/* <p className='dashboardSlugTitle headerText'>Languages:</p>
                                    <p className='dashboardSlugText ms-2 allText'>{fetchedKataLanguages}</p> */}
                                    <Form.Select className='searchBarBg loginFormText' aria-label="Default select example">
                                        <option>Select language</option>
                                        {
                                            fetchedKataLanguages.map((language, idx) => 
                                                <option className='allText searchKataText' key={idx} value={language} onChange={({ target: { value } }) => setLanguageChosen(value)}>{language}</option>
                                            )
                                        }
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <div className='d-flex justify-content-center'>
                            <Button className='allText reservationBtn mt-3 mb-3' variant="success" onClick={handleSubmit}>
                                Reserve challenge
                            </Button>

                            </div>
                        </Col>
                   
                        <Col md={6} className=''>
                            <div className=''>
                                <p className='dashboardSlugTitle headerText'>Description:</p>
                                <p className='dashboardDescText p-3 scrollFeature allText'>{fetchedKata.name}</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}
