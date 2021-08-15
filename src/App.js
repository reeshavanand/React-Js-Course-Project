
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import React, {useState, useEffect} from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
      initTodo =[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I'm ondelete of todo", todo);
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let Sno;
    if(todos.length==0){
      Sno=0;
    }
    else{
      Sno = todos[todos.length-1].Sno+1;
    }
    const myTodo={
    Sno:Sno,
    title:title,
    desc:desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([initTodo]);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
    <Header title="My Todos List" searchBar={true}/>
    
    <Switch>
      <Route exact Path="/" render={()=>{
        return(
          <>
          <AddTodo addTodo={addTodo}/>
    <Todos todos={todos}onDelete={onDelete}/>
    </>
        )
      }}>
        </Route>
        <Route exact Path="/about">
          <About />
          </Route>
          </Switch>
    <Footer />
    </Router>
    </>
  );
}

export default App;
