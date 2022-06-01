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
      },
      todoArray: [],
    }
  this.handleChange = this.handleChange.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(event) {
    const todoObjClone = JSON.parse(JSON.stringify(this.state.todoObj));
    todoObjClone[event.target.name] = event.target.value;
    this.setState({ todoObj : todoObjClone });
  }
  addTodo() {
    const todoReset = {
      priority: '',
      textarea: '',
    }
    const todoArrayClone = this.state.todoArray.concat(this.state.todoObj);
    this.setState({ todoArray : todoArrayClone, todoObj : todoReset })
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

                  {/* Add New Todo */}
            <div className='row'>
              <AddNewTodo todoObj={this.state.todoObj} handleChange={this.handleChange} addTodo={this.addTodo}/>

                  {/* View Todos */}
                
                  <div className='col-8'>
                    <div className='card'>
                      <div className='card-header'>View Todos</div>
                        <div className='card-body'> 
                
                          {/* TODO List  */}
                       <ul>
                          {this.state.todoArray.length===0 ? <Greeting /> :  
                          this.state.todoArray.map((todo, i) => {
                            return(
                            <ViewTodos
                              key={i}
                              index={i}
                              textarea={todo.textarea}
                              priority={todo.priority}
                              deleteTodo={this.deleteTodo}
                              />
                            )
                          })
                          }
                        </ul>
                        </div>
                    </div>
                  </div>
                </div>
        
    </div>
    );
  }
}

export default App;
