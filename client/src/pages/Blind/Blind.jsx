import React, { useState } from 'react';
import orgLogo from './../../../public/images/logoWithCapture.png'
import searchIcon from './../../../public/images/searchIcon.png'
import webCabinetIcon from './../../../public/images/webCabinetIcon.png'
import blindVersionIcon from './../../../public/images/handicapVersion.png'
import classes from './Blind.module.css'

import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AboutComponent from '../../components/aboutComponent/AboutComponent.jsx';
import AboutEducation from '../../components/aboutEducation/aboutEducation.jsx';
import Search from '../../components/UI/search/Search.jsx';
const Blind = () => {
    let [dataDisplay, showData] = useState(0)
    let [fontSize, changeFontSize] = useState(20)
    let multiplicator = 1

    function handleFont(multiplicator) {
        fontSize = 20
        changeFontSize(fontSize = fontSize * multiplicator)
    }

    return( 
        <div className={classes['blind']}>
            <div className={classes['blind-bar']}>
                    <Row className={classes['bar-items']}>
                        <Col className={classes['font-transformer']}>
                            <span style={fontSize == 20 ? ({borderBottom: 'solid 3px', paddingBottom: '6px'}) : null} onClick={ () => {{ fontSize = 20; changeFontSize(fontSize = fontSize * 1) }}}>A</span>
                            <span style={fontSize == 30 ? ({borderBottom: 'solid 3px', paddingBottom: '6px'}) : null} onClick={ () => {{ fontSize = 20; changeFontSize(fontSize = fontSize * 1.5) }}}>A</span>
                            <span style={fontSize == 40 ? ({borderBottom: 'solid 3px', paddingBottom: '6px'}) : null} onClick={ () => {{ fontSize = 20; changeFontSize(fontSize = fontSize * 2) }}}>A</span>
                        </Col>
                        <Col>
                            <span>
                                
                            </span>
                            <span>

                            </span>
                            <span>

                            </span>
                        </Col>
                        <Col>normal verson</Col>
                    </Row>
            </div>
            <Container>
                <Navbar className='navbar-light' >
                    <Container flex>
                        <Navbar.Brand href="/">
                            <img src={orgLogo} alt="" width="160" height="auto" />
                        </Navbar.Brand>

                        <div>
                            <input type="text" placeholder='Поиск' style={{width: "500px", height: "40px"}} />
                            <img src={searchIcon} alt="" width={50} height={50}/>
                        </div>
                    </Container>
                </Navbar>
            
                <Container className={classes['link-box']}>
                    <Row>
                        <Col>
                            <a href="#" onClick={ () => { showData(dataDisplay = 0) }}>Колледж</a>
                        </Col>
                        <Col>
                            <a href="#" onClick={ () => { showData(dataDisplay = 1) }}>Образование</a>
                        </Col>
                        <Col>
                            <a href="#" onClick={ () => { showData(dataDisplay = 2) }}>Студентам</a>
                        </Col>
                        <Col>
                            <a href="#" onClick={ () => { showData(dataDisplay = 3) }}>Новости</a>
                        </Col>
                        <Col>
                            <a href="#" onClick={ () => { showData(dataDisplay = 4) }}>Контакты</a>
                        </Col>
                    </Row>
                </Container>

                <div
                    style={{
                        fontSize: `${fontSize}px`
                    }}
                >
                    {dataDisplay == 0 ? 
                        <AboutComponent/>
                    : null}

                    {dataDisplay == 1 ? 
                        <AboutEducation />
                    : null}

                    {dataDisplay == 2 ? 
                        <AboutComponent/>
                    : null}

                    {dataDisplay == 3 ? 
                        <AboutComponent/>
                    : null}

                    {dataDisplay == 4 ? 
                        <AboutComponent/>
                    : null}
                </div>
                
                
            </Container>
            
        </div>
    );
}
export default Blind;