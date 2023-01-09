import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './App.css';
import ToDoList from './Components/ToDoList';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
const { v4: uuidv4 } = require('uuid');

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  })
  const [todoId, setTodoId] = useState([])
  const [todoName, setTodoName] = useState([])
  

  const todoNameRef = useRef()

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (storedTodos) setTodos(storedTodos)
  // }, [])

  console.log(todos)

  function addTodoHandler(e) {
    e.preventDefault()
    const name = todoNameRef.current.value
    console.log(name)
    const prevTodos = [...todos]
    if (name === '')
      return
    setTodos((prevTodos)=> {
      return (
        [...prevTodos, { id: uuidv4(), name: name, complete: false }]
      )
    })
    todoNameRef.current.value = null
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const clearHandler = async () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }

  function toggleTodo(id) {
    const tempTodos = [...todos]
    const tempTodo = tempTodos.find(tempTodo => tempTodo.id === id)
    tempTodo.complete = !tempTodo.complete
    setTodos(tempTodos)
  }

  return (
    <>
      <Box component="form" onSubmit={addTodoHandler} sx={{
        display: 'flex',
        width: '45%',
        justifyContent: 'center',
        p: '30px 50px',
        m: '40px auto 20px',
        flexDirection: "column",
        boxShadow: 2,
        borderRadius: 2
      }}>
        {/* <input ref={todoNameRef} type="text" /> */}
        <textarea id="textArea" ref={todoNameRef} type="text" rows="6"></textarea>
        {/* <TextField
          id="nameOfTodo"
          // label="Multiline"
          multiline
          rows={4}
          // defaultValue="Default Value"
          // variant="filled"
          onChange={todoOnChange}
          // name="name"
          sx={{
            width: "100%",
            m: "0px auto 20px"
          }}
        /> */}

        <Box sx={{
          display: 'flex',
          justifyContent: "space-between",
          flexWrap: "wrap",
          // columnGap: 2,
          rowGap: 2
        }}>
          {/* <CreatableSelect
            isClearable
            // onChange={tagsOnChange}
            onChange={(value) => tagsOnChange('tags', value)}
            options={tags}
            value={tagValue}
          // onInputChange={handleInputChange}
          /> */}
          <Box sx={{
            display: 'flex',
            flexWrap: "wrap",
            columnGap: 2,
            rowGap: 2,
            mt: 2
          }}>
            {/* <Button type="submit" variant="contained" onClick={addTodoHandler}>Add Todo</Button> */}
            <Button type="submit" variant="contained" >Add Todo</Button>
            <Button variant="outlined" onClick={clearHandler}>Clear</Button>
          </Box>
        </Box>
      </Box>
      <Container sx={{
        width: '75%',
        mb: 5
      }}>
        <Box sx={{
          pt: 2,
          pb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span className='tdCount'>
            {todos.filter(todo => !todo.complete).length} left
          </span>
          <span className='tdFilter'>
            {/* <Select></Select> */}
          </span>
        </Box>

        <Grid container sx={{
          rowGap: 5,
        }}>
          <ToDoList todos={todos} toggleTodo={toggleTodo} clearHandler={clearHandler} todoId={todoId} setTodoId={setTodoId} />
        </Grid>
      </Container>
    </>
  );
}

export default App;
