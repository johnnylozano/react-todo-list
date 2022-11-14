export const Task = (props) => {
   return (
      <div
         className="task"
         style={{
            backgroundColor: props.completed ? "green" : "#3f3f3f",
            textDecoration: props.completed ? "line-through" : "none",
            color: props.completed ? "rgba(255, 200, 200, 0.5)" : "#fff",
         }}
      >
         <h1>{props.taskName}</h1>
         <div className="">
            <button onClick={() => props.completeTask(props.id)}>
               Completed
            </button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
         </div>
      </div>
   );
};
