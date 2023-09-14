import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './aboutDocuments.module.css';
import Navigation from '../UI/navigation/Navigation.jsx'

const AboutDocuments = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8}>
                    <div className={classes.header}>
                    <h1>Документы</h1>
                    <div className={classes.header}>
                        <h4>Устав образовательной организации</h4>
                            <div className={classes.urlStyle}>
                                <a href="http://localhost:9000/pdf/educational_programms/2022/ОПОП-38.02.01-Экономика-и-бухгалтерский-учет-2022-2025гг..pdf">Устав образовательной организации</a>
                            </div>
                            <h4>Лицензия на осуществление образовательной деятельности (с приложениями)</h4>
                            <div className={classes.urlStyle}>
                                <a href="#">Серия 50Л01 №0008960 №77080 от 24.05.2017г. Лицензия действительна бессрочно</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Выписка из реестра лицензий от 04.05.2023г</a>
                            </div>
                            <h4>Свидетельство о государственной аккредитации (с приложениями)</h4>
                            <div className={classes.urlStyle}>
                                <a href="#">Серия 50А01 №0000271 №4573 от 03.11.2020г. Свидетельство действует бессрочно</a>
                            </div>
                            <h4>Учредительные документы</h4>
                            <div className={classes.urlStyle}>
                                <a href="#">Лист записи единого государственного реестра юридических лиц</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Свидетельство о постановке на учет в налоговом органе</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Свидетельство о государственной регистрации</a>
                            </div>
                            <h4>Локальные нормативные акты</h4>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о внутреннем контроле качества подготовки специалиста в АНО ПО ГТК Знание</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о ГИА</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о зачислении в качестве экстернов</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о педагогическом совете</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о подготовительных курсах для поступающих</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о порядке обучения по индивидуальному плану</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о порядке осуществления индивидуального учета результатов освоения обущающимся образовательных программ</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о порядке перевода, отчисления и восстановления обучающихся</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о предметно-цикловой комиссии</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о приемной комиссии</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о проведении экзаменов, зачетов, пересдач, перевода обучающихся на следующий курс</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о текущем контроле знаний и промежуточной аттестации</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение о формах обучения</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение об интернет-сайте</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение об обучении студентов-инвалидов</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение об организации выполнения и защиты курсовой работы</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение об электронной билиотеке</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение об электронном журнале</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение об учебной и производственной практике студентов</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Положение об общем собрании работников и студентов (совет колледжа)</a>
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
export default AboutDocuments ;