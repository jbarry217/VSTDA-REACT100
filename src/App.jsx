import React, { Component, useState } from 'react';
import AddNewTodo from './Components/AddNewTodo';

class App extends Component {


  render() {
    return (
      <div className='container'>
        <h1>Very Simple To Do App</h1>
          <h3>Track all of the things</h3> 

                  {/* Add New Todo */}
            <div className='row'>
              <AddNewTodo/>

                  {/* View Todos */}
                
                  <div className='col-8'>
                    <div className='card'>
                      <div className='card-header'>View Todos</div>
                        <div className='card-body'> 
                          
                          {/* TODO List  */}

                          <div className='todo-container'>
                            <ul className='todo-list-group'></ul>
                              <a className='edit-todo'>
                                <a className='delete-todo'>
                                  <textarea className="update-todo-text">
                                    <select className='update-todo-priority'>
                                      <button className='update-todo'>
                                      </button>
                                    </select>
                                  </textarea>
                                </a>
                              </a>
                          </div>
                        </div>
                    </div>
                  </div>
                
            </div>
          </div>
    );
  }
}

export default App;
