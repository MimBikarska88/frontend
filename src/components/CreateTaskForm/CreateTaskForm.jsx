import Task from "../Task/Task";
import useCreateTaskMutation from "../../queries/useCreateTaskMutation";
import { PageMode } from "../../utils/constants";
import { useQueryClient } from "@tanstack/react-query";
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
      onSave={onSave}
    ></Task>
  );
};
export default CreateTaskForm;
