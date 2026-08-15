import axios from "axios";
import { taskSchema, type Task, type TaskFormData } from "../model/taskSchema";
import { handleApiError } from "../../../shared/api/handleApiError";
import z from "zod/v4";

const API_URL = import.meta.env.VITE_API_URL;

export async function getTasks(): Promise<Task[]> {
  try {
    const { data } = await axios.get<Task[]>(`${API_URL}/tasks`);
    return z.array(taskSchema).parse(data);
  } catch (err) {
    handleApiError(err);
  }
}

export async function createTask(task: TaskFormData): Promise<Task> {
  try {
    const taskToCreate = {
      ...task,
      createdAt: new Date().toISOString(),
    };
    const { data } = await axios.post<Task>(`${API_URL}/tasks`, taskToCreate);
    return taskSchema.parse(data);
  } catch (err) {
    handleApiError(err);
  }
}

export async function editTask(id: string, task: TaskFormData): Promise<Task> {
  try {
    const { data } = await axios.patch<Task>(`${API_URL}/tasks/${id}`, task);
    return taskSchema.parse(data);
  } catch (err) {
    handleApiError(err);
  }
}

export async function deleteTask(id: string): Promise<void> {
  try {
    await axios.delete(`${API_URL}/tasks/${id}`);
  } catch (err) {
    handleApiError(err);
  }
}
