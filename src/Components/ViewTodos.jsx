import React, { Component } from 'react'
import AddNewTodo from './AddNewTodo';
 

export default props => (
    <div>  
    {props.edit == false ? 
        <div className="list-group checkbox-list-group">
            <li className={`list-group-item list-group-item-${props.priority=='1'? "success" : props.priority=='2'? "warning" : "danger"}`}>
            
            <input type="checkbox" onClick = {() => props.checkbox(props.index)}/>
            {props.textarea}
            
            <a className='edit-todo' onClick={() => props.editTodo(props.index)}><span className="material-symbols-outlined">edit</span></a>
            <a className='delete-todo' onClick={() => props.deleteTodo(props.index)}><span className="material-symbols-outlined">delete</span></a>
            </li> 
        </div>
        :  
    <div>
        <textarea className='update-todo-text' name="textarea" defaultValue={props.textarea} onChange= {(e) => props.handleUpdate(e, props.index)}></textarea>
        <select className='update-todo-priority' name="priority" defaultValue={props.priority} onChange= {(e) => props.handleUpdate(e, props.index)}>
            <option>Select Priority</option>
            <option value="1">Low Priority</option> 
            <option value="2">Medium Priority</option>
            <option value="3">High Priority</option> 
        </select>
        <button className='update-todo' onClick={() => props.editTodo(props.index)} >Save</button>
    </div>   
    } 
    </div>  
    )

