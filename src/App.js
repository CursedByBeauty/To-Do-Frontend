import React, { useState, useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ToDoList from './components/ToDoList';
import ToDoForm from "./components/ToDoForm";
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios.get("/api/todos/")
      .then((res) => {
        setTodos(res.data)
      }).catch(()=>{
        alert("Something went wrong");
      })
  }, [])


  return (
    <div>
      <Navbar bg="light" style={{marginBottom:"20px"}}>
        <Container>
          <Navbar.Brand href="#">
            Todo App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <ToDoForm />
        <ToDoList todos={todos}/>
      </Container>
    </div>
  );
}

export default App;
