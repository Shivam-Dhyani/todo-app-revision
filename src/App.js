import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodoIdx, setEditTodoIdx] = useState(-1);

  const onHandleSubmit = (event) => {
    if (editTodoIdx >= 0) {
      todos.map((todo, index) => {
        if (index === editTodoIdx) {
          console.log("Edit Mode Started");
          console.log(todos[editTodoIdx]);
          todos[editTodoIdx] = todo;
          setTodos(todos);
          setEditTodoIdx(-1);
          console.log("Edit Mode Endeded");
        }
      });
    } else {
      setTodos([...todos, todo]);
    }
    event.preventDefault();
    // setTodo("");
  };

  const handleEditTodo = (idx) => {
    const editTodoIdx = todos.findIndex((todo, index) => index === idx);
    console.log(editTodoIdx);
    setTodo(todos[editTodoIdx]);
    setEditTodoIdx(editTodoIdx);
  };

  const handleDeleteTodo = (idx) => {
    const updatedTodos = todos.filter((todo, index) => index !== idx);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <form
        onSubmit={(event) => {
          onHandleSubmit(event);
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button>Add</button>
      </form>
      <div>
        {todos.map((todo, idx) => {
          return (
            <li key={idx}>
              {todo}
              <button onClick={() => handleEditTodo(idx)}>Edit</button>
              <button onClick={() => handleDeleteTodo(idx)}>delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
