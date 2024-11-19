import useGetOverdueTasksQuery from "../../queries/useGetOverdueTasks";
import { PageMode } from "../../utils/constants";
import { generateOverdueToDoColor } from "../../utils/util";
import Task from "../Task/Task";
const OverdueTasks = () => {
  const { data, isError, isFetching } = useGetOverdueTasksQuery();

  if (isFetching) return <h3>Loading...</h3>;

  if (isError) return <h3>Something went wrong in Overdue ToDo's</h3>;

  return (
    <>
      <div
        style={{
          marginRight: "3rem",
          maxHeight: "85vh",
          overflowY: "auto",
          marginTop: "2rem",
        }}
      >
        {data && data.length > 0 ? (
          <>
            {data.map((task) => (
              <Task
                key={task.id}
                mode={PageMode.Edit}
                task={task}
                bgColor={generateOverdueToDoColor()}
              />
            ))}
          </>
        ) : (
          <h3 className="text-center">To Do List is empty</h3>
        )}
      </div>
    </>
  );
};
export default OverdueTasks;
