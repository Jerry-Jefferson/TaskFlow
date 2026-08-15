import { Box, Typography } from "@mui/material";
import { Header } from "../../../../shared/components/header/header";
import { TaskList } from "../tasksList/tasksList";

export function TasksPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "background.default",
      }}
    >
      <Header />
      <Box sx={{ p: 4 }}>
        <Typography variant="h1" sx={{ color: "text.primary" }}>
          All Tasks
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Manage and track your active workflows
        </Typography>
        <TaskList />
      </Box>
    </Box>
  );
}
