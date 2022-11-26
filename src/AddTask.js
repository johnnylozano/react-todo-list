import { useContext } from "react";
import { AppContext } from "./App";

export const AddTask = (props) => {
   const { newTask } = useContext(AppContext);

   return (
      <div className="addTask">
         <h1>Add New Task</h1>
         <div>
            <input
               type="text"
               onChange={props.handleChange}
               placeholder="Enter a task"
               onKeyDown={props.handleEnter}
               className="todo-input"
               value={newTask}
            />
            <button onClick={props.addTask} className="add-btn">
               Add Task
            </button>
         </div>
      </div>
   );
};
