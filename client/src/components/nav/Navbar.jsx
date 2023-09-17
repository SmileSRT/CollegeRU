import React, {useState, useEffect } from 'react';
import orgLogo from '../../../public/images/logoWithCapture.png'
import handicapVersionIcon from '../../../public/images/handicapVersion.png'
import classes from './Navbar.module.css'
import { Navbar, Container, NavDropdown, Nav, NavItem, Dropdown, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import NavbarPhones from '../UI/navbarPhones/NavbarPhones.jsx';
import Search from '../UI/search/Search.jsx';
import phoneIcon from '../../../public/icons/phone.png'


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

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200 ? true : false);

    useEffect(() => {
        function handleResize() {
        if (window.innerWidth < 1200) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
        }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return( 
        <div>
        {isDesktop ? (
                <div className={classes.navComponent}>
                    <Navbar className='navbar-light'>
                        <Container>
                            <Navbar.Brand href="/">
                                <img src={orgLogo} alt="" width="110" height="auto" />
                            </Navbar.Brand>
                        <div className='row mx-5'>
                            <Nav className='col mx-4'>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealAbiturient(abiturientItems=false)}}>
                                <a className='nav-link'>Абитуриентам</a>
                            </div>
        
                            {!abiturientItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealAbiturient(abiturientItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href="/abiturients/reception">Приемная комиссия 2023</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/abiturients/courses'>Подготовительные курсы</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/abiturients/opendoors'>Дни открытых дверей</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/abiturients/materials'>Дополнительные материалы</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealStudent(studentItems=false)}}>
                                <a className='nav-link'>Студентам</a>
                            </div>
        
                            {!studentItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealStudent(studentItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/students/pay'>Оплата обучения</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/students/curators'>Кураторы групп</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/students/materials'>Дополнительные материалы</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                                
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEmployee(employeeItems=false)}}>
                                <a className='nav-link'>Сотрудникам</a>
                            </div>
        
                            {!employeeItems ? (
                                <ListGroup variant='flush' className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealEmployee(employeeItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href="/employees/employment">Трудоустройство</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealSpecialites(specItems=false)}}>
                                <a className='nav-link'>Направления</a>
                            </div>
                            {!specItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealSpecialites(specItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href="/directions/advocate">Юрист</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/directions/credit'>Бухгалтер</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/directions/teacher'>Учитель начальных классов</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/directions/preschool'>Дошкольное образование</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/directions/doctor'>Сестринское дело</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/directions/design'>Дизайн</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/directions/pharmacist'>Фармация</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/directions/additional'>Дополнительное образование</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }

        
                            </Card>
                            </Nav>
        
                            <div className='w-100'></div>
        
                            <Nav className='col mx-4'>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealOrg(orgItems=false)}}>
                                <a className='nav-link'>Сведения об организации</a>
                            </div>
        
                            {!orgItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealOrg(orgItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}}>
                                        <a className='nav-link' href="/about/common">Основные сведения</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/structure'>Структура и органы управления</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/documents'>Документы</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/education'>Образование</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/standarts'>Образовательные стандарты и требования</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/professors'>Руководство. Педагогический состав</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/techSupport'>Материально-техническое обеспечение и оснащенность образовательного процесса</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/paidService'>Платные образовательные услуги</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/finance'>Финансово-хозяйственная деятельность</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/vacanciens'>Вакантные места для приема (перевода) обучающихся</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/environment'>Доступная среда</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/international'>Международное сотрудничество</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/license'>Устав, лицензия, аккредитация</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/openness'>Информационная открытость</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/about/partners'>Партнеры</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEducation(educationItems=false)}}>
                                <a className='nav-link'>Учебная деятельность</a>
                            </div>
        
                            {!educationItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealEducation(educationItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href="/activity/achivements">Наши достижения</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/activity/principles'>Наши принципы</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/activity/hymn'>Гимн колледжа</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <a className='nav-link' href='/activity/photogallery'>Фотогалерея</a>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown} >
                            <div className={classes.navDropdown}>
                                <a className='nav-link' href="/news">Новости</a>
                            </div>
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown}>
                                <a className='nav-link' href="/contact">Контакты</a>
                            </div>
                            </Card>
                            </Nav>
                        </div>
                        <div className='d-inline-flex mx-3 pb-5'>
                            <NavLink className='px-2' to="/contact">
                                <img src={phoneIcon} alt="" width="25" height="25" />
                            </NavLink>
                            <NavLink className='px-2' to="/blind">
                                <img src={handicapVersionIcon} alt="" width="25" height="25" />
                            </NavLink>
            
                            {/* <NavLink className='px-2' href='#' onClick={() => setElementVisible(!elementVisible)}>
                                <img  src={webCabinetIcon} alt="" width="25" height="25" />
                            </NavLink> */}
                            
                            {/* SearchIcon  */}
                            <Search icon_width={25} icon_height={25}/>

                        </div>
                        
        
                        </Container>
                </Navbar>
                {/* <Container style={{position: "relative"}} >                 
                    {!elementVisible ? (
                        <Auth className={classes.authBlock}/>) :
                        null
                    }
                </Container> */}
        
                 
            </div>
    ): <NavbarPhones/>}
    </div>
                
        
            );
        }
        export default NavBar;











