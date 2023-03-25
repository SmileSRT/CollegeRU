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
    let [specItems, revealSpecialites] = useState(true);
    // let [contactItems, revealContact] = useState(true);
    const [elementVisible, setElementVisible] = useState(true);

    function closeItems() {
        revealAbiturient(abiturientItems=true)
        // revealContact(contactItems=true)
        revealOrg(orgItems=true)
        revealEducation(educationItems=true)
        revealSpecialites(specItems=true)
        revealEmployee(employeeItems=true)
        revealStudent(studentItems=true)
        
        return null
    }
    
    const width = window.innerWidth > 400

    return( 
        <div>
        {window.innerWidth > 420 ? (

                <div className={classes.navComponent}>
                    <Navbar className='navbar-light' >
                        <Container flex>
                            <Navbar.Brand href="/">
                                <img src={orgLogo} alt="" width="128" height="auto" />
                            </Navbar.Brand>
                        <div className='row mx-5'>
                            <Nav className='col mx-4'>
        
                            <Card  className={classes.navDropdown}>
                            <Card.Header className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealAbiturient(abiturientItems=false)}}>
                                <a className='nav-link'>Абитуриентам</a>
                            </Card.Header>
        
                            {!abiturientItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealAbiturient(abiturientItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href="/abit2023">Приемная комиссия 2023</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/courses'>Подготовительные курсы</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/opendoors'>Дни открытых дверей</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/abiMaterials'>Дополнительные материалы</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown}>
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
        
                            <Card  className={classes.navDropdown}>
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
        
                            <Card  className={classes.navDropdown}>
                            <Card.Header className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealSpecialites(specItems=false)}}>
                                <a className='nav-link' href='/specialites'>Направления</a>
                            </Card.Header>
                            {!specItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealSpecialites(specItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href="/advocateEdu">Право и организация социального обеспечения</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/creditEdu'>Бухгалтер специалист банковского дела</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/teacherEdu'>Учитель начальных классов</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/preschoolEdu'>Дошкольное образование</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/doctorEdu'>Сестринское дело</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/designEdu'>Дизайн</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
        
                            </Card>
                            </Nav>
        
                            <div className='w-100'></div>
        
                            <Nav className='col mx-4'>
        
                            <Card  className={classes.navDropdown}>
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
                                        <a className='nav-link' href='/education'>Образование</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/professors'>Педагогический состав</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/techSupport'>Материально-техническое обеспечение и оснащенность образовательного процесса</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/grants'>Стипендии и меры поддержки обучающихся</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/paidService'>Платные образовательные услуги</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/finance'>Финансово-хозяйственная деятельность</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/vacanciens'>Вакантные места для приема (перевода) обучающихся</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/env'>Доступная среда</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/international'>Международное сотрудничество</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/food'>Организация питания</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <Card.Header className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEducation(educationItems=false)}}>
                                <a className='nav-link'>Учебная деятельность</a>
                            </Card.Header>
        
                            {!educationItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealEducation(educationItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href="/achivements">Наши достижения</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/specialties'>Наши принципы</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/professors'>Гимн колледжа</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/curriculum'>Фотогалерея</a>
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
    ): <NavbarPhones/>}
    </div>
                
        
            );
        }
        export default NavBar;











