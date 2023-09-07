import React from 'react';
import logoFooter from '../../../public/images/LogoFooter.png'
import classes from './Footer.module.css'
import { Container, Row, Col} from 'react-bootstrap'

const about_college_list=[
    {
        'content': 'Основные сведения',
        'route': '/about/common',
    },
    {
        'content': 'Документы',
        'route': '/about/documents',
    },
    {
        'content': 'Структура и органы управления',
        'route': '/about/structure',
    },
    {
        'content': 'Педагогический состав',
        'route': '/about/professors',
    },
    {
        'content': 'Лицензия, аккредитация',
        'route': '/about/license',
    },
]

const about_activity_list=[
    {
        'content': 'Наши достижения',
        'route': '/activity/achivments',
    },
    {
        'content': 'Наши принципы',
        'route': '/activity/principles',
    },
    {
        'content': 'Гимн колледжа',
        'route': '/activity/hymn',
    },
    {
        'content': 'Фотогалерея',
        'route': '/activity/photogalery',
    },
]

const about_contact_list=[
    {
        'content': 'Контакты, схема проезда',
        'route': '/contact',
    }
]


const Footer = () => {
    return( 
        <div className={classes.footerStyles}>
        <Container>
            <Row className={classes.infoBlock}>
                <Col xs={12} lg={3}>
                    <a href="/">
                        <img src={logoFooter} alt="Колледж ЗНАНИЕ" className={classes.footerLogo}/>
                    </a>
                </Col>
                <Col xs={6} lg={3}>
                    <h5 className={classes.h5Capture}><a href='#' >ЗНАНИЕ</a></h5>
                    <ul className={classes.listStyle}>
                        {about_college_list.map((element) => (
                            <li><a className={classes.footerLink} href={element.route}>{element.content}</a></li>
                        ))}
                    </ul>
                </Col>
                <Col xs={6} lg={3}>
                    <h5 className={classes.h5Capture}><a href='#' >ЖИЗНЬ КОЛЛЕДЖА</a></h5>
                    <ul className={classes.listStyle}>
                        {about_activity_list.map((element) => (
                            <li><a className={classes.footerLink} href={element.route}>{element.content}</a></li>
                        ))}
                    </ul>
                </Col>
                <Col xs={6} lg={3}>
                    <h5 className={classes.h5Capture}><a href='#' >КОНТАКТЫ</a></h5>
                    <ul className={classes.listStyle}>
                        {about_contact_list.map((element) => (
                            <li><a className={classes.footerLink} href={element.route}>{element.content}</a></li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
        <div className={classes.copyright}> 
            <Row>
                <Col className={classes.safetyText} lg={1}>
                    Памятка личной безопасности /
                </Col>
                <Col className={classes.safetyText} lg={1}>
                    Противодействие терроризму /
                </Col>
                <Col className={classes.safetyText} lg={1}>
                    Противодействие коррупции
                </Col>
            </Row>
            <p>© 2023 Колледж "ЗНАНИЕ"</p>
        </div>
    </div>
    );
}
export default Footer;