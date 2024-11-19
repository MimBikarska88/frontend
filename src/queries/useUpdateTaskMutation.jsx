import http from "./http";
import { useMutation } from "@tanstack/react-query";

const useUpdateTaskMutation = (onError, onSuccess) => {
  return useMutation({
    mutationFn: (task) => http.put(`/Tasks/${task.id}`, task),
    onSuccess,
    onError,
  });
};

export default useUpdateTaskMutation;
