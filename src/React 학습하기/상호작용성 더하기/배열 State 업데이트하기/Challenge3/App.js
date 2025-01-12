import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {id: nextId++, title: title, done: false}
    ])
  }

  function handleChangeTodo(nextTodo) {
    // const todo = todos.find(t =>
    //   t.id === nextTodo.id
    // );
    // todo.title = nextTodo.title;
    // todo.done = nextTodo.done;
    // setTodos([
    //   ...todos.slice(0, nextTodo.id),
    //   todo,
    //   ...todos.slice(nextTodo.id + 1)
    // ])
    // 위 코드는 비효율적. nextTodo에 변경된 상태의 객체가 바로 전달된다.
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    // const index = todos.findIndex(t =>
    //   t.id === todoId
    // );
    // todos.splice(index, 1);
    // console.log(todos);
    // setTodos(todos);
    // 위 경우 todos를 그대로 setTodos함수에 전달하므로 state가 변경되지 않은 걸로 인식한다.

    setTodos(
      todos.filter(t => t.id !== todoId)
    );
    
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
