import React, { Component, useState } from 'react';
import AddNewTodo from './Components/AddNewTodo';
import Greeting from './Components/Greeting';
import ViewTodos from './Components/ViewTodos';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todoObj: {
        priority: '',
        textarea: '',
        edit: false,
        checkbox: false,
      },
      todoArray: [],
    }
  this.handleChange = this.handleChange.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.deleteTodo = this.deleteTodo.bind(this);
  this.editTodo = this.editTodo.bind(this);
  this.completed = this.completed.bind(this);
  this.handleUpdate= this.handleUpdate.bind(this);
  }

  handleChange(event) {
    const todoObjClone = JSON.parse(JSON.stringify(this.state.todoObj));
    todoObjClone[event.target.name] = event.target.value;
    this.setState({ todoObj : todoObjClone });
  
  }

  handleUpdate(event, i){
    const todoArrayClone = JSON.parse(JSON.stringify(this.state.todoArray));
    todoArrayClone[i][event.target.name] = event.target.value;

    this.setState({
      todoArray: todoArrayClone,
    })
  }

  addTodo() {
    const todoReset = {
      edit: false,
      priority: '',
      textarea: '',
      completed: false,
    }
    const todoArrayClone = this.state.todoArray.concat(this.state.todoObj);
    this.setState({ todoArray : todoArrayClone, todoObj : todoReset })
  }

  completed(i){
    let todoArrayClone = JSON.parse(JSON.stringify(this.state.todoArray));
    todoArrayClone[i].checkbox = !todoArrayClone[i].checkbox;

    this.setState({
      todoArray: todoArrayClone,
    });
  }

  editTodo(i) {
    let todoArrayClone = JSON.parse(JSON.stringify(this.state.todoArray));
    todoArrayClone[i].edit = !todoArrayClone[i].edit

    this.setState({
      todoArray: todoArrayClone,
    });
  } 

 deleteTodo(i){
    let todoArrayClone = JSON.parse(JSON.stringify(this.state.todoArray));
    todoArrayClone.splice(i, 1)

    this.setState({
      todoArray: todoArrayClone,
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Very Simple To Do App</h1>
          <h3>Track all of the things</h3> 
          <hr></hr>

                  {/* Add New Todo */}
            <div className='row'>
              <AddNewTodo todoObj={this.state.todoObj} handleChange={this.handleChange} addTodo={this.addTodo}/>

                  {/* View Todos */}
                
                  <div className='col-8'>
                    <div className='card'>
                      <div className='card-header'>View Todos</div>

                
                          {/* TODO List  */}
                       <ul>
                          {this.state.todoArray.length===0 ? <Greeting /> :  
                          this.state.todoArray.map((todo, i) => {
                            return(
                            <ViewTodos
                              key={i}
                              index={i}
                              edit={todo.edit}
                              todoObj={todo}
                              textarea={todo.textarea}
                              priority={todo.priority}
                              deleteTodo={this.deleteTodo}
                              editTodo={this.editTodo}
                              handleChange={this.handleChange}
                              handleUpdate={this.handleUpdate}
                              completed={this.completed}
                              />
                            )
                          })
                          }
                        </ul>

                    </div>
                  </div>
                </div>
        
    </div>
    );
  }
}

export default App;
