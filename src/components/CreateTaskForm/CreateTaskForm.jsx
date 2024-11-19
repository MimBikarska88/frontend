import Task from "../Task/Task";
import useCreateTaskMutation from "../../queries/useCreateTaskMutation";
import { useState } from "react";
import { PageMode } from "../../utils/constants";
import { useQueryClient } from "@tanstack/react-query";
const CreateTaskForm = () => {
  const initialTask = {
    name: "",
    description: "",
    dueDate: "",
  };
  const [task, setTask] = useState(initialTask);

  const queryClient = useQueryClient();
  const onSuccess = (res) => {
    setTask(initialTask);
    queryClient.invalidateQueries("getPendingToDoTasks");
    queryClient.invalidateQueries("getOverdueToDoTasks");
  };
  const onError = (res) => {
    console.log(res);
  };

  const createTaskMutation = useCreateTaskMutation(onError, onSuccess);

  const onSave = () => {
    createTaskMutation.mutate(task);
  };

  return (
    <Task
      style={{ marginLeft: "2rem", marginTop: "3.5rem" }}
      task={task}
      setTask={setTask}
      mode={PageMode.Create}
      onSave={onSave}
    ></Task>
  );
};
export default CreateTaskForm;
