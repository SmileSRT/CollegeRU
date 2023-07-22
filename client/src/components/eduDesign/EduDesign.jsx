import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduDesign.module.css'
import slide from '../../../public/images/education/designSlide.png'
import iconDone from '../../../public/icons/done.png'

const EduDesign = () => {

    return (
        <div>
            <img src={slide} className={classes.intro}></img>
            <Container>
                <Row>
                    <Col className={classes.parametersBlock}>
                        <h5>Срок обучения</h5>
                        <p>
                            2 год 10 мес.<br/>
                            —<br/>
                            3 года 10 мес.
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Стоимость</h5>
                        <p>122.000 руб.</p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Форма</h5>
                        <p>
                            Очная<br/>
                            Заочная
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Итог</h5>
                        <p>Государственный диплом</p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Перспектива</h5>
                        <p>
                            Трудоустройство<br/>
                            Поступление в ВУЗ без экзаменов
                        </p>
                    </Col>
                </Row>
                
                <div className={classes.header}>
                    <h1>Чему вы научитесь?</h1>
                </div>

                <Row>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Рисунок с основами перспективы</p>
                    </Col>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Разработка 3D моделей и выставочных стендов</p>
                    </Col>
                </Row>
                <Row>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Живопись с основами цветоведения</p>
                    </Col>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Начертательная геометрия</p>
                    </Col>
                </Row>

                <div className={classes.header}>
                    <h1>Как к нам поступить?</h1>
                </div>

                <Row className={classes.connectionBlock}>
                    <Col className={classes.textStyle}>
                        <p>Приходите к нам на дни открытых дверей</p>
                    </Col>
                    <Col className={classes.textStyle}>
                        <p>По всем вопросам о поступлении:</p>
                        <a href="tel:+79263964520"> +7 (926)-396-45-20</a>
                    </Col>
                </Row>

            </Container>
        </div>
        
        
    );
}
export default EduDesign;