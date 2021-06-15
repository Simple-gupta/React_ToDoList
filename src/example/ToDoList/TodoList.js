import './TodoList.css'
import TodoListC from './TodoListC'
import React, { useState } from 'react'

const TodoList = () => {
    const [inputList, setInputList] = useState('')
    const [Items, setItems] = useState([])
    const itemEvent = (event) => {
        setInputList(event.target.value)
    }
    const Clicked = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
        setInputList('')
    }
    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add Items"
                        onChange={itemEvent}
                        value={inputList} />
                    <button onClick={Clicked}>+</button>

                    <ol>

                        {Items.map((itemval, index) => {
                            return <TodoListC
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems} />
                        })}

                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoList