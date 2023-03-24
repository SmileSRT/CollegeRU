import { React, useState } from 'react';
import classes from './NavbarPhones.module.css'
import { Container, Navbar } from 'react-bootstrap';
import orgLogo from '../../../../public/images/logoWithCapture.png'
import searchIcon from '../../../../public/images/searchIcon.png'
import webCabinetIcon from '../../../../public/images/webCabinetIcon.png'
import handicapVersionIcon from '../../../../public/images/handicapVersion.png'
import { NavLink } from 'react-router-dom';

const NavbarPhones = () => {
    let [n1, reveal] = useState(true)
    return( 

        <div className={classes.alternativeNav}>
                
            <Container style={{justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                <Navbar.Brand href="/" >
                    <img src={orgLogo} alt="" width="128" height="auto" />
                </Navbar.Brand>
            </Container>
            
            <div id='alternativeNavReveal'>
            <button onClick={() => { reveal(!n1) }}>show</button>
            {!n1 ? (
            <ul> 
                <li className={classes.alternativeNav}>Поступающим
                    <ul>
                        <li><a className='nav-link' href="/abit2023">Приемная комиссия 2023</a></li>
                        <li><a className='nav-link' href='/specialties'>Специальности</a></li>
                        <li><a className='nav-link' href='/courses'>Подготовительные курсы</a></li>
                        <li><a className='nav-link' href='/opendoors'>Дни открытых дверей</a></li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Студентам
                    <ul>
                        <li><a className='nav-link' href='/pay'>Оплата обучения</a></li>
                        <li><a className='nav-link' href='/timetable'>Расписание групп</a></li>
                        <li><a className='nav-link' href='/curators'>Кураторы групп</a></li>
                        <li><a className='nav-link' href='/extra'>Дополнительные материалы</a></li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Сотрудникам
                    <ul>
                        <li>Трудоустройство</li>
                        <li>Отдел кадров</li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Партнерам</li>
                <li className={classes.alternativeNav}>Сведения об организации
                    <ul>
                        <li><a className='nav-link' href="/about">Основные сведения</a></li>
                        <li><a className='nav-link' href='/structure'>Структура и органы управления</a></li>
                        <li><a className='nav-link' href='/documents'>Официальные документы</a></li>
                        <li><a className='nav-link' href='/structure'>Образование</a></li>
                        <li><a className='nav-link' href='/partners'>Педагогический состав</a></li>
                        <li><a className='nav-link' href='/partners'>Обеспечение образовательного процесса</a></li>
                        <li><a className='nav-link' href='/partners'>Платные образовательные услуги</a></li>
                        <li><a className='nav-link' href='/partners'>Финансово-хозяйственная деятельность</a></li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Образование
                    <ul>
                        <li><a className='nav-link' href="/education">Учебная деятельность</a></li>
                        <li><a className='nav-link' href='/specialties'>Образовательные программы</a></li>
                        <li><a className='nav-link' href='/professors'>Преподаватели</a></li>
                        <li><a className='nav-link' href='/curriculum'>Учебные планы</a></li>
                    </ul>
                </li>
                <li className={classes.alternativeNav}>Новости</li>
                <li className={classes.alternativeNav}>Контакты</li>
            </ul>
            ) : null}
            <div className='d-inline-flex mx-3 pb-5'>
                    <NavLink className='px-2' href='#'>
                    <img   src={handicapVersionIcon} alt="" width="25" height="25" />
                </NavLink>

                <NavLink className='px-2' href='#' onClick={() => setElementVisible(!elementVisible)}>
                    <img  src={webCabinetIcon} alt="" width="25" height="25" />
                </NavLink>

                <NavLink className='px-2' href='#'>
                    <img  src={searchIcon} alt="" width="25" height="25" />  
                </NavLink>
                </div>
            </div>
        </div>
    );
}
export default NavbarPhones;