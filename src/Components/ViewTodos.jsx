import React, { Component } from 'react'
import AddNewTodo from './AddNewTodo';
 

export default props => (
    <div>  
    {props.edit == false ? 
        <div className="list-group checkbox-list-group">
            <li className={`"fw-bold" list-group-item list-group-item-${props.priority=='1'? "success" : props.priority=='2'? "warning" : "danger"}`}>
            
            <input type="checkbox" onChange= {() => props.completed(props.index)}></input>
           <span className={`${props.todoObj.checkbox == true ? "strike-through" : "no-strike-through"}`}>{props.textarea}</span>
            
            <div className="float-end">
            <a className='edit-todo mx-2' onClick={() => props.editTodo(props.index)}><span className="mi material-symbols-outlined">edit</span></a>
            <a className='delete-todo mx-2' onClick={() => props.deleteTodo(props.index)}><span className="mi material-symbols-outlined">delete</span></a>
            </div>
            </li> 
        </div>
        :  
    <div>
    <div className="list-group checkbox-list-group">
    <li className={`list-group-item list-group-item-${props.priority=='1'? "success" : props.priority=='2'? "warning" : "danger"}`}>
        <label htmlFor="update-todo-text"><b>Description</b></label>
        <textarea className='update-todo-text form-control' id= "edit-textarea" name="textarea" defaultValue={props.textarea} onChange= {(e) => props.handleUpdate(e, props.index)}></textarea>
        <label htmlFor="update-todo-priority"><b>Priority</b></label>
        <br/>
        <select className='update-todo-priority' name="priority" defaultValue={props.priority} onChange= {(e) => props.handleUpdate(e, props.index)}>
            <option>Select Priority</option>
            <option value="1">Low Priority</option> 
            <option value="2">Medium Priority</option>
            <option value="3">High Priority</option> 
        </select>
        <br/>
        <div className="float-end">
        <button className='btn btn-success update-todo' id="save" onClick={() => props.editTodo(props.index)} >Save</button>
        </div>
    </li> 
    </div>
    </div>   
    } 
    </div>  
    )

