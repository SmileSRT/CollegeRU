import { React, useState } from 'react';
import classes from './NavbarPhones.module.css'
import { Container, Navbar, Row, Col, ListGroup, Modal, Button, Card, NavbarBrand } from 'react-bootstrap';
import orgLogo from '../../../../public/images/logoWithCapture.png'
import searchIcon from '../../../../public/images/searchIcon.png'
import webCabinetIcon from '../../../../public/images/webCabinetIcon.png'
import handicapVersionIcon from '../../../../public/images/handicapVersion.png'
import { NavLink } from 'react-router-dom';
import navbarMenuIcon from '../../../../public/icons/navbarMenuIcon.png'
import NavbarPhonesCard from './NavbarPhonesCard.jsx';
import { ABITURIENTS_ROUTE, ABOUT_ROUTE, CONTACT_ROUTE, EDUCATION_ROUTE, NEWS_ROUTE, PARTNERS_ROUTE, PROFESSORS_ROUTE, STUDENTS_ROUTE } from '../../../utils/consts';
import Search from '../search/Search.jsx';


const NavbarPhones = () => {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => {
        setShow(false);
        setFullscreen(false) 
    }
    const handleShow = () => { 
        setShow(true);
        setFullscreen(true); 
    }
    return( 

        <div className={classes.alternativeNav}>
                


            <Row style={{justifyContent: 'space-between'}}>
                <Col >
                    <NavbarBrand href="/" >
                        <img src={orgLogo} alt="Колледж 'ЗНАНИЕ'" className={classes.logoStyle} />
                    </NavbarBrand>
                </Col>
                <Col className={classes.navIcons}>
                    {/* <div>
                        <img src={handicapVersionIcon} alt="" width="25" height="25" />

                    {/* <div>
                        <NavLink href='#' onClick={() => setElementVisible(!elementVisible)}>
                        <img  src={webCabinetIcon} alt="" width="25" height="25" />
                        </NavLink>
                    </div> */}
                    <div>

                        <Search icon_width={25} icon_height={25} /> 

                    </div>
                    
                    <div>
                        <img src={navbarMenuIcon}
                            alt="Меню"
                            width="25px"
                            height="25px"
                            onClick={handleShow} />
                    </div>
                </Col>
                
            </Row>
            {/* {menu ? ( */}
            {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}
    
          <Modal show={show} onHide={handleClose} fullscreen={fullscreen} contentClassName={classes.navbarPhonesAlert} >
            <Modal.Header closeButton style={{color: "#ff4d11", fontSize: "14pt"}}>
                {document.title}
            </Modal.Header>
            <Modal.Body className={classes.modalBody}>
                {/* <div className={classes.navbarSlider}> */}
                    <Row className={classes.rowStyles}>
                        <Col className={classes.colStyles}>
                            <NavbarPhonesCard cardTitle="Поступающим" cardText="text1" link={ABITURIENTS_ROUTE} />
                        </Col>
                        <Col className={classes.colStyles}>
                            <NavbarPhonesCard cardTitle="Студентам" cardText="text1" link={STUDENTS_ROUTE} />
                        </Col>
                    </Row>
                    <Row className={classes.rowStyles}>
                        <Col className={classes.colStyles}>
                            <NavbarPhonesCard cardTitle="Сотрудникам" cardText="text1" link={PROFESSORS_ROUTE} />
                        </Col>
                        <Col className={classes.colStyles}>
                            <NavbarPhonesCard cardTitle="Партнерам" cardText="text1" link={PARTNERS_ROUTE} />
                        </Col>
                    </Row>
                    <Row className={classes.rowStyles}>
                        <Col className={classes.colStyles}>
                            <NavbarPhonesCard cardTitle="Об организации" cardText="text1" link={ABOUT_ROUTE} />
                        </Col>
                        <Col className={classes.colStyles}>
                            <NavbarPhonesCard cardTitle="Образование" cardText="text1" link={EDUCATION_ROUTE} />
                        </Col>
                    </Row>
                    <Row className={classes.rowStyles}>
                        <Col className={classes.colStyles}>
                            <NavbarPhonesCard cardTitle="Новости" cardText="text1" link={NEWS_ROUTE} />
                        </Col>
                        <Col className={classes.colStyles}>
                            <NavbarPhonesCard cardTitle="Контакты" cardText="text1" link={CONTACT_ROUTE} />
                        </Col>
                    </Row>

            </Modal.Body>
            <Modal.Footer style={{borderTop: "5px solid #ff4d11", paddingTop: "2vh"}}>

            </Modal.Footer>
          </Modal>
            {/* ) : null } */}
            {/* {/* {menu ? ( */}
            {/* <ul> 
                <li className={classes.alternativeNav}>Поступающим
                    <ul>
                        <li><a className='nav-link' href="/abit2023">Приемная комиссия 2023</a></li>
                        <li><a className='nav-link' href='/specialties'>Специальности</a></li>
                        <li><a className='nav-link' href='/courses'>Подготовительные курсы</a></li>
                        <li><a className='nav-link' href='/opendoors'>Дни открытых дверей</a></li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Студентам
                    <ul>
                        <li><a className='nav-link' href='/pay'>Оплата обучения</a></li>
                        <li><a className='nav-link' href='/timetable'>Расписание групп</a></li>
                        <li><a className='nav-link' href='/curators'>Кураторы групп</a></li>
                        <li><a className='nav-link' href='/extra'>Дополнительные материалы</a></li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Сотрудникам
                    <ul>
                        <li>Трудоустройство</li>
                        <li>Отдел кадров</li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Партнерам</li>
                <li className={classes.alternativeNav}>Сведения об организации
                    <ul>
                        <li><a className='nav-link' href="/about">Основные сведения</a></li>
                        <li><a className='nav-link' href='/structure'>Структура и органы управления</a></li>
                        <li><a className='nav-link' href='/documents'>Официальные документы</a></li>
                        <li><a className='nav-link' href='/structure'>Образование</a></li>
                        <li><a className='nav-link' href='/partners'>Педагогический состав</a></li>
                        <li><a className='nav-link' href='/partners'>Обеспечение образовательного процесса</a></li>
                        <li><a className='nav-link' href='/partners'>Платные образовательные услуги</a></li>
                        <li><a className='nav-link' href='/partners'>Финансово-хозяйственная деятельность</a></li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Образование
                    <ul>
                        <li><a className='nav-link' href="/education">Учебная деятельность</a></li>
                        <li><a className='nav-link' href='/specialties'>Образовательные программы</a></li>
                        <li><a className='nav-link' href='/professors'>Преподаватели</a></li>
                        <li><a className='nav-link' href='/curriculum'>Учебные планы</a></li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Новости</li>
                <li className={classes.alternativeNav}>Контакты</li>
            </ul> */}
       
            {/* <div className='d-inline-flex mx-3 pb-5'>
                    <NavLink className='px-2' href='#'>
                    <img   src={handicapVersionIcon} alt="" width="25" height="25" />
                </NavLink>

                <NavLink className='px-2' href='#' onClick={() => setElementVisible(!elementVisible)}>
                    <img  src={webCabinetIcon} alt="" width="25" height="25" />
                </NavLink>

                <NavLink className='px-2' href='#'>
                    <img  src={searchIcon} alt="" width="25" height="25" />  
                </NavLink>
            </div>  */}
        </div>
    );
}
export default NavbarPhones;