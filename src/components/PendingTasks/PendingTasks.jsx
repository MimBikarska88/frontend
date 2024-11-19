import { PageMode } from "../../utils/constants";
import Task from "../Task/Task";
import useGetPendingTasksQuery from "../../queries/useGetPendingTasks";
import { generatePendingToDoColor } from "../../utils/util";
const PendingTasks = () => {
  const { data, isError, isFetching } = useGetPendingTasksQuery();

  if (isFetching) return <h3>Loading...</h3>;

  if (isError) return <h3>Something went wrong in ToDo's</h3>;

  console.log(data);
  return (
    <>
      <div
        className="tasks"
        style={{
          marginRight: "3rem",
          maxHeight: "85vh",
          overflowY: "scroll",
          marginTop: "2rem",
        }}
      >
        {data && data.length > 0 ? (
          data.map((task) => (
            <Task
              key={task.id}
              mode={PageMode.Edit}
              taskProp={task}
              bgColor={generatePendingToDoColor()}
            />
          ))
        ) : (
          <h3 className="text-center">To Do List is empty</h3>
        )}
      </div>
    </>
  );
};
export default PendingTasks;
