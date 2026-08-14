import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../api/tasksApi";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: (err) => console.error("Delete task failed:", err.message),
  });
}
