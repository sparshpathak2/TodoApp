import ToDoList from "./Components/ToDoList";
import ToDoListCopy from "./Components/ToDoListCopy";
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
import { brown } from "@mui/material/colors";
import Select from 'react-select';
import TagFilter from "./Components/TagFilter";


const LOCAL_STORAGE_KEY = 'todoApp.todos'

// const mystyle = {
//   width: 100%,
//   font-size: 20px,
//   padding: 20px,
// }


function App() {
  // let storedTodos = []
  // const [todos, setTodos] = useState([ {id : 1, name: 'todo 1', complete: false} ])
  const [todos, setTodos] = useState([{ id: 1, name: "todo1", complete: false, tag: "Others"}, { id: 2, name: "todo2", complete: false, tag: "Home"} ])
  // const [filterTodos, setFilterTodos] = useState([])
  const todoNameRef = useRef()
  const todoTagRef = useRef()
  const [tag, setTag] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) 
      setTodos(storedTodos)
  }, [])

  // useEffect(() => {
  //   if (todos?.length) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  // }, [todos])

  function toggleTodo(id) {
    // const newTodos = todos
    const newTodos = [...todos]
    const newTodo = newTodos.find(newTodo => newTodo.id === id)
    newTodo.complete = !newTodo.complete
    setTodos(newTodos)
  }

  let valueSelect = null

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '')
      return
    console.log(name)
    console.log(valueSelect)
    valueSelect === null ? setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false, tag: 'Others' }]
    }) : setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false, tag: valueSelect }]
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    // if (valueSelect === null) {
    //   setTodos(prevTodos => {
    //     return [...prevTodos, { id: uuidv4(), name: name, complete: false, tag: 'Others' }]
    //   })
    // }
    // else {
    //   setTodos(prevTodos => {
    //     return [...prevTodos, { id: uuidv4(), name: name, complete: false, tag: valueSelect }]
    //   })
    // } 
    // console.log()
    todoNameRef.current.value = null
    valueSelect = null
    console.log(tag)
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }

  // function handleOnChange(event) {
  //   console.log("add to do")
  //   setTodos(event.target.value)
  // }

  const tags = [
    { value: 'Personal', label: 'Personal' },
    { value: 'Home', label: 'Home' },
    { value: 'Work', label: 'Work' }
  ]

  // const [ valueSelect, setValueSelect ] = useState()

  function handleSelect(event) {
    // setTag(event.value)
    // console.log(tag)
    console.log(event)
    event === null ? valueSelect = null : valueSelect = event.value
    console.log(valueSelect)
  }



  return (
    <>
      <Box sx={{
        // text-align: left,
        // background-color: antiquewhite,
        bgcolor: 'yellow',
        width: '50%',
        // height: '200px',
        p: '50px',
        m: '20px auto',
        borderRadius: 2,
        boxShadow: 2,
      }}>
        <div className="box-1">
          {/* <input id="input-2" type="text" /> */}
          <textarea ref={todoNameRef} className="todoTextarea" name="todoTextarea" id="textarea" cols="60" rows="5" placeholder="Jot down..."></textarea>
          {/* <Box className="buttons" sx={{
            display: 'flex',
            gap: 2,
            // flexDirection: 'row'
            // alignItems: 'flex-end',
            // alignContent: 'flex-end',
            justifyContent: 'flex-start'
          }}>
          </Box> */}
          <div className="buttons">
            <span className="btnTag">
              <Select
                // ref={todoTagRef}
                onChange={handleSelect}
                // onChange={setTag}
                options={tags}
                isClearable
              // isMulti
              // defaultValue={tags[0]}

              // isDisabled
              />
              {/* <Button ref={todoTagRef} onClick={handleTag}>Tag</Button> */}
            </span>
            <span className="btnAddtodo">
              <Button variant="contained" onClick={handleAddTodo} sx={{
                marginLeft: 1,
                marginRight: 2
              }}>TO DO</Button>
              <Button variant="outlined" onClick={handleClearTodos}>CLEAR COMPLETE</Button>
            </span>
          </div>
          {/* <button className="btn-primary" id="btnTodo" onClick={handleAddTodo}>TO DO</button> */}
          {/* <button className="btn-primary" id="btnClear" onClick={handleClearTodos}>CLEAR COMPLETE</button> */}
        </div>
      </Box>
      {/* <div className="todoInputContainer">

      </div> */}
      {/* <div className="todoListBox">
          
        </div> */}
      <div className="box-main">

        <div className="box-2">
          <br />
          <div className="todoStat">
            <div>{todos.filter(todo => !todo.complete).length} left</div>
            <div>
              <TagFilter todos={todos} setTodos={setTodos} tags={tags} LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY}/>
            </div>
          </div>
          {/* <hr /> */}
          <div className="todoBox">
            <ToDoListCopy className="todolist" todos={todos} toggleTodo={toggleTodo} tags={tags}/>
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
