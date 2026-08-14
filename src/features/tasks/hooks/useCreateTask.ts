import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../api/tasksApi";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (err) => console.error("Create task failed:", err.message),
  });
}
