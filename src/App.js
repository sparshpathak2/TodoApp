import ToDoList from "./Components/ToDoList";
import { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
// import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import './App.css'
import { border } from "@mui/system"
import TextField from '@mui/material/TextField'

const LOCAL_STORAGE_KEY = 'todoApp.todos'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const mystyle = {
//   width: 100%,
//   font-size: 20px,
//   padding: 20px,
// }


function App() {

  // const [todos, setTodos] = useState([ {id : 1, name: 'todo 1', complete: false} ])
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    if (todos?.length) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    // const newTodos = todos
    const newTodos = [...todos]
    const newTodo = newTodos.find(newTodo => newTodo.id === id)
    newTodo.complete = !newTodo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '')
      return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  // function handleOnChange(event) {
  //   console.log("add to do")
  //   setTodos(event.target.value)
  // }

  return (
    <>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" ref={todoNameRef} /> */}
      {/* <Stack direction="row" spacing={2}>
      <input ref={todoNameRef} type="text" />
        <Button variant="contained" onClick={handleAddTodo}>To Do</Button>
        <Button variant="outlined" onClick={handleClearTodos}>Clear Complete</Button>
      </Stack>
      <div>{todos.filter(todo => !todo.complete).length} left To-Do</div>
      <ToDoList todos={todos} toggleTodo={toggleTodo} /> */}
      {/* <Box textAlign='center' p={10}> */}
      {/* <Grid container spacing={2} p={10}>
        <Grid item lg={12} md={12} sm={12} xs={12} p={20} >
          <Box bgcolor='yellow' p={2} align-items='center'>
            <Stack direction="row" spacing={2} align-items='center'>
              <input ref={todoNameRef} type="text" />
              <Button variant="contained" onClick={handleAddTodo}>To Do</Button>
              <Button variant="outlined" onClick={handleClearTodos}>Clear Complete</Button>
            </Stack>
          </Box>
          <div>{todos.filter(todo => !todo.complete).length} left To-Do</div>
          <ToDoList todos={todos} toggleTodo={toggleTodo} />
        </Grid>
      </Grid> */}
      {/* </Box> */}


      {/* <Container maxWidth="sm">
        <Grid container>
          <Grid item>
            <Stack direction="row" spacing={2}>
              <input ref={todoNameRef} type="text" />
              <Button variant="contained" onClick={handleAddTodo}>To Do</Button>
              <Button variant="outlined" onClick={handleClearTodos}>Clear Complete</Button>
            </Stack>
            <div>{todos.filter(todo => !todo.complete).length} left To-Do</div>
            <ToDoList todos={todos} toggleTodo={toggleTodo} />
          </Grid>
        </Grid>
      </Container> */}

      {/* <Container maxWidth="sm" alignItems='center'>
        <Box sx={{
          borderRadius: '5px',
          borderColor: 'yellow',
          bgcolor: 'yellow',
          padding: '30px',
          margin: '20px'
          // '&:hover': {
          //   borderRadius: '15px',
          //   borderColor: 'primary.main',
          // backgroundColor: 'primary.main',
          // opacity: [0.9, 0.8, 0.7],
          // },
        }}>
          <Stack direction="row" spacing={2}>
            <input className="input" ref={todoNameRef} />
          </Stack>
          <Stack direction='row' spacing={2} py={2}>
            <Button variant="contained" onClick={handleAddTodo}>To Do</Button>
            <Button variant="outlined" onClick={handleClearTodos}>Clear Complete</Button>
          </Stack>
          <div>{todos.filter(todo => !todo.complete).length} left To-Do</div>
          <ToDoList todos={todos} toggleTodo={toggleTodo} />
        </Box>
      </Container> */}


      <div className="container-2">
        <div className="box-main">
          <div className="box-1">
            {/* <input id="input-2" type="text" /> */}
            <textarea ref={todoNameRef} className="todoTextarea" name="todoTextarea" id="textarea" cols="60" rows="5" placeholder="Jot down..."></textarea>
            <button className="btn-primary" id="todo" onClick={handleAddTodo}>TO DO</button>
            <button className="btn-primary" id="clear" onClick={handleClearTodos}>CLEAR COMPLETE</button>
          </div>
          <div className="box-2">
            <div className="todoNumber">{todos.filter(todo => !todo.complete).length} left</div>
            <ToDoList className="todolist" todos={todos} toggleTodo={toggleTodo} />
          </div>
        </div>
      </div>

      {/* <div className="container2">
        <div className="item item-1">item-1</div>
        <div className="item item-2">item-2</div>
        <div className="item item-3">item-3</div>
      </div> */}


    </>
  )
}

export default App;