import React from 'react';
import classes from './Navigation.module.css'
import {Container, Row, Col} from 'react-bootstrap';


const Navigation = () => {

    const navigationMenu = [
        {
            'name': 'Основные сведения',
            'route': '/about/common',
        },
        {
            'name': 'Структура и органы управления',
            'route': '/about/structure',
        },
        {
            'name': 'Документы',
            'route': '/about/documents',
        },
        {
            'name': 'Образование',
            'route': '/about/education',
        },
        {
            'name': 'Образовательные стандарты и требования',
            'route': '/about/standarts',
        },
        {
            'name': 'Руководство. Педагогический состав',
            'route': '/about/professors',
        },
        {
            'name': 'Материально-техническое обеспечение и оснащенность образовательного процесса',
            'route': '/about/techSupport',
        },
        {
            'name': 'Платные образовательные услуги',
            'route': '/about/paidService',
        },
        {
            'name': 'Финансово-хозяйственная деятельность',
            'route': '/about/finance',
        },
        {
            'name': 'Вакантные места для приема (перевода)',
            'route': '/about/vacancies',
        },
        {
            'name': 'Доступная среда',
            'route': '/about/environment',
        },
        {
            'name': 'Международное Сотрудничество',
            'route': '/about/international',
        },
        {
            'name': 'Устав, лицензия, аккредитация',
            'route': '/about/license',
        },
        {
            'name': 'Информационная открытость',
            'route': '/about/openness'
        },
        {
            'name': 'Партнеры',
            'route': '/about/partners'
        }
    ]

    return( 
        <div className={classes.menuStyle}>
            <h1>Разделы</h1>
            <ul className={classes.navigationStyle}>
                {navigationMenu.map((header) => (
                    <li className={classes.linkMenu}><a href={header.route}>{header.name}</a></li>
                ))}
            </ul>
        </div>
    );
}
export default Navigation;