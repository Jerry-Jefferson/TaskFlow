import { useSearchParams } from "react-router";

export type TaskModal = "create" | "edit" | "delete" | "details";

export function useModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const openModal = (modal: TaskModal) => {
    setSearchParams((params) => {
      params.set("modal", modal);
      return params;
    });
  };

  const closeModal = () => {
    setSearchParams((params) => {
      params.delete("modal");
      return params;
    });
  };

  const isOpen = (modal: TaskModal) => {
    return searchParams.get("modal") === modal;
  };

  return { isOpen, openModal, closeModal };
}
