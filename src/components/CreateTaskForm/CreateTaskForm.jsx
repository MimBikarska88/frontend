import Task from "../Task/Task";
import { PageMode } from "../../utils/constants";
const CreateTaskForm = () => {
  const initialTask = {
    name: "",
    description: "",
    dueDate: "",
  };

  return (
    <Task
      style={{ marginLeft: "2rem", marginTop: "3.5rem" }}
      taskProp={initialTask}
      mode={PageMode.Create}
    ></Task>
  );
};
export default CreateTaskForm;
