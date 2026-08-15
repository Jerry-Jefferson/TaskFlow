import { useCallback, useState } from "react";
import { useDeleteTask } from "../hooks/useDeleteTask";
import { useEditTask } from "../hooks/useEditTask";
import { useCreateTask } from "../hooks/useCreateTask";
import { useModal } from "../../../shared/hooks/useModal";
import type { Task, TaskFormData } from "../model/taskSchema";

export function useTaskActions() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const { isOpen, openModal, closeModal } = useModal();

  const createMutation = useCreateTask();
  const editMutation = useEditTask();
  const deleteMutation = useDeleteTask();

  const handleClose = useCallback(() => {
    setSelectedTask(null);
    closeModal();
  }, [closeModal]);

  const handleCreate = useCallback(
    (data: TaskFormData) => {
      createMutation.mutate(data, {
        onSuccess: handleClose,
      });
    },
    [createMutation, handleClose]
  );

  const handleEdit = useCallback(
    (data: TaskFormData) => {
      if (!selectedTask) return;
      editMutation.mutate(
        { id: selectedTask.id, task: data },
        {
          onSuccess: handleClose,
        }
      );
    },
    [selectedTask, editMutation, handleClose]
  );

  const handleDelete = useCallback(
    (id: string) => {
      deleteMutation.mutate(id, {
        onSuccess: handleClose,
      });
    },
    [deleteMutation, handleClose]
  );

  const openCreate = useCallback(() => {
    createMutation.reset();
    openModal("create");
  }, [openModal, createMutation]);

  const openEdit = useCallback(
    (task: Task) => {
      setSelectedTask(task);
      openModal("edit");
    },
    [openModal]
  );

  const openDelete = useCallback(
    (task: Task) => {
      setSelectedTask(task);
      openModal("delete");
    },
    [openModal]
  );

  const openDetails = useCallback(
    (task: Task) => {
      setSelectedTask(task);
      openModal("details");
    },
    [openModal]
  );

  return {
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
    createError: createMutation.error,
    isCreating: createMutation.isPending,
    editError: editMutation.error,
    isEditing: editMutation.isPending,
    deleteError: deleteMutation.error,
    isDeleting: deleteMutation.isPending,
  };
}
