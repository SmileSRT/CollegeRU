import React from 'react';
import telephone from '../../../public/icons/telephoneIcon.png'
import distance from '../../../public/icons/learnIcon.png'
import gallery from '../../../public/icons/galleryIcon.png'
import classes from './AboutOrg.module.css'
import { Col, Container, Row } from 'react-bootstrap';

const AboutOrg = () => {
    return( 
        <Container className='my-5'>
            <Row>
                <Col>
                    <h1>Знание — сила!</h1>
                    <p className={classes.paragraphStyle}>
                        Создавая колледж, мы хотели, чтобы он стал не просто
                        еще одним учебным заведением, где ничем не
                        связанные друг с другом люди будут обучать и учиться.
                    </p>
                    <p className={classes.paragraphStyle}>
                        Наша цель была в другом: мы убеждены — каждый 
                        человек талантлив; мы убеждены — сейчас время
                        неординарных людей и неординарных идей; мы
                        убеждены — только настоящее дело может быть
                        по-настоящему интересным; мы убеждены —
                        состоявшиеся люди — это счастливые люди; 
                        мы убеждены — только в атмосфере понимания и 
                        позитива человек может развиваться!
                    </p>
                </Col>
                <Col>
                    <h1>Онлайн-ресурсы</h1>
                    <Row>
                        <Col className={classes.blockStyle}>
                            <a href="contact">
                                <img src = {telephone} className={classes.iconStyle}></img>
                                <p>
                                Контакты<br/>
                                Схема проезда
                                </p>  
                            </a>
                        </Col>                
                        <Col className={classes.blockStyle}>
                            <a href="#">
                                <img src = {distance} className={classes.iconStyle}></img>
                                <p>Электронная образовательная среда</p>
                            </a>
                            
                        </Col>
                        <Col className={classes.blockStyle}>
                            <a href="/activity/photogallery">
                                <img src = {gallery} className={classes.iconStyle}></img>
                                <p>Фотогалерея</p>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h1 className={classes.header}>Учебные направления</h1>
        </Container>
        
    );
}
export default AboutOrg;
