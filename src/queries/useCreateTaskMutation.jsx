import http from "./http";
import { useMutation } from "@tanstack/react-query";

const useCreateTaskMutation = (onError, onSuccess) => {
  return useMutation({
    mutationFn: (task) => http.post("/Tasks", task),
    onSuccess,
    onError,
  });
};

export default useCreateTaskMutation;
