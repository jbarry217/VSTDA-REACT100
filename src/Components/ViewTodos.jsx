import React, { Component } from 'react'
import AddNewTodo from './AddNewTodo';
 

export default props => (
       
    <li className={`list-group-item list-group-item-${props.priority=='1'? "success" : props.priority=='2'? "warning" : "danger"}`}>{props.textarea}
        <a className='edit-todo'>
            <textarea className='update-todo-text'></textarea>
            <select className='update-todo-priority'>
                <option>Select Priority</option>
                <option value="1">Low Priority</option> 
                <option value="2">Medium Priority</option>
                <option value="3">High Priority</option> 
            </select>
            <button className='update-todo'></button>
        </a>
        <a className='delete-todo'></a>
    </li>   
);
