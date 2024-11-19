import { PageMode } from "../../utils/constants";
import styles from "./Task.module.css";
const Task = ({ mode, style, onClick, onSave, task, setTask, bgColor }) => {
  const taskStyle = {
    backgroundColor: bgColor || "antiquewhite",
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
                  onChange={() =>
                    setTask((state) => ({ ...state, isDone: !state.isDone }))
                  }
                />
                <button
                  onClick={() => {
                    console.log(task);
                  }}
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
