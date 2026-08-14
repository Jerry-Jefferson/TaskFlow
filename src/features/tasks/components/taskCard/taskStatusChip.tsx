import { alpha, Chip, useTheme } from "@mui/material";
import type { TaskStatus } from "../../model/taskSchema";
import { statusMap } from "../../model/taskStatus";

export type TaskStatusChipProps = {
  status: TaskStatus;
};

export function TaskStatusChip({ status }: TaskStatusChipProps) {
  const theme = useTheme();

  const { label, colorKey } = statusMap[status];
  const color =
    colorKey === "main" ? theme.palette.primary.main : theme.palette.taskPriority[colorKey];

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
