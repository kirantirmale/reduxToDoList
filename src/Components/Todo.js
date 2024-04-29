import React, { useState } from 'react';
import { addToDo, deleteTodo } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputData.trim() !== '') {
            dispatch(addToDo(inputData));
            setInputData('');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-lg font-bold mb-4">Add your List Here</h2>
                    <div className="mb-4 flex">
                        <input
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                            type="text"
                            id="first_name"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && inputData !== "") handleAddTodo();
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Add your task..."
                        />
                        <button
                            onClick={handleAddTodo}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Add
                        </button>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-lg font-bold mb-4">Todo List</h2>

                        {list?.map((todo) => (
                            <div className="mb-4 flex gap-1" key={todo.id}>
                                <li className='list-none flex w-full border justify-between'>
                                    <p className="px-4 ">{todo.data}</p>
                                    <button
                                        onClick={() => dispatch(deleteTodo(todo.id))}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold  px-6 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        delete
                                    </button>
                                </li>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Todo;