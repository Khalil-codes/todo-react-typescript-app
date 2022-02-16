import React, { ChangeEvent, FC } from "react";
import { filterType, useTodos } from "../context/todosContext";

type Props = {};

const TodoFilter: FC<Props> = (props) => {
    const { changeFilter } = useTodos();
    const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        const status: string = e.target.value;
        let filterBy: filterType = "all";
        switch (status) {
            case "incomplete":
                filterBy = "incomplete";
                break;
            case "completed":
                filterBy = "completed";
                break;
            default:
                filterBy = "all";
                break;
        }
        changeFilter(filterBy);
    };
    return (
        <select className="form-select mt-2" onChange={handleFilter}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>
    );
};

export default TodoFilter;
