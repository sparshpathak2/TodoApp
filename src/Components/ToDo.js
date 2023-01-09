import React from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ToDo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <span className='tdCheckbox'>
                <Checkbox checked={todo.complete} onChange={handleTodoClick} />
                {/* <input type="checkbox" checked={todo.complete} onChange={toggleHandler} /> */}
            </span>
            <span className='tdName'>
                {todo.name.length > "225" ? todo.name.slice(0, 225) + '...' : todo.name}
            </span>
        </Box>
    )
}
