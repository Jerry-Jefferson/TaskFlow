import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TaskFormData } from "../model/taskSchema";
import { editTask } from "../api/tasksApi";

export function useEditTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, task }: { id: string; task: TaskFormData }) => editTask(id, task),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: (err) => console.error("Edit task failed:", err.message),
  });
}
