import axios from "axios";
import { ApiError } from "./apiError";

export function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const serverMessage = error.response?.data?.message;
    if (!error.response) {
      throw new ApiError("Network error. Please check your connection.");
    }
    throw new ApiError(serverMessage ?? `Request failed (${status})`, status, error.response?.data);
  }
  throw new ApiError("An unexpected error occurred.");
}
