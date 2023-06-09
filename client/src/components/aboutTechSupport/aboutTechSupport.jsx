import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './aboutTechSupport.module.css'

const aboutTechSupport = () => {
    return(
        <Container className='my-5'>
            <div className={classes.header}>
                <h1>Материально-техническое обеспечение и оснащенность образовательного процесса</h1>
                <div className={classes.textStyle}>
                    <h2>Учебно-материальная база, оборудование</h2>
                    <p>Для организации учебного процесса в колледже оборудовано:</p>
                    <ul className={classes.listStyle}>
                        <li>18 Учебных кабинетов</li>
                        <li>6 Учебных лабораторий</li>
                        <li>7 Методичесих кабинетов</li>
                        <li>Библиотека</li>
                        <li>Хореографический зал</li>
                        <li>Актовый зал</li>
                    </ul>
                    <h2>Спортивные обьекты</h2>
                    <p>Колледж арендует помещение спортивного зала в МУП г.Подольска "Спорт-сервис", бассейн в ЗАО "Санаторий Ерино"</p>
                    <h2>Условия питания и охраны здоровья обучающихся</h2>
                    <p>Для питания учащихся организован буфет-раздаточная</p>
                    <p>Поставку горячего питания и буфетной продукции обеспечивает МУП "Подольский комбинат питания и оптово-розничной торговли", ИП "Малышева Елена Николаевна"</p>
                    <h2>Материально-техническая база</h2>
                    <p>Кабинеты колледжа оснащены необходимым оборудованием для эффективной организации образовательного процесса. Все компьютеры в учебных класса подключены к сети Интернет</p>
                    <p>В целях повышения качетсва подготовки, колледж предоставляет доступ к информационным ресурсам, почте, файловому обмену и электронной билиотеке через WI-FI сеть</p>
                    <p>Студенты имеют свободный доступ к электронным образовательным ресурсам, а также к материалам, разработанным преподавателями колледжа</p>
                    <h2>Дополнительные материалы</h2>
                    <div className={classes.urlStyle}>
                        <a href='#'>Материально-техническая база (Таблица)</a>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default aboutTechSupport ;