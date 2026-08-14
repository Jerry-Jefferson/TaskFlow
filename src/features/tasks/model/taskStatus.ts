import type { TaskStatus } from "./taskSchema";

export const statusMap: Record<TaskStatus, { label: string; colorKey: "main" | "medium" | "low" }> =
  {
    todo: { label: "To Do", colorKey: "main" },
    in_progress: { label: "In Progress", colorKey: "medium" },
    done: { label: "Done", colorKey: "low" },
  };

export const statusOptions = Object.entries(statusMap).map(([value, { label }]) => ({
  value: value as TaskStatus,
  label,
}));
