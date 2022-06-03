import React from 'react'
              
export class AddNewTodo extends React.Component{

  render(){

    return(
          <div className='col-4'>
            <div className='card'>
              <div className='card-header'>Add New Todo</div>
                <div className='card-body'>
                  <div className='input-group input-lg'>
                      <label htmlFor='toDo' className="form-label"><b>I want to..</b></label>
                    <br/>
                        <textarea className="create-todo-text form-control" id= "input-textarea" name="textarea" type="text" value={this.props.todoObj.textarea} onChange= {(e) => this.props.handleChange(e)}/>
                    <br/>
                    <label htmlFor='priority' className='form-label'><b>How much of a priority is this?</b></label>
                      <select className="create-todo-priority" id= "input-priority" name="priority" value={this.props.todoObj.priority} onChange= {(e) => this.props.handleChange(e)}>
                        <option>Select Priority</option>
                        <option value="1">Low Priority</option> 
                        <option value="2">Medium Priority</option>
                        <option value="3">High Priority</option> 
                      </select>
                    <br/>
                    <button
                    onClick={() => this.props.addTodo()}
                    className='create-todo btn btn-primary btn-block btn-success' 
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