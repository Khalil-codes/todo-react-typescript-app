import { createContext, FC, ReactNode, useContext, useState } from "react";

export interface TodoType {
    id: number;
    title: string;
    completed: boolean;
}

export type filterType = "all" | "completed" | "incomplete";

const DUMMY_DATA: TodoType[] = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Redux", completed: true },
    { id: 3, title: "Learn React Native", completed: false },
    { id: 4, title: "Learn Async JavaScript", completed: true },
];

export interface ContextType {
    todos: TodoType[];
    filterBy: filterType;
    changeFilter: (f: filterType) => void;
    addTodo: (t: string) => void;
    toggleStatus: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const defaultContextValues: ContextType = {
    todos: DUMMY_DATA,
    filterBy: "all",
    changeFilter: (f: filterType) => {},
    addTodo: (t: string) => {},
    toggleStatus: (id: number) => {},
    deleteTodo: (id: number) => {},
};

export const todosContext = createContext<ContextType>(defaultContextValues);

const getRandomId = (): number => {
    return +String(Math.floor(Math.random() * 1000)).padStart(3, "0");
};

const TodosProvider: FC<ReactNode> = ({ children }) => {
    const [todos, setTodos] = useState<TodoType[]>(DUMMY_DATA);
    const [filterBy, setFilterBy] = useState<filterType>("all");
    const addTodo = (newTodoTitle: string): void =>
        setTodos((prev: TodoType[]) => [
            ...prev,
            { id: getRandomId(), title: newTodoTitle, completed: false },
        ]);
    const toggleStatus = (todoId: number): void => {
        setTodos((prev: TodoType[]): TodoType[] =>
            prev.map(
                (todo: TodoType): TodoType =>
                    todo.id === todoId
                        ? { ...todo, completed: !todo.completed }
                        : todo
            )
        );
    };
    const deleteTodo = (todoId: number): void => {
        setTodos((prev: TodoType[]): TodoType[] =>
            prev.filter((todo: TodoType): boolean => todo.id !== todoId)
        );
    };

    const changeFilter = (status: filterType): void => {
        setFilterBy(status);
    };

    return (
        <todosContext.Provider
            value={{
                todos,
                addTodo,
                toggleStatus,
                deleteTodo,
                filterBy,
                changeFilter,
            }}>
            {children}
        </todosContext.Provider>
    );
};

export const useTodos = (): ContextType => useContext(todosContext);

export default TodosProvider;
