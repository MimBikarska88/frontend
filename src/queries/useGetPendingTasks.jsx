import { useQuery } from "@tanstack/react-query";
import http from "./http";
//  have to filter data
function useGetPendingTasksQuery(options = {}) {
  return useQuery({
    ...options,
    queryKey: ["getPendingToDoTasks"],
    queryFn: () => {
      return http.get("/Tasks/pending");
    },
    enabled: true,
    select: (data) => {
      return data.data;
    },
  });
}

export default useGetPendingTasksQuery;
