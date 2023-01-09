import React from 'react'
import ToDo from './ToDo'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ToDoList({ todos, toggleTodo }) {

    return (
        todos.map((todo) => {
            return (
                <Grid item lg={3} md={4} sm={6} xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Box key={todo.id} sx={{
                        boxShadow: 2,
                        borderRadius: 2,
                        width: '90%',
                        height: '300px',
                        '&:hover': {
                            boxShadow: 3,
                        }
                    }}>
                        <ToDo toggleTodo={toggleTodo} todo={todo} />
                    </Box>
                </Grid>
            )
        })
    )
}
