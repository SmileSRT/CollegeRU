import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './aboutPaidService.module.css';
import Navigation from '../UI/navigation/Navigation.jsx';

const AboutPaidService = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col lg={8}>
                    <div className={classes.header}>
                        <h1>Платные образовательные услуги</h1>
                        <div className={classes.header}>
                            <h2>Стоимость обучения 2017-2024</h2>
                            <div className={classes.urlStyle}>
                                <a href="#">Стоимость обучения 2023-2024</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Стоимость обучения 2022-2023</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Стоимость обучения 2021-2022</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Стоимость обучения 2020-2021</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Стоимость обучения 2019-2020</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Стоимость обучения 2018-2019</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Стоимость обучения 2017-2018</a>
                            </div>
                            <h2>Образец договора об указании платных образовательных услуг</h2>
                            <div className={classes.urlStyle}>
                                <a href='#'>Договор об указании платных образовательных услуг</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>
        </Container>
    );
}
export default AboutPaidService;