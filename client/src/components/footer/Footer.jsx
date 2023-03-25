import React from 'react';
import logoFooter from '../../../public/images/LogoFooter.png'
import classes from './Footer.module.css'
import { Container, Row } from 'react-bootstrap'


const Footer = () => {
    return( 
        <div className={classes.footerStyles}>
        <Container>
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5">
            <div className={classes.footerLogo}>
                <ul class="nav navbar-nav">
                    <li class="nav-item mx-auto my-1">
                        <a href="/">
                            <img src={logoFooter} alt="" width="150px" height="auto" />      
                        </a>
                    </li>
                </ul>
            

            </div>



            <div class="col mb-3 mx-auto">
                <h5 className={classes.h5Capture}><a href='#' >ЗНАНИЕ</a></h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="/about" class="nav-link p-0"><span >Основные сведения</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="/documents" class="nav-link p-0"><span >Официальные документы</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="/structure" class="nav-link p-0"><span >Структура и органы управления</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="/education" class="nav-link p-0"><span >Образование</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="/professors" class="nav-link p-0"><span >Педагогический состав</span></a></li>
                </ul>
            </div>

            <div class="col mb-3 mx-auto">
                <h5 className={classes.h5Capture}><a href='#' >УЧЕБНАЯ ДЕЯТЕЛЬНОСТЬ</a></h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Наши достижения</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Наши принципы</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Гимн колледжа</span></a></li>
                    <li class="nav-item mb-2 d-inline-flex" className={classes.footerLink}><a href="#" class="nav-link p-0"><span >Фотогаларея</span></a></li>                    
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