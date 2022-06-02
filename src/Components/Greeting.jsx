import React from 'react'
              
export class Greeting extends React.Component{

render(){
    return (

            <div className='card' id="greeting-box">
                        <div className='todo-container'>
                            <h5>Welcome to Very Simple Todo App!</h5>
                            <p>Get started now by adding a new todo on the left.</p>
                        </div>
            </div>
 
    )
}

}

export default Greeting;