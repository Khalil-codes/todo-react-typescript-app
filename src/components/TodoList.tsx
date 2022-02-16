import React, { FC, ReactNode } from "react";
import { TodoType, useTodos } from "../context/todosContext";
import Todo from "./Todo";

const TodoList: FC = () => {
    const { todos, filterBy } = useTodos();

    if (todos.length > 0 && filterBy === "completed") {
        return (
            <ul className="list-group">
                {todos.map(
                    (todo: TodoType): ReactNode | boolean =>
                        todo.completed && <Todo key={todo.id} todo={todo} />
                )}
            </ul>
        );
    } else if (todos.length > 0 && filterBy === "incomplete") {
        return (
            <ul className="list-group">
                {todos.map(
                    (todo: TodoType): ReactNode | boolean =>
                        !todo.completed && <Todo key={todo.id} todo={todo} />
                )}
            </ul>
        );
    } else if (todos.length > 0 && filterBy === "all") {
        return (
            <ul className="list-group">
                {todos.map((todo: TodoType): ReactNode | boolean => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        );
    }
    return <h3 className="text-center">No Todos, Please add Todos</h3>;
};

export default TodoList;
