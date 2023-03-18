import { React, useState } from 'react';
import orgLogo from '../../../public/images/logoWithCapture.png'
import searchIcon from '../../../public/images/searchIcon.png'
import webCabinetIcon from '../../../public/images/webCabinetIcon.png'
import handicapVersionIcon from '../../../public/images/handicapVersion.png'
import classes from './Navbar.module.css'
import Auth from '../../pages/Auth.jsx';


const Navbar = () => {

    const [elementVisible, setElementVisible] = useState(true);
    const [dropdownItemsVisibility, changeVisibility] = useState(true);

    return( 
        

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mx-2" style={{position: "relative"}}>
                <div class="container">
                    <nav class="navbar navbar-light bg-light">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                                <img src={orgLogo} alt="" width="128" height="auto" />
                            </a>
                        </div>
                    </nav>


    {/* DROPDOWN */}

                        <div class="collapse navbar-collapse row">
                            <ul class="navbar-nav col mx-5">
                                <li class="nav-item dropdown col d-inline-flex mx-3 my-1">
                                <a class="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown" onClick={() => {changeVisibility(!dropdownItemsVisibility)}}>
                                    Поступающим
                                </a>
                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Приемная комиссия 2023</a></li>
                                    <li><a class="dropdown-item" href="/specialties">Специальности</a></li>
                                    <li><a class="dropdown-item" href="/courses">Подготовительные курсы</a></li>
                                    <li><a class="dropdown-item" href="#">Дни открытых дверей</a></li>
                                </ul>
                                </li>
                                <li class="nav-item dropdown col d-inline-flex mx-3 my-1">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Студентам
                                </a>
                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Оплата обучения/квитанции</a></li>
                                    <li><a class="dropdown-item" href="#">Расписание занятий</a></li>
                                    <li><a class="dropdown-item" href="#">Кураторы групп</a></li>
                                    <li><a class="dropdown-item" href="#">Дополнительные материалы</a></li>
                                </ul>
                                </li>
                                <li class="nav-item dropdown col d-inline-flex mx-3 my-1">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Сотрудникам
                                </a>
                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Трудоустройство</a></li>
                                    <li><a class="dropdown-item" href="#">Отдел кадров</a></li>
                                </ul>
                                </li>
                                <li class="nav-item col d-inline-flex mx-3 my-1">
                                    <a class="nav-link" href="/partners">Партнерам</a>
                                </li>
                            </ul>

                            <div class="w-100"></div>

                            <ul class="navbar-nav col mx-5">
                            <li class="nav-item dropdown col d-inline-flex mx-3 my-1">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Сведения об организации
                                </a>
                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a class="dropdown-item" href="/about">О колледже</a></li>
                                    <li><a class="dropdown-item" href="/documents">Официальные документы</a></li>
                                    <li><a class="dropdown-item" href="#">Структура и органы управления</a></li>
                                    <li><a class="dropdown-item" href="/rewards">Награды</a></li>
                                    <li><a class="dropdown-item" href="/partners">Партнеры</a></li>
                                </ul>
                                </li>
                                <li class="nav-item dropdown col d-inline-flex mx-3 my-1">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Образование
                                </a>
                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Учебная деятельность</a></li>
                                    <li><a class="dropdown-item" href="#">Образовательные программы</a></li>
                                    <li><a class="dropdown-item" href="#">Преподаватели</a></li>
                                    <li><a class="dropdown-item" href="#">Учебные планы</a></li>
                                </ul>
                                </li>
                                <li class="nav-item col d-inline-flex mx-3 my-1">
                                    <a class="nav-link" href="/news">Новости</a>
                                </li>
                                <li class="nav-item col d-inline-flex mx-3 my-1">
                                    <a class="nav-link" href="/contact">Контакты</a>
                                </li>
                            </ul>
                                
                        </div>

                        {/* <div class="col">
                                    <a class="navbar-item" href="#">
                                        <img src={searchIcon} alt="" width="20" height="20" />
                                    </a>
                                </li> */}


                                
                    <nav class="navbar navbar-light bg-light item">
                            <div class="container col" className={classes}>
                                <ul class="navbar-nav">
                                    <li class="nav-item item col">
                                        <a class="navbar nav-link" href="#">
                                            <img src={handicapVersionIcon} alt="" width="20" height="20" />
                                        </a>
                                    </li>
                                    <li class="nav-item col" onClick={() => setElementVisible(!elementVisible)} >
                                        <a class="navbar nav-link" href='#'> 
                                            <img src={webCabinetIcon} alt="" width="20" height="20" />
                                        </a>
                                    </li>
                                    <li class="nav-item col">
                                        <a class="navbar nav-link">
                                            <img src={searchIcon} alt="" width="20" height="20" className={classes.search} />
                                        </a>
                                    </li>
                                </ul>
                                

                            </div>
                        </nav>
                </div>
            </nav>
            <div className='container' style={{position: "relative" }}>
                 {!elementVisible ? (
                <Auth />):
                null
            }
            </div>

            
           
        </div>
    );
}
export default Navbar;