export const AddTask = (props) => {
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
            />
            <button onClick={props.addTask} className="add-btn">
               Add Task
            </button>
         </div>
      </div>
   );
};
