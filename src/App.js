import { useState } from "react";
import { AddTask } from "./AddTask";
import "./App.css";
import { Task } from "./Task";

function App() {
   const [todoList, setTodoList] = useState([]);
   const [newTask, setNewTask] = useState("");

   const handleChange = (event) => {
      setNewTask(event.target.value);
   };

   const addTask = () => {
      const task = {
         id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
         taskName: newTask,
         completed: false,
      };
      if (task.taskName === "") return;
      setTodoList([...todoList, task]); // spread operator
   };

   const deleteTask = (id) => {
      setTodoList(todoList.filter((task) => task.id !== id));
   };

   const completeTask = (id) => {
      setTodoList(
         todoList.map((task) => {
            if (task.id === id) {
               return task.completed
                  ? { ...task, completed: false }
                  : { ...task, completed: true };
            } else {
               return task;
            }
         })
      );
   };

   const handleEnter = (event) => {
      event.key === "Enter" && addTask();
   };

   return (
      <div className="App">
         <AddTask
            handleChange={handleChange}
            addTask={addTask}
            handleEnter={handleEnter}
         />
         <div className="list">
            {todoList.map((task, key) => {
               return (
                  <Task
                     taskName={task.taskName}
                     id={task.id}
                     completed={task.completed}
                     deleteTask={deleteTask}
                     completeTask={completeTask}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default App;
