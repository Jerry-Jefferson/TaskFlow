import axios from "axios";
import type { Task } from "../model/taskSchema";

const API_URL = import.meta.env.VITE_API_URL;

export async function getTasks(): Promise<Task[]> {
  const { data } = await axios.get<Task[]>(`${API_URL}/tasks`);
  return data;
}
