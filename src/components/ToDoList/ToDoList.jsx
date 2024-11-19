import styles from "./ToDoList.module.css";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import OverdueTasks from "../OverdueTasks/OverdueTasks";
import PendingTasks from "../PendingTasks/PendingTasks";
const ToDoList = () => {
  return (
    <div className={styles["tasks"]}>
      <CreateTaskForm />
      <div>
        <h3
          style={{
            marginLeft: "-5rem",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          Overdue
        </h3>
        <OverdueTasks />
      </div>
      <div>
        <h3
          style={{
            marginLeft: "-5rem",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          Pending
        </h3>
        <PendingTasks />
      </div>
    </div>
  );
};
export default ToDoList;
