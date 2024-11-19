import { useQuery } from "@tanstack/react-query";
import { OrderBy, Status } from "../utils/constants";
import http from "./http";
//  have to filter data
function useGetTasksQuery(
  orderBy = OrderBy.Asc,
  status = Status.All,
  options = {}
) {
  return useQuery({
    ...options,
    queryKey: ["getToDoTasks", orderBy, status],
    queryFn: () => {
      return http.get("/Tasks", {
        params: { orderBy, status },
      });
    },
    enabled: !!orderBy && !!status,
    select: (data) => {
      return data.data;
    },
  });
}

export default useGetTasksQuery;
