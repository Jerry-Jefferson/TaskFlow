import type { TaskPriority } from "../model/taskSchema";

export const priorityMap: Record<TaskPriority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

export const priorityOptions = Object.entries(priorityMap).map(([value, label]) => ({
  value: value as TaskPriority,
  label,
}));
