import React from 'react'
              
export class AddNewTodo extends React.Component{

  render(){

    return(
          <div className='col-4'>
            <div className='card'>
              <div className='card-header'>Add New Todo</div>
                <div className='card-body'>
                  <div class='input-group input-lg'>
                      <label htmlFor='toDo' className="form-label"><b>I want to..</b></label>
                        <textarea className="create-todo-text form-control" type="text"/>
                    <br/>
                    <label htmlFor='priority' className='form-label'><b>How much of a priority is this?</b></label>
                      <select className="create-todo-priority">
                        <option>Select Priority</option>
                        <option value="1">Low Priority</option> 
                        <option value="2">Medium Priority</option>
                        <option value="3">High Priority</option> 
                      </select>
                    <br/>
                    <button
                    className='btn btn-primary btn-block btn-success' 
                    type= "button"
                    id="add">
                      Add
                    </button>
                    </div>
                  </div>
                </div>
              </div>
        )
      }
} 
  export default AddNewTodo;