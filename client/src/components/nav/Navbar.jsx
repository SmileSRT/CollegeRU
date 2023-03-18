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
    height: "200px"
}

const NavBar = () => {
    let [studentItems, revealStudent] = useState(true);
    let [orgItems, revealOrg] = useState(true);
    let [abiturientItems, revealAbiturient] = useState(true);
    let [employeeItems, revealEmployee] = useState(true);
    let [educationItems, revealEducation] = useState(true);
    let [contactItems, revealContact] = useState(true);
    const [elementVisible, setElementVisible] = useState(true);

    function closeItems() {
        revealAbiturient(abiturientItems=true)
        revealContact(contactItems=true)
        revealOrg(orgItems=true)
        revealEducation(educationItems=true)
        revealEmployee(employeeItems=true)
        revealStudent(studentItems=true)
        
        return null
    }

    return( 
        <div className='container'>
            <Navbar className='navbar-light my-2' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={orgLogo} alt="" width="128" height="auto" />
                    </Navbar.Brand>
                <div className='row mx-5'>
                    <Nav className='col mx-5'>

                    <Card  className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealAbiturient(abiturientItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Поступающим
                    </Card.Header>

                    {!abiturientItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {closeItems(); revealAbiturient(abiturientItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href="#">jfosiejf</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='#'>Dapibus ac facilisis in</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='#'>Vestibulum at eros</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card  className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealStudent(studentItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Студентам
                    </Card.Header>

                    {!studentItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {closeItems(); revealStudent(studentItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/about'>jfosiejf</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/about'>jfosiejf</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='/about'>jfosiejf</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                        
                    </Card>

                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEmployee(employeeItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Сотрудникам
                    </Card.Header>

                    {!employeeItems ? (
                        <ListGroup style={listGroupStyles} onMouseLeave={() => {closeItems(); revealEmployee(employeeItems=true)}}>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href="#">jfosiejf</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='#'>Dapibus ac facilisis in</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}} className='py-1'>
                                <a className='nav-link' href='#'>Vestibulum at eros</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card class='mx-3 my-2' className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown}>
                        Партнерам
                    </Card.Header>

                    </Card>
                    </Nav>

                    <div className='w-100'></div>

                    <Nav className='col mx-5'>

                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealOrg(orgItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Сведения об организации
                    </Card.Header>

                    {!orgItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {closeItems(); revealOrg(orgItems=true)}}>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href="#">jfosiejf</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='#'>Dapibus ac facilisis in</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='#'>Vestibulum at eros</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEducation(educationItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Образование
                    </Card.Header>

                    {!educationItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {closeItems(); revealEducation(educationItems=true)}}>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href="#">jfosiejf</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='#'>Dapibus ac facilisis in</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='#'>Vestibulum at eros</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>

                    <Card class='mx-3 my-2' className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown}>
                        Новости
                    </Card.Header>
                    
                        <ListGroup variant="flush" style={{position: "absolute", zIndex: 50, display: "none"}}>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href="#">jfosiejf</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='#'>Dapibus ac facilisis in</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='#'>Vestibulum at eros</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealContact(contactItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Контакты
                    </Card.Header>

                    {!contactItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {closeItems(); revealContact(contactItems=true)}}>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href="#">jfosiejf</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='#'>Dapibus ac facilisis in</a>
                            </ListGroup.Item>
                            <ListGroup.Item style={{border: "none"}}>
                                <a className='nav-link' href='#'>Vestibulum at eros</a>
                            </ListGroup.Item>
                        </ListGroup>) : null
                    }
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
        {/* <Container>
            {!dropdownItemsVisibility ? (
                <Dropdown />) :
                null
            }
        </Container> */}
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