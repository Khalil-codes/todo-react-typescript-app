import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useTodos } from "../context/todosContext";
import TodoFilter from "./TodoFilter";

const TodoForm: FC = () => {
    const { addTodo } = useTodos();
    const [title, setTitle] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title.length === 0) return;
        addTodo(title);
        setTitle("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Task..."
                        value={title}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        disabled={title ? false : true}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <TodoFilter />
            </div>
        </form>
    );
};

export default TodoForm;
