import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import orgLogo from '../../../public/logo192.png'
import searchIcon from '../../../public/searchIcon.png'
import classes from './Navbar.module.css'

const Navbar = () => {
    return( 

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <nav class="navbar navbar-light bg-light">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                            <img src={orgLogo} alt="" width="90" height="auto" />
                            </a>
                        </div>
                    </nav>


    {/* DROPDOWN */}
                    <div class="collapse navbar-collapse">
                        <div class="collapse navbar-collapse container row">
                            <ul class="navbar-nav ">
                                <li class="nav-item dropdown col">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Поступающим
                                </a>
                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Прием 2023</a></li>
                                    <li><a class="dropdown-item" href="#">Специальности</a></li>
                                    <li><a class="dropdown-item" href="#">Подготовительные курсы</a></li>
                                    <li><a class="dropdown-item" href="#">Задать вопрос</a></li>
                                </ul>
                                </li>
                                <li class="nav-item col">
                                    <a class="nav-link" href="#">Студентам</a>
                                </li>
                                <li class="nav-item col">
                                    <a class="nav-link" href="#">Преподавателям</a>
                                </li>
                                <li class="nav-item col">
                                    <a class="nav-link" href="#">Партнерам</a>
                                </li>
                            </ul>

                            
                            <div class="w-100"></div>

                            <ul class="navbar-nav col">
                                <li class="nav-item col">
                                    <a class="nav-link" href="#">Сведения об организации</a>
                                </li>
                                <li class="nav-item col">
                                    <a class="nav-link" href="#">Образование</a>
                                </li>
                                <li class="nav-item col">
                                    <a class="nav-link" href="#">Новости</a>
                                </li>
                                <li class="nav-item col">
                                    <a class="nav-link" href="#">Контакты</a>
                                </li>
                            </ul>
                                
                        </div>

                        {/* <div class="col">
                                    <a class="navbar-item" href="#">
                                        <img src={searchIcon} alt="" width="20" height="20" />
                                    </a>
                                </li> */}


                    </div>
                                
                    <nav class="navbar navbar-light bg-light item align-top">
                            <div class="container align-top" className={classes}>
                                <ul class="navbar-nav">
                                    <li class="nav-item top">
                                        <a class="navbar nav-link" href="#">
                                            <img src={searchIcon} alt="" width="20" height="20" />
                                        </a>
                                    </li>
                                    <li class="nav-item top">
                                        <a class="navbar nav-link" href="#">
                                            <img src={searchIcon} alt="" width="20" height="20" />
                                        </a>
                                    </li>
                                    <li class="nav-item top">
                                        <a class="navbar nav-link" href="#">
                                            <img src={searchIcon} alt="" width="20" height="20" />
                                        </a>
                                    </li>
                                </ul>
                                

                            </div>
                        </nav>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;