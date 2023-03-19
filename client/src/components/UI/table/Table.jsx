import React from 'react';
import classes from './Table.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


const MyTable = () => {
    return( 
        <Container className='flex my-5'>
            <h1 className='display-4 my-5'>Структура и органы управления образовательной организации</h1>
            <h1 className='display-5 my-5'>Список сотрудников АНО ПО "ГТК "Знание"</h1>


            <Table responsive="sm" bordered="true">
                <thead>
                <tr>
                    <th>Должность</th>
                    <th>ФИО</th>
                    <th>Телефон</th>
                    <th>Почта</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>

                </tr>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>

                </tr>
                </tbody>
            </Table>
 

        </Container>
    );
}
export default MyTable;