import React from 'react'
import Select from 'react-select';
// let filValue = 'Work'

const TagFilter = ({ todos, setTodos, tags, filValue, LOCAL_STORAGE_KEY }) => {
    
    function handleFilter(e) {
        // e === null ? () => {
        //   const newTodos = todos.filter(todo => !todo.complete)
        // setTodos(newTodos)
        // } : () => {
        //   const newtodos = todos.filter(todo => todo.tag == e.value)
        // setTodos(newtodos)
        // }
        e === null ? filValue = 'Work' : filValue = e.value
        // const origTodos = [...todos]
        // const origTodos = []
        // if (e === null) {
        //     const newTodos = todos.filter(todo => { return !todo.complete })
        //     setTodos(newTodos)
        // } else {
        //     const newtodos = todos.filter(todo => { return todo.tag === filValue })
        //     setTodos(newtodos)
        // }

        // const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        // if (storedTodos) setTodos(storedTodos)
        
    console.log(filValue)
    }

    return (
        <div>
            <Select
                className="btnSelectTag"
                options={tags}
                onChange={handleFilter}
                isClearable
            />
        </div>
    )
}

export default TagFilter;