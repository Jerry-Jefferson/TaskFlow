import { alpha, Chip, useTheme } from "@mui/material";
import type { TaskStatus } from "../../model/taskSchema";

export type TaskStatusChipProps = {
  status: TaskStatus;
};

const statusMap: Record<TaskStatus, { label: string; colorKey: "main" | "medium" | "low" }> = {
  todo: { label: "To Do", colorKey: "main" },
  in_progress: { label: "In Progress", colorKey: "medium" },
  done: { label: "Done", colorKey: "low" },
};

export function TaskStatusChip({ status }: TaskStatusChipProps) {
  const theme = useTheme();

  const { label, colorKey } = statusMap[status];
  const color =
    colorKey === "main"
      ? theme.palette.primary.main
      : theme.palette.taskPriority[colorKey];

  return (
    <Chip
      label={label}
      sx={{
        alignSelf: "flex-end",
        backgroundColor: alpha(color, 0.15),
        color,
        fontWeight: 600,
      }}
    />
  );
}
