import { React, useContext, useState } from 'react';
import orgLogo from '../../../public/images/logoWithCapture.png'
import searchIcon from '../../../public/images/searchIcon.png'
import webCabinetIcon from '../../../public/images/webCabinetIcon.png'
import handicapVersionIcon from '../../../public/images/handicapVersion.png'
import classes from './Navbar.module.css'
import Auth from '../UI/auth/Auth.jsx';

import { Navbar, Container, NavDropdown, Nav, NavItem, Dropdown, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import NavbarPhones from '../UI/navbarPhones/NavbarPhones.jsx';


// width: window.innerWidth > 0 ? 300 : "auto", 

const NavBar = () => {
    let [studentItems, revealStudent] = useState(true);
    let [orgItems, revealOrg] = useState(true);
    let [abiturientItems, revealAbiturient] = useState(true);
    let [employeeItems, revealEmployee] = useState(true);
    let [educationItems, revealEducation] = useState(true);
    // let [contactItems, revealContact] = useState(true);
    const [elementVisible, setElementVisible] = useState(true);

    function closeItems() {
        revealAbiturient(abiturientItems=true)
        // revealContact(contactItems=true)
        revealOrg(orgItems=true)
        revealEducation(educationItems=true)
        revealEmployee(employeeItems=true)
        revealStudent(studentItems=true)
        
        return null
    }
    
    const width = window.innerWidth > 400

    return( 
        <div>
        {window.innerWidth > 400 ? (
        <div className={classes.navComponent}>
            <Navbar className='navbar-light'>
                <Container flex>
                    <Navbar.Brand href="/">
                        <img src={orgLogo} alt="" width="128" height="auto" />
                    </Navbar.Brand>
                <div className='row mx-5'>
                    <Nav className='col mx-4'>

                    <Card  className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealAbiturient(abiturientItems=false)}}>
                        <a className='nav-link'>Поступающим</a>
                    </Card.Header>

                    {!abiturientItems ? (
                        <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealAbiturient(abiturientItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href="/abit2023">Приемная комиссия 2023</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/specialties'>Специальности</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/courses'>Подготовительные курсы</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/opendoors'>Дни открытых дверей</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card  className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealStudent(studentItems=false)}}>
                        <a className='nav-link'>Студентам</a>
                    </Card.Header>

                    {!studentItems ? (
                        <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealStudent(studentItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/pay'>Оплата обучения</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/timetable'>Расписание групп</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/curators'>Кураторы групп</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/extra'>Дополнительные материалы</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                        
                    </Card>

                    <Card  className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEmployee(employeeItems=false)}}>
                        <a className='nav-link'>Сотрудникам</a>
                    </Card.Header>

                    {!employeeItems ? (
                        <ListGroup variant='flush' className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealEmployee(employeeItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href="employment">Трудоустройство</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/hr'>Отдел кадров</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card  className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown}>
                        <a className='nav-link' href="/partners">Партнерам</a>
                    </Card.Header>

                    </Card>
                    </Nav>

                    <div className='w-100'></div>

                    <Nav className='col mx-4'>

                    <Card  className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealOrg(orgItems=false)}}>
                        <a className='nav-link'>Сведения об организации</a>
                    </Card.Header>

                    {!orgItems ? (
                        <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealOrg(orgItems=true)}}>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href="/about">Основные сведения</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/structure'>Структура и органы управления</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/documents'>Официальные документы</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/structure'>Образование</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/partners'>Педагогический состав</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/partners'>Обеспечение образовательного процесса</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/partners'>Платные образовательные услуги</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/partners'>Финансово-хозяйственная деятельность</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{borderBottom: "1px solid beige", borderRadius: "5%"}} className='py-0'>
                                <a className='nav-link' href='/rewards'>Награды</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card  className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEducation(educationItems=false)}}>
                        <a className='nav-link'>Образование</a>
                    </Card.Header>

                    {!educationItems ? (
                        <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealEducation(educationItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href="/education">Учебная деятельность</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/specialties'>Образовательные программы</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/professors'>Преподаватели</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-0'>
                                <a className='nav-link' href='/curriculum'>Учебные планы</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card  className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown}>
                        <a className='nav-link' href="/news">Новости</a>
                    </Card.Header>
                    </Card>

                    <Card  className={classes.navDropdown}>
                    <Card.Header className={classes.navDropdown}>
                        <a className='nav-link' href="/contact">Контакты</a>
                    </Card.Header>
                    </Card>
                    </Nav>
                </div>
                <div className='d-inline-flex mx-3 pb-5'>
                    <NavLink className='px-2' href='#'>
                    <img   src={handicapVersionIcon} alt="" width="25" height="25" />
                </NavLink>

                <NavLink className='px-2' href='#' onClick={() => setElementVisible(!elementVisible)}>
                    <img  src={webCabinetIcon} alt="" width="25" height="25" />
                </NavLink>

                <NavLink className='px-2' href='#'>
                    <img  src={searchIcon} alt="" width="25" height="25" />  
                </NavLink>
                </div>
                

                </Container>
        </Navbar>
        <Container style={{position: "relative"}} >                 
            {!elementVisible ? (
                <Auth className={classes.authBlock}/>) :
                null
            }
        </Container>

        </div>
    ) : <NavbarPhones/>}
    </div>
    );
}

export default NavBar;












// <NavDropdown className='mx-5'
//                         title="Партнерам"
//                     >
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">
//                         Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">
//                         Separated link
//                         </NavDropdown.Item>
//                     </NavDropdown>