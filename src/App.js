import "./App.css"
import React, { useState,useEffect } from "react"
import Form from "./components/Form"
import TodoList from "./components/TodoList"


function App() {


  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodos,setFilterTodos]=useState([])

   useEffect(()=>{
    getLocalTodos()
  },[])

  useEffect(()=>{
    saveLocalTodos()
    filterHandler()
  },[todos,status])

 

  const filterHandler=()=>{
  switch(status)
  {
    case "completed":
      setFilterTodos(todos.filter(todo=>todo.completed==true))
      break;
    case "uncompleted":
      setFilterTodos(todos.filter(todo=>todo.completed==false))
      break;
      default:
        setFilterTodos(todos)

  }    
  }

  // local
  const saveLocalTodos=()=>{
    
      localStorage.setItem("todos",JSON.stringify(todos))
    
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null)
    {
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else
    {
     let todoLocal= JSON.parse(localStorage.getItem("todos"))
    //  console.log(todoLocal);
    setTodos(todoLocal)
    }
  }

  return (
    <>
      <header>
        <h1>Akshay's ToDO List</h1>
      </header>
      <Form setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}


      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}

      />
    </>
  )
}
export default App;




