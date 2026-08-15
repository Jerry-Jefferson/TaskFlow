import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TaskStatus } from "../model/taskSchema";
import { editTask } from "../api/tasksApi";

export function useUpdateTaskStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: TaskStatus }) =>
      editTask(id, { status } as Parameters<typeof editTask>[1]),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (err) => console.error("Status update failed:", err.message),
  });
}
