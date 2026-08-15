import { useSearchParams } from "react-router";
import { useTasks } from "../../hooks/useTasks";
import { TaskCard } from "../taskCard/taskCard";
import { FeedbackCard } from "../../../../shared/components/feedbackCard/feedbackCard";
import { TaskListSkeleton } from "../tasksPage/taskListSkeleton";
import { Box, Button, Typography, type SxProps, type Theme } from "@mui/material";
import { ModalWindow } from "../../../../shared/components/modalWindow/modalWindow";
import { TaskForm } from "../taskForm/taskForm";
import AddIcon from "@mui/icons-material/Add";
import { useTaskActions } from "../../hooks/useTaskActions";
import { DeleteConfirmDialog } from "../../../../shared/components/deleteConfirmDialog/deleteConfirmDialog";
import { filterTasks } from "../../model/filterTasks";
import { TaskDetails } from "../taskDetails/taskDetails";
import { useUpdateTaskStatus } from "../../hooks/useUpdateTaskStatus";
import type { TaskStatus } from "../../model/taskSchema";

const centeredBoxSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
};

function NewTaskButton({ onClick }: { onClick: () => void }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mt: 3,
      }}
    >
      <Button variant="contained" startIcon={<AddIcon />} onClick={onClick}>
        New Task
      </Button>
    </Box>
  );
}

export function TaskList() {
  const { isLoading, error: tasksError, refetch, data } = useTasks();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";
  const statusFilter = searchParams.get("status");
  const {
    selectedTask,
    isOpen,
    handleClose,
    handleCreate,
    handleEdit,
    handleDelete,
    openCreate,
    openEdit,
    openDelete,
    openDetails,
    createError,
    deleteError,
    editError,
    isDeleting,
    isEditing,
    isCreating,
  } = useTaskActions();

  const statusMutation = useUpdateTaskStatus();
  const handleStatusChange = (taskId: string, status: TaskStatus) => {
    statusMutation.mutate({ id: taskId, status });
  };

  const filteredTasks = filterTasks(data ?? [], searchQuery, statusFilter);

  if (isLoading) {
    return <TaskListSkeleton />;
  }

  if (tasksError) {
    return (
      <Box sx={centeredBoxSx}>
        <FeedbackCard
          variant="error"
          infoText="Something went wrong"
          description={tasksError.message}
        >
          <Button fullWidth variant="outlined" color="error" onClick={() => refetch()}>
            Retry
          </Button>
        </FeedbackCard>
      </Box>
    );
  }

  return (
    <>
      {!data?.length ? (
        <Box sx={centeredBoxSx}>
          <FeedbackCard
            infoText="Seems there are no tasks yet"
            description="Be first to create one"
          >
            <NewTaskButton onClick={openCreate} />
          </FeedbackCard>
        </Box>
      ) : (
        <>
          {filteredTasks.length ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
                gap: 2,
                mt: 3,
              }}
            >
              {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} onEdit={openEdit} onDelete={openDelete} onDetails={openDetails} onStatusChange={handleStatusChange} />
              ))}
            </Box>
          ) : (
            <Typography variant="h3" sx={{ color: "primary.main", mt: 3 }}>
              No tasks match your search
            </Typography>
          )}
          <NewTaskButton onClick={openCreate} />
        </>
      )}
      {isOpen("create") && (
        <ModalWindow header="Create a new task" handleCancel={handleClose}>
          <TaskForm
            handleCancel={handleClose}
            onSubmit={handleCreate}
            error={createError?.message}
            isPending={isCreating}
            acceptText="Create"
          />
        </ModalWindow>
      )}
      {isOpen("delete") && selectedTask && (
        <DeleteConfirmDialog
          header="Delete task"
          itemTitle={selectedTask.title}
          handleClose={handleClose}
          handleDelete={() => handleDelete(selectedTask.id)}
          isPending={isDeleting}
          error={deleteError?.message}
        />
      )}
      {isOpen("edit") && selectedTask && (
        <ModalWindow header="Edit task" handleCancel={handleClose}>
          <TaskForm
            initialValues={{
              title: selectedTask.title,
              description: selectedTask.description,
              status: selectedTask.status,
              priority: selectedTask.priority,
            }}
            handleCancel={handleClose}
            onSubmit={handleEdit}
            error={editError?.message}
            isPending={isEditing}
            acceptText="Save"
          />
        </ModalWindow>
      )}
      {isOpen("details") && selectedTask && (
        <ModalWindow header={`${selectedTask.title} details`} handleCancel={handleClose}>
          <TaskDetails task={selectedTask} />
        </ModalWindow>
      )}
    </>
  );
}
