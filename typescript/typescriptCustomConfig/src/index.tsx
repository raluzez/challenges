import React, { useState } from "react";
import ReactDOM from "react-dom";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  completed: boolean;
}
const App = (): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <React.Fragment key={index}>
            <div
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(index)}>
              {" "}
              {todo.completed ? "Incomplete" : "Complete"}{" "}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              &times;
            </button>
          </React.Fragment>
        ))}
      </section>
    </>
  );
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
