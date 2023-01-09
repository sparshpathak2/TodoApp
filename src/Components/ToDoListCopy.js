import React from 'react'
import ToDo from './ToDo'
import TagFilter from './TagFilter'
import Select from 'react-select';

export default function ToDoList({ todos, toggleTodo, setTodos, tags }) {
    let filValue = 'Others'
    console.log(filValue)
    function handleFilter(e) {
        e === null ? filValue = 'Work' : filValue = e.value
        const origTodos = [...todos]
        console.log(filValue)
    }
    return (
        <>
            {todos.map((todo) => {
                return (
                    <div key={todo.id} className="container">
                        <ToDo toggleTodo={toggleTodo} todo={todo} />
                    </div>
                )
            })}


            <div>
                <Select
                    className="btnSelectTag"
                    options={tags}
                    onChange={handleFilter}
                    isClearable
                />
            </div>

            {todos.filter(todo => { return todo.tag === filValue }).map((todo) => {
                return (
                    <div key={todo.id} className="container">
                        <ToDo toggleTodo={toggleTodo} todo={todo} />
                    </div>
                )
            })}



        </>
        // todos.filter(todo => { return todo.tag === filValue }).map((todo) => {
        //     return (
        //         <div key={todo.id} className="container">
        //             <ToDo toggleTodo={toggleTodo} todo={todo} />
        //         </div>
        //     )
        // })

        // todos.map((todo) => {
        //     return (
        //         <div key={todo.id} className="container">
        //             <ToDo toggleTodo={toggleTodo} todo={todo} />
        //         </div>
        //     )
        // })
    )
}
