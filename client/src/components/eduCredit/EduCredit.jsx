import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduCredit.module.css'
import slide from '../../../public/images/education/creditSlide.png'
import iconDone from '../../../public/icons/done.png'

const EduCredit = () => {

    return (
        <div>
            <img src={slide} className={classes.intro}></img>
            <Container>
                <Row>
                    <Col className={classes.parametersBlock}>
                        <h5>Срок обучения</h5>
                        <p>
                            1 год 10 мес.<br/>
                            —<br/>
                            2 года 10 мес.
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Стоимость</h5>
                        <p>
                            От 52.000 руб<br/>
                            До 98.000 руб
                        </p>
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
                        <p>Технология составления бухгалтерской отчетности</p>
                    </Col>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Экономическая деятельность организаций</p>
                    </Col>
                </Row>
                <Row>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Основы налогового законодательства</p>
                    </Col>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Финансы государства и организаций</p>
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
export default EduCredit;