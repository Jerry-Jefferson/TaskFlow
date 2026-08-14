import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import { TextInput } from "../textInput/textInput";
import { useDebounce } from "../../hooks/useDebounce";

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("search") ?? "");
  const debouncedValue = useDebounce(inputValue, 300);

  useEffect(() => {
    setSearchParams(
      (prev) => {
        if (debouncedValue) {
          prev.set("search", debouncedValue);
        } else {
          prev.delete("search");
        }
        return prev;
      },
      { replace: true }
    );
  }, [debouncedValue, setSearchParams]);

  return (
    <TextInput
      id="task-search"
      placeholder="Search tasks..."
      size="small"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      startIcon={<SearchIcon sx={{ color: "text.secondary" }} />}
      sx={{ maxWidth: 360 }}
    />
  );
}
