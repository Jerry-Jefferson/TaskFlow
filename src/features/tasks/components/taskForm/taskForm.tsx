import { Box, Button, FormHelperText } from "@mui/material";
import { taskFormSchema, type TaskFormData } from "../../model/taskSchema";
import { TextInput } from "../../../../shared/components/textInput/textInput";
import { TextArea } from "../../../../shared/components/textArea/textArea";
import { FormSelect } from "../../../../shared/components/formSelect/formSelect";
import { statusOptions } from "../../model/taskStatus";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { priorityOptions } from "../../model/taskPriority";

const taskFields = {
  title: "title",
  description: "description",
  status: "status",
  priority: "priority",
} as const;

const defaultTaskFields: TaskFormData = {
  [taskFields.title]: "",
  [taskFields.description]: "",
  [taskFields.status]: "todo",
  [taskFields.priority]: "low",
};

export type TaskFormProps = {
  initialValues?: TaskFormData;
  cancelText?: string;
  acceptText?: string;
  error?: string;
  isPending?: boolean;
  handleCancel: () => void;
  onSubmit: (data: TaskFormData) => void;
};

export function TaskForm({
  initialValues,
  cancelText = "Cancel",
  acceptText = "Ok",
  error,
  isPending = false,
  handleCancel,
  onSubmit,
}: TaskFormProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
    mode: "onChange",
    delayError: 500,
    defaultValues: initialValues ?? defaultTaskFields,
  });

  return (
    <Box
      component="form"
      id="taskForm"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "background.default",
        minWidth: { xs: "auto", sm: "300px" },
      }}
    >
      <TextInput
        {...register(taskFields.title)}
        label="Title"
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <TextArea
        {...register(taskFields.description)}
        label="Description"
        error={!!errors.description}
        helperText={errors.description?.message}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <FormSelect
          control={control}
          name={taskFields.status}
          label="Status"
          options={statusOptions}
          error={!!errors.status}
          helperText={errors.status?.message}
        />
        <FormSelect
          control={control}
          name={taskFields.priority}
          label="Priority"
          options={priorityOptions}
          error={!!errors.priority}
          helperText={errors.priority?.message}
        />
      </Box>
      {error && (
        <FormHelperText error sx={{ fontSize: "0.875rem" }}>
          {`Error: ${error}`}
        </FormHelperText>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Button fullWidth type="button" onClick={handleCancel} variant="outlined">
          {cancelText}
        </Button>
        <Button
          fullWidth
          form="taskForm"
          disabled={!isValid || isPending}
          loading={isPending}
          type="submit"
          variant="contained"
        >
          {acceptText}
        </Button>
      </Box>
    </Box>
  );
}
