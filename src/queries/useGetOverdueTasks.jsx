import { useQuery } from "@tanstack/react-query";
import http from "./http";
//  have to filter data
function useGetOverdueTasksQuery(options = {}) {
  return useQuery({
    ...options,
    queryKey: ["getOverdueToDoTasks"],
    queryFn: () => {
      return http.get("/Tasks/overdue");
    },
    enabled: true,
    select: (data) => {
      return data.data;
    },
  });
}

export default useGetOverdueTasksQuery;
