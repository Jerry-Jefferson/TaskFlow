import { Box, Typography } from "@mui/material";
import type { Task, TaskStatus } from "../../model/taskSchema";
import { TaskPriority } from "./taskPriority";
import { TaskActions } from "./taskActions";
import { TaskStatusChip } from "./taskStatusChip";
import { formatDate } from "../../../../shared/utils/formatDate";

export type TaskCardProps = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onDetails: (task: Task) => void;
  onStatusChange: (taskId: string, status: TaskStatus) => void;
};

export function TaskCard({ task, onEdit, onDelete, onDetails, onStatusChange }: TaskCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
        p: 2,
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "5px solid",
        borderLeftColor: `taskPriority.${task.priority}`,
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
    >
      <TaskStatusChip
        status={task.status}
        onStatusChange={(status) => onStatusChange(task.id, status)}
      />
      <Box onClick={() => onDetails(task)} sx={{ cursor: "pointer" }}>
        <Typography variant="h3">{task.title}</Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {task.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mt: 1,
            pb: 1,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <TaskPriority priority={task.priority} />
          <Typography sx={{ color: "text.secondary" }}>{formatDate(task.createdAt)}</Typography>
        </Box>
      </Box>
      <TaskActions onEdit={() => onEdit(task)} onDelete={() => onDelete(task)} />
    </Box>
  );
}
