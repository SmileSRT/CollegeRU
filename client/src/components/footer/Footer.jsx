import React from 'react';
import orgLogo from '../../../public/images/logoNoCapture.png'
import classes from './Footer.module.css'
import { Container, Row } from 'react-bootstrap'


const Footer = () => {
    return( 
        <div className={classes.footerStyles}>
        <Container>
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5">
            <div class="my-auto col">
                <ul class="nav navbar-nav">
                    <li class="nav-item mx-auto my-1">
                        <a href="/" class="align-items-center link-light text-decoration-none">
                            <img src={orgLogo} alt="" width="100px" height="auto" />      
                        </a>
                    </li>
                    <li class="nav-item  my-1">
                        <a href="/" class="align-items-center link-light text-decoration-none">
                            <p class="text-center" style={{lineHeight: "0.7"}}>
                                <span className={classes.headCapture}><b>ЗНАНИЕ</b></span><br/>
                                <span className={classes.footCapture}><b>Гуманитарно-технический</b></span><br/>
                                <span className={classes.footCapture}><b>колледж</b></span>   
                            </p>
                        </a>
                    </li>
                </ul>
            

            </div>



            <div class="col mb-3 mx-auto">
                <h5 className={classes.h5Capture}><a href='#' >ЗНАНИЕ</a></h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >О колледже</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Официальные документы</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Структура и органы управления</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Награды</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Партнеры</span></a></li>
                </ul>
            </div>

            <div class="col mb-3 mx-auto">
                <h5 className={classes.h5Capture}><a href='#' >ОБРАЗОВАНИЕ</a></h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Учебная деятельность</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Образовательные программы</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Преподаватели</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Учебные планы</span></a></li>                    
                </ul>
            </div>

            <div class="col mb-3 mx-auto">
                <h5 className={classes.h5Capture}><a href='#'>КОНТАКТЫ</a></h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Контакты, схема проезда</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Телефонный справочник</span></a></li>
                </ul>
            </div>
            
        </footer>

        
        </Container>

       

        <div className={classes.copyright}> 
            <Container>
                <a className='nav-link' href="#">
                    Памятка личной безопасности 
                </a>
                <a className='nav-link' href="#">
                    Противодействие терроризму
                </a>
                <a className='nav-link' style={{border: "none"}} href="#">
                    Противодействие коррупции
                </a>
            </Container>
            <p class="text-muted mx-auto d-inline-flex">© 2023 Колледж "ЗНАНИЕ"</p>
        </div>
    </div>
    );
}
export default Footer;