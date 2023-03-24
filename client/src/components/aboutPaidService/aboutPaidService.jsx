import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './aboutPaidService.module.css'

const AboutPaidService = () => {
    return (
        <Container className="my-5">
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
                    <h2>Договор ДПО</h2>
                    <div className={classes.urlStyle}>
                        <a href='#'>Договор ДПО об образовании на обучение по дополнительным образовательным программам</a>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default AboutPaidService;