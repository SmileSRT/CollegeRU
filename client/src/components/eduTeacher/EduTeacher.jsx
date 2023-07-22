import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduTeacher.module.css'
import slide from '../../../public/images/education/teacherSlide.png'
import iconDone from '../../../public/icons/done.png'

const EduTeacher = () => {

    return (
        <div>
            <img src={slide} className={classes.intro}></img>
            <Container>
                <Row>
                    <Col className={classes.parametersBlock}>
                        <h5>Срок обучения</h5>
                        <p>
                            2 года 10 мес.<br/>
                            —<br/>
                            3 года 10 мес.
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Стоимость</h5>
                        <p>
                            От 52.000 руб<br/>
                            До 110.000 руб
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
                        <p>Теория и методика преподавания</p>
                    </Col>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>
                            Навыки общения<br/>
                            Ораторское искусство
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Изучение основ общей психологии</p>
                    </Col>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>
                            Актерское мастерство<br/>
                            Хореография
                        </p>
                    </Col>
                </Row>

                <div className={classes.header}>
                    <h1>Особенности поступления</h1>
                </div>

                <Row>
                    <Col className={classes.specialsBlock}>
                        <h5>Средний балл аттестата</h5>
                        <h4>4.0</h4>
                    </Col>
                    <Col className={classes.specialsBlock}>
                        <h5>Балл по русскому языку</h5>
                        <h4>4</h4>
                        <p>Лица, имеющие "3", обязательно сдают экзамен при поступлении(устный)</p>
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
export default EduTeacher;