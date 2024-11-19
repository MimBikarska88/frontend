import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useCreateTaskMutation from "../../queries/useCreateTaskMutation";
import { PageMode } from "../../utils/constants";
import styles from "./Task.module.css";
import useUpdateTaskMutation from "../../queries/useUpdateTaskMutation";

const Task = ({ mode, style, taskProp, bgColor }) => {
  const [task, setTask] = useState(taskProp);

  const taskStyle = {
    backgroundColor: bgColor || "antiquewhite",
  };

  const queryClient = useQueryClient();

  const onSuccess = (res) => {
    setTask(taskProp);
    queryClient.invalidateQueries("getPendingToDoTasks");
    queryClient.invalidateQueries("getOverdueToDoTasks");
  };
  const onError = (res) => {
    console.log(res);
  };

  const createTaskMutation = useCreateTaskMutation(onError, onSuccess);
  const updateTaskMutation = useUpdateTaskMutation(onError, onSuccess);

  const onSave = () => {
    createTaskMutation.mutate(task);
  };
  const onEdit = () => {
    updateTaskMutation.mutate(task);
  };

  return (
    <>
      <div style={style} className={`${styles["task"]}`}>
        <div className={`${styles["task-content"]}`} style={taskStyle}>
          <input
            placeholder="title"
            type="text"
            value={task.name}
            onChange={(e) =>
              setTask((state) => ({ ...state, name: e.target.value }))
            }
            style={taskStyle}
            className={`${styles["border-and-margins"]} ${styles["task-title"]}`}
          />
          <textarea
            style={taskStyle}
            className={`${styles["border-and-margins"]} ${styles["task-body"]}`}
            placeholder="To Do ... "
            value={task.description}
            onChange={(e) =>
              setTask((state) => ({ ...state, description: e.target.value }))
            }
          ></textarea>
          {mode === PageMode.Create && (
            <input
              type="date"
              style={taskStyle}
              value={task.dueDate}
              onChange={(e) =>
                setTask((state) => ({ ...state, dueDate: e.target.value }))
              }
              className={`${styles["border-and-margins"]} ${styles["task-title"]}`}
            />
          )}
          {mode === PageMode.Edit && (
            <>
              <div>
                <input
                  type="date"
                  style={taskStyle}
                  value={task.dueDate}
                  onChange={(e) =>
                    setTask((state) => ({ ...state, dueDate: e.target.value }))
                  }
                  className={`d-inline-block ${styles["border-and-margins"]} ${styles["task-title"]}`}
                />
                <input
                  className={`d-inline-block ${styles["border-and-margins"]} ${styles["task-checkbox"]}`}
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() =>
                    setTask((state) => ({ ...state, isDone: !state.isDone }))
                  }
                />
                <button
                  onClick={onEdit}
                  className={` d-inline-block ${styles["tick"]}`}
                >
                  ✔
                </button>
              </div>
            </>
          )}
        </div>
        {mode !== PageMode.Edit && (
          <button className={`${styles["task-button"]}`} onClick={onSave}>
            Add
          </button>
        )}
      </div>
    </>
  );
};
export default Task;
