import { useTasks } from "../../hooks/useTasks";
import { TaskCard } from "../taskCard/taskCard";
import { FeedbackCard } from "../../../../shared/components/feedbackCard/feedbackCard";
import { TaskListSkeleton } from "../tasksPage/taskListSkeleton";
import { Box, Button } from "@mui/material";

export function TaskList() {
  const { isLoading, error, refetch, data } = useTasks();
  if (isLoading) {
    return <TaskListSkeleton />;
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FeedbackCard variant="error" infoText="Something went wrong" description={error.message}>
          <Button fullWidth variant="outlined" color="error" onClick={() => refetch()}>
            Retry
          </Button>
        </FeedbackCard>
      </Box>
    );
  }

  if (!data?.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FeedbackCard infoText="Seems there are no tasks yet" description="Be first to create one">
          <Button fullWidth variant="contained" onClick={() => {}}>
            New Task
          </Button>
        </FeedbackCard>
      </Box>
    );
  }
  
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
        gap: 2,
        mt: 3,
      }}
    >
      {data?.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Box>
  );
}
