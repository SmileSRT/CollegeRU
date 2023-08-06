import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import classes from './aboutStandarts.module.css'
import Navigation from '../UI/navigation/Navigation.jsx';

const AboutStandarts = () => {
    return(
        <Container className='my-5'>
            <Row>
                <Col lg={8}>
                    <div className={classes.header}>
                        <h1>Образовательные стандарты и требования</h1>
                        <h2>Федеральные государственные образовательные стандарты</h2>
                        <div className={classes.urlStyle}> 
                            <a href='#'>ФГОС 54.02.01 Дизайн от 5 мая 2022 года. Приказ №308.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 44.02.02 Преподавание в начальных классах от 17 авгусат 2022 года. Приказ №742.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 44.02.01 Дошкольное образование от 17 августа 2022 года. Приказ №743.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 33.02.01 Фармация от 13 июля 2021 года. Приказ №449.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 34.02.01 Сестринское дело от 4 июля 2022 года. Приказ №527.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 34.02.01 Сестринское дело от 12 мая 2014 года. Приказ №502.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 38.02.01 Экономика и бухгалтерский учет от 5 февраял 2018 года. Приказ №69.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 40.02.01 Право и организация социального обеспечения от 12 мая 2014 года. Приказ №508.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 44.02.01 Дошкольное образование от 27 октября 2014 года. Приказ №1351.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 44.02.02 Преподавание в начальных классах от 27 октября 2014 года. Приказ №1353.pdf</a>
                        </div>
                        <div className={classes.urlStyle}>
                            <a href="#">ФГОС 54.02.01 Дизайн от 23 ноября 2020 года. Приказ №658.pdf</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation/>
                </Col>
            </Row>
    </Container>
    )
}

export default AboutStandarts;