import React from 'react'
import { TodoList } from './TodoList';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "31vh",
        margin: "40px auto",
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className=" my-3">Todos List</h3>
            {props.todos.length===0? "No Todo item is vailable" :
            props.todos.map((todo)=>{
                return(<TodoList todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })
            }
            
            
        </div>
    )
}
