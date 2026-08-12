import { Box, Typography } from "@mui/material";
import type { TaskPriority } from "../../model/taskSchema";

export type TaskPriorityProps = {
  priority: TaskPriority;
};

const labels: Record<TaskPriority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

export function TaskPriority({ priority }: TaskPriorityProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "right", alignItems: "center", gap: 1 }}>
      <Box
        sx={(theme) => ({
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: theme.palette.taskPriority[priority],
          flexShrink: 0,
        })}
      />
      <Typography variant="body2" sx={{ color: "text.main", fontWeight: 500 }}>
        {labels[priority]}
      </Typography>
    </Box>
  );
}
