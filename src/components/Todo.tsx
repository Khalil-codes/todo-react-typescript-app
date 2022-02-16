import React, { FC } from "react";
import { TodoType, useTodos } from "../context/todosContext";

interface Props {
    todo: TodoType;
}

const Todo: FC<Props> = ({ todo }) => {
    const { toggleStatus, deleteTodo } = useTodos();
    const handleComplete = (): void => {
        toggleStatus(todo.id);
    };
    const handleDelete = (): void => {
        deleteTodo(todo.id);
    };
    return (
        <li
            className={`list-group-item d-flex justify-content-between ${
                todo.completed ? "completed" : ""
            }`}>
            <div onClick={handleComplete}>{todo.title}</div>
            <div>
                <button className="btn-trash" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default Todo;
