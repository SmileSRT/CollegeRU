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

    return( 
        <div className='container'>
            <Navbar className='navbar-light my-2' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={orgLogo} alt="" width="128" height="auto" />
                    </Navbar.Brand>
                <div className='row mx-5'>
                    <Nav className='col mx-5'>
                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {revealAbiturient(abiturientItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Поступающим
                    </Card.Header>


                    {!abiturientItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {revealAbiturient(abiturientItems=true)}}>
                            <ListGroup.Item><a href="#">jfosiejf</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Dapibus ac facilisis in</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Vestibulum at eros</a></ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>
                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {revealStudent(studentItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Студентам
                    </Card.Header>


                    {!studentItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {revealStudent(studentItems=true)}}>
                            <ListGroup.Item className='py-3'><a href='/about'>jfosiejf</a></ListGroup.Item>
                            <ListGroup.Item className='py-3'>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className='py-3'>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>) : null
                    }
                        
                    </Card>
                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {revealEmployee(employeeItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Сотрудникам
                    </Card.Header>


                    {!employeeItems ? (
                        <ListGroup style={listGroupStyles} onMouseLeave={() => {revealEmployee(employeeItems=true)}}>
                            <ListGroup.Item><a href="#">jfosiejf</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Dapibus ac facilisis in</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Vestibulum at eros</a></ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>
                    <Card class='mx-3 my-2' className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown}>
                        Партнерам
                    </Card.Header>


                    
                        <ListGroup variant="flush" style={{position: "absolute", zIndex: 50, display: "none"}}>
                            <ListGroup.Item><a href="#">jfosiejf</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Dapibus ac facilisis in</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Vestibulum at eros</a></ListGroup.Item>
                        </ListGroup>
                    </Card>
                   
                    </Nav>
                    <div className='w-100'></div>
                    <Nav className='col mx-5'>
                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {revealOrg(orgItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Сведения об организации
                    </Card.Header>


                    {!orgItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {revealOrg(orgItems=true)}}>
                            <ListGroup.Item><a href="#">jfosiejf</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Dapibus ac facilisis in</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Vestibulum at eros</a></ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>
                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {revealEducation(educationItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Образование
                    </Card.Header>


                    {!educationItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {revealEducation(educationItems=true)}}>
                            <ListGroup.Item><a href="#">jfosiejf</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Dapibus ac facilisis in</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Vestibulum at eros</a></ListGroup.Item>
                        </ListGroup>) : null
                    }
                    </Card>
                    <Card class='mx-3 my-2' className={classes.navDropdown} >
                    <Card.Header className={classes.navDropdown}>
                        Новости
                    </Card.Header>


                    
                        <ListGroup variant="flush" style={{position: "absolute", zIndex: 50, display: "none"}}>
                            <ListGroup.Item><a href="#">jfosiejf</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Dapibus ac facilisis in</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Vestibulum at eros</a></ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card class='mx-3 my-2' className={classes.navDropdown} onMouseEnter={() => {revealContact(contactItems=false)}}>
                    <Card.Header className={classes.navDropdown}>
                        Контакты
                    </Card.Header>


                    {!contactItems ? (
                        <ListGroup variant="flush" style={listGroupStyles} onMouseLeave={() => {revealContact(contactItems=true)}}>
                            <ListGroup.Item><a href="#">jfosiejf</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Dapibus ac facilisis in</a></ListGroup.Item>
                            <ListGroup.Item><a href='#'>Vestibulum at eros</a></ListGroup.Item>
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