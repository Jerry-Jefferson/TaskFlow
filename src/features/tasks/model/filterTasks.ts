import type { Task } from "../model/taskSchema";

export function filterTasks(tasks: Task[], searchQuery: string, statusFilter: string | null) {
  let result = tasks;

  if (statusFilter) {
    result = result.filter((task) => task.status === statusFilter);
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();

    result = result.filter(
      (task) =>
        task.title.toLowerCase().includes(query) || task.description.toLowerCase().includes(query)
    );
  }

  return result;
}
