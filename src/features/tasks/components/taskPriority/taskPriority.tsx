import { Box, Typography, useTheme } from "@mui/material";

export type TaskPriorityLevel = "low" | "medium" | "high";

export type TaskPriorityProps = {
  priority: TaskPriorityLevel;
};

const labels: Record<TaskPriorityLevel, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

export function TaskPriority({ priority }: TaskPriorityProps) {
  const theme = useTheme();
  const color = theme.palette.taskPriority[priority];

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: color,
          flexShrink: 0,
        }}
      />
      <Typography variant="body2" sx={{ color, fontWeight: 500 }}>
        {labels[priority]}
      </Typography>
    </Box>
  );
}
