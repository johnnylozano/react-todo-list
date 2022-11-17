import { RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";

export const Task = (props) => {
   return (
      <div
         className="task"
         style={{
            backgroundColor: props.completed ? "green" : "rgb(67, 6, 105)",
            textDecoration: props.completed ? "line-through" : "none",
            color: props.completed ? "rgba(255, 200, 200, 0.5)" : "#fff",
         }}
      >
         <h1>{props.taskName}</h1>
         <div className="icons">
            <RiCheckboxCircleLine
               onClick={() => props.completeTask(props.id)}
               className="complete-icon"
            />
            <RiCloseCircleLine
               onClick={() => props.deleteTask(props.id)}
               className="delete-icon"
            />
         </div>
      </div>
   );
};
