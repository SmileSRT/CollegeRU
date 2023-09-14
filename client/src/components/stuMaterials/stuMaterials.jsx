import {React} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './stuMaterials.module.css'
const icons = require.context('../../../public/icons/practice', false, /\.(png)$/);

const directions_practice = [
    {
        'name': 'advocate',
        'id': '40.02.01',
        'info': 'Юрист',
        'route': 'materials/advocate',
    },
    {
        'name': 'doctor',
        'id': '34.02.01',
        'info': 'Сестринское дело',
        'route': 'materials/doctor',
    },
    {
        'name': 'credit',
        'id': '38.02.01',
        'info': 'Экономика и бухгалтерский учет (по отраслям)',
        'route': 'materials/credit',
    },
    {
        'name': 'preschool',
        'id': '44.02.01',
        'info': 'Дошкольное образование',
        'route': 'materials/preschool',
    },
    {
        'name': 'teacher',
        'id': '44.02.02',
        'info': 'Преподавание в начальных классах',
        'route': 'materials/teacher',
    },
    {
        'name': 'design',
        'id': '52.02.01',
        'info': 'Дизайн (по отраслям)',
        'route': 'materials/design',
    },
    {
        'name': 'pharmacist',
        'id': '34.02.01',
        'info': 'Фармация',
        'route': 'materials/pharmacist',
    }
]


const StuMaterials = () => {
    return(
        <Container className='my-5'>
            <div className={classes.headers}>
                <h1>Дополнительные материалы</h1>

                <h4>Методические указания по выполнению курсовой работы</h4>
                <ul className={classes.listStyle}>
                    <li className={classes.linkStyle}>
                        <a href="">Методические указания по оформлению дипломной работы</a>
                    </li>
                    <li className={classes.linkStyle}>
                        <a href="">Методические указания по оформлению курсовой работы</a>
                    </li>
                </ul>
                
                <h4>Практика</h4>
                <ul className={classes.listStyle}>
                    <li className={classes.linkStyle}>
                        <a href="">
                            Приказ «Об утверждении Положения о практической подготовке студентов, 
                            осваивающих образовательные программы среднего профессионального образования»
                        </a>
                    </li>
                    <li className={classes.linkStyle}>
                        <a href="">График прохождения практики 2022 — 2023 у. г.</a>
                    </li>
                </ul>

                <h4>Отчетные документы по практике</h4>
                <Row>
                    {directions_practice.map((direction) => (
                        <Col className={classes.practiceBlock} xs={5} xl={2}>
                            <a href={direction.route}>
                                <img src={icons('./' + direction.name + 'Icon.png')} className={classes.iconStyle} alt={direction.info}></img>
                                <div className={classes.textPractice}>
                                    <p>{direction.id}</p>
                                    <p>{direction.info}</p>
                                </div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    )

}

export default StuMaterials;