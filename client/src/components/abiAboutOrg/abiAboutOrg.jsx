import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './abiAboutOrg.module.css'
const images = require.context('../../../public/icons/reception', false, /\.(png)$/);


const AbiAboutOrg = () => {
    return(
        <div>
        <div className={classes.intro}>
            <Container className={classes.introText}>
                <h2>Приемная комиссия 2023</h2>
                <h1>
                    C 1 июня <br/>
                    До <br/>
                    20 августа
                </h1>
                <h2>Получайте новые навыки и меняйте жизнь!</h2>
            </Container>
        </div>

        <Container className={classes.header}>
            <h1>Преимущества</h1>
            <Row>
                <Col className={classes.privilegesStyle}>
                    <img src={images('./privilegesIcon1.png')}></img>
                    <p>Индивидуальный подход</p>
                </Col>
                <Col className={classes.privilegesStyle}>
                    <img src={images('./privilegesIcon2.png')}></img>
                    <p>Постоянная обратная связь</p>
                </Col>
                <Col className={classes.privilegesStyle}>
                    <img src={images('./privilegesIcon3.png')}></img>
                    <p>Самые актуальные направления</p>
                </Col>
            </Row>
            <Row>
                <Col className={classes.privilegesStyle}>
                    <img src={images('./privilegesIcon4.png')}></img>
                    <p>Поддержка и развитие студенческих проектов</p>
                </Col>
                <Col className={classes.privilegesStyle}>
                    <img src={images('./privilegesIcon5.png')}></img>
                    <p>Практика в ведущих предприятиях</p>
                </Col>
                <Col className={classes.privilegesStyle}>
                    <img src={images('./privilegesIcon6.png')}></img>
                    <p>Льготные программы</p>
                </Col>
            </Row>
        </Container>

        <div className={classes.educationInfo}>
            <Container className={classes.educationStyle}>
                <h1>ЗНАНИЕ сегодня</h1>
                <Row>
                    <Col className={classes.educationStyle}>
                        <img src={images('./educationIcon1.png')}></img>
                        <h2>7</h2>
                        <p>Востребованных образовательных программ</p>
                    </Col>
                    <Col className={classes.educationStyle}>
                        <img src={images('./educationIcon2.png')}></img>
                        <h2>1000+</h2>
                        <p>Студентов</p>
                    </Col>
                    <Col className={classes.educationStyle}>
                        <img src={images('./educationIcon3.png')}></img>
                        <h2>25+</h2>
                        <p>Высококвалифицированных преподавателей</p>
                    </Col>
                </Row>
                <h2>200+</h2>
                <p>Мест для студентов в 2023</p>
            </Container>
        </div>
        <Container className={classes.header}><h1>Учебные направления</h1></Container>
        </div>
    )
}
export default AbiAboutOrg;