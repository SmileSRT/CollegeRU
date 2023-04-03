import React from 'react';
import {Table, Container} from 'react-bootstrap';
import classes from './tableOpenDoors.module.css'

const TableOpenDoors = () => {
    return (
        <Container className='my-5'>
            <Table className={classes.tableStyles}>
                <thead>
                    <tr>
                        <th>Дата и время</th>
                        <th>Мероприятие</th>
                        <th>Регистрация</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Январь-апрель</td>
                        <td>Дни открытых дверей
                            <ul>
                                <li>11 Марта 12:00</li>
                                <li>25 Марта 12:00</li>
                                <li>7 Апреля 12:00</li>
                            </ul>
                        </td>
                        <td>Запись по телефону: +7 999-999-99-99</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        
    )
}
export default TableOpenDoors;