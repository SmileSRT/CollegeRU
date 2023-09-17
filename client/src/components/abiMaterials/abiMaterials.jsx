import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './abiMaterials.module.css'

const agreements = [
    'Бухгалтер 9 классов очная форма обучения',
    'Бухгалтер 11 классов очная форма обучения',
    'Бухгалтер 11 классов заочная форма обучения',
    'Воспитатель 9 классов очная форма обучения',
    'Воспитатель 11 классов очная форма обучения',
    'Воспитатель 11 классов заочная форма обучения',
    'Дизайнер 9 классов очная форма обучения',
    'Дизайнер 11 классов очная форма обучения',
    'Педагог 9 классов очная форма обучения',
    'Педагог 11 классов очная форма обучения',
    'Педагог 11 классов заочная форма обучения',
    'Юрист 9 классов очная форма обучения',
    'Юрист 11 классов очная форма обучения',
    'Юрист 11 классов заочная форма обучения',
    'Медсестра 9 классов очная форма обучения',
    'Медсестра 11 классов очная формао обучения',
    'Медсестра 11 классов очно-заочная форма обучения',
    'Фармацевт 9 классов очная форма обучения',
    'Фармацевт 11 классов очная форма обучения',
    'Фармацевт 11 классов очно-заочная форма обучения',
]

const linkStatementPdfs = 'http://localhost:9000/pdf/abiturients_materials/statements/'
const statements = [
    'Заявление о приеме',
    'Заявление по физкультуре для самообразования',
]


const materials = [
    'Билеты по русскому языку',
    'Правила приема',
    'Квитанция для оплаты',
    'Согласие на обработку персональных данных',
    'Медицинская справка для поступающих на сестринское дело',
    'Справка 030-ПО-у-17 для поступающих на сестринское дело',
]

const AbiMaterials = () => {
    return(
        <Container className='my-5'>
            <div className={classes.textStyle}>
                <h1>Дополнительные материалы</h1>

                <h4>Договоры</h4>
                <ul className={classes.listStyle}>
                    {agreements.map((agreement) => (
                        <li className={classes.linkStyle}>
                            <a href="">{agreement}</a>
                        </li>
                    ))}
                </ul>
                
                <h4>Заявления</h4>
                <ul className={classes.listStyle}>
                    {statements.map((statement) => (
                        <li className={classes.linkStyle}>
                            <a href={linkStatementPdfs + statement.split(' ').join('_') + '.pdf'} target="_blank">{statement}</a>
                        </li>
                    ))}
                </ul>

                <h4>Материалы для скачивания</h4>
                <ul className={classes.listStyle}>
                    {materials.map((material) => (
                        <li className={classes.linkStyle}>
                            <a href="">{material}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}
export default AbiMaterials;