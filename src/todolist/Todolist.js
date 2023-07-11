import React from 'react'
import { BiCheckCircle } from "react-icons/bi"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"

const Todolist = ({ todos, setTodos, setEditTodo }) => {

    const handleComplete = (todo) => {
        setTodos(
            setTodos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        );
    };
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));


    };
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);


    };



    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input className="list"
                        type="text"
                        value={todo.title}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <i>< BiCheckCircle/> </i>
                            
                        </button>
                        <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                            <i><AiFillEdit /></i>
                        </button>
                        <button className='button-complete task-button' onClick={() => handleDelete(todo)}>
                            <i><RiDeleteBinLine /></i>
                        </button>

                    </div>

                </li>
            )
            )}
        </div>
    );
}

export default Todolist;

