import React from 'react';
import classes from './Navigation.module.css'
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const isShowed = true;
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
        <div>
            {isShowed ? (
                <div className={classes.menuStyle}>
                    <h3>Разделы</h3>
                    <ul className={classes.navigationStyle}>
                        {navigationMenu.map((header) => (
                            <li className={classes.linkMenu}><Link to={header.route}>{header.name}</Link></li>
                        ))}
                    </ul>
                </div>) : null}
        </div>
        
    );
}
export default Navigation;