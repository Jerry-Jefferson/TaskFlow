import * as z from "zod/v4";

export const taskPrioritySchema = z.enum(["low", "medium", "high"]);
export const taskStatusSchema = z.enum(["todo", "in_progress", "done"]);

export const taskSchema = z.object({
  id: z.string(),
  title: z.string().trim().min(1, "Please fill in this field"),
  description: z.string().trim().min(1, "Please fill in this field"),
  status: taskStatusSchema,
  priority: taskPrioritySchema,
  createdAt: z.string(),
});

export const taskFormSchema = taskSchema.omit({
  id: true,
  createdAt: true,
});

export type Task = z.infer<typeof taskSchema>;
export type TaskPriority = z.infer<typeof taskPrioritySchema>;
export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type TaskFormData = z.infer<typeof taskFormSchema>;
