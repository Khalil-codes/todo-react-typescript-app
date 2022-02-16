import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="container">
            <div className="content">
                <h2 className="mb-4">What would you like to complete today?</h2>
                <TodoForm />
                <hr />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
