import React from 'react'
import {Todoitem} from "../MyComponents/Todoitem";

export const Todos = (props)=>{
    let myStyle={
        minHeight:"70vh",
        margin:"10px auto"

    }
    return(
        <div className="container" style= {myStyle}>
            <h3 className="text-center my-3">Todos List (-_-)</h3>
            {props.todos.length===0? <h3>"No Todos to display"</h3>
            :props.todos.map((todo)=>{
                return (
                    <>
                <Todoitem todo={todo} key={todo.Sno} 
                onDelete={props.onDelete}/><hr/>
                </>
                )
            })}
            
        </div>
    )
}