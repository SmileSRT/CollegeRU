import { React, useState } from 'react';
import orgLogo from '../../../public/images/logoWithCapture.png'
import searchIcon from '../../../public/images/searchIcon.png'
import webCabinetIcon from '../../../public/images/webCabinetIcon.png'
import handicapVersionIcon from '../../../public/images/handicapVersion.png'
import classes from './Navbar.module.css'
import Auth from '../../pages/Auth.jsx';

import { Navbar, Container, NavDropdown, Nav, NavItem, Dropdown, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const listGroupStyles = {
    position: "absolute", 
    zIndex: 50, 
    marginTop: "40px", 
    width: "250px", 
    height: "200px",
}

const itemLined = {
    position: "absolute", 
    zIndex: 50, 
    borderTop: "3px solid #ff4d11",
    marginTop: "48px", 
    width: 250 

}

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

    return( 
        <div className='container'>
            <Navbar className='navbar-light my-2' expand="lg">
                <Container fluid style={{width: "1500px"}}>
                    <Navbar.Brand href="/">
                        <img src={orgLogo} alt="" width="128" height="auto" />
                    </Navbar.Brand>
                <div className='row'>
                    <Nav className='col'>

                    <Card  className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealAbiturient(abiturientItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        <a className='nav-link'>Поступающим</a>
                    </Card.Header>

                    {!abiturientItems ? (
                        <ListGroup variant="flush" style={itemLined} onMouseLeave={() => {closeItems(); revealAbiturient(abiturientItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href="/abit2023">Приемная комиссия 2023</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/specialties'>Специальности</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/courses'>Подготовительные курсы</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/opendoors'>Дни открытых дверей</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card  className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealStudent(studentItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        <a className='nav-link'>Студентам</a>
                    </Card.Header>

                    {!studentItems ? (
                        <ListGroup variant="flush" style={itemLined} onMouseLeave={() => {closeItems(); revealStudent(studentItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/pay'>Оплата обучения/квитанции</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/timetable'>Расписание групп</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/curators'>Кураторы групп</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/extra'>Дополнительные материалы</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                        
                    </Card>

                    <Card  className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEmployee(employeeItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        <a className='nav-link'>Сотрудникам</a>
                    </Card.Header>

                    {!employeeItems ? (
                        <ListGroup variant='flush' style={itemLined} onMouseLeave={() => {closeItems(); revealEmployee(employeeItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href="employment">Трудоустройство</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
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

                    <Nav className='col'>

                    <Card  className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealOrg(orgItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        <a className='nav-link'>Сведения об организации</a>
                    </Card.Header>

                    {!orgItems ? (
                        <ListGroup variant="flush" style={itemLined} onMouseLeave={() => {closeItems(); revealOrg(orgItems=true)}}>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href="/about">Основные сведения</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/structure'>Структура и органы управления</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='/documents'>Официальные документы</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='/structure'>Образование</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/partners'>Педагогический состав</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/partners'>Обеспечение образовательного процесса</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/partners'>Платные образовательные услуги</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/partners'>Финансово-хозяйственная деятельность</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{borderBottom: "1px solid beige", borderRadius: "5%"}} className='py-1'>
                                <a className='nav-link' href='/rewards'>Награды</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card  className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEducation(educationItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        <a className='nav-link'>Образование</a>
                    </Card.Header>

                    {!educationItems ? (
                        <ListGroup variant="flush" style={itemLined} onMouseLeave={() => {closeItems(); revealEducation(educationItems=true)}}>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href="/education">Учебная деятельность</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='/specialties'>Образовательные программы</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='/professors'>Преподаватели</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
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

                <NavLink className='px-2' href='#'>
                    <img src={handicapVersionIcon} alt="" width="20" height="20" />
                </NavLink>

                <NavLink className='px-2' href='#' onClick={() => setElementVisible(!elementVisible)}>
                    <img src={webCabinetIcon} alt="" width="20" height="20" />
                </NavLink>

                <NavLink className='px-2' href='#'>
                    <img src={searchIcon} alt="" width="20" height="20" />  
                </NavLink>

                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    
                </Navbar.Collapse>
                </Container>
        </Navbar>
        <Container style={{position: "relative"}}>                 
            {!elementVisible ? (
                <Auth />) :
                null
            }
        </Container>

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