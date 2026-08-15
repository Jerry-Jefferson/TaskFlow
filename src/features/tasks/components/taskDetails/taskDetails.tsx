import { Box, Divider, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import type { Task } from "../../model/taskSchema";
import { TaskStatusChip } from "../taskCard/taskStatusChip";
import { TaskPriority } from "../taskCard/taskPriority";
import { formatDate } from "../../../../shared/utils/formatDate";

export type TaskDetailsProps = {
  task: Task;
};

export function TaskDetails({ task }: TaskDetailsProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TaskStatusChip status={task.status} />
        <TaskPriority priority={task.priority} />
      </Box>
      <Divider />
      <Box>
        <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, mb: 0.5 }}>
          Description
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {task.description}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <CalendarTodayIcon sx={{ fontSize: 18, color: "text.secondary" }} />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Created {formatDate(task.createdAt)}
        </Typography>
      </Box>
    </Box>
  );
}
