import { FormControl, FormHelperText, InputLabel, MenuItem, Select, type SxProps, type Theme } from "@mui/material";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

export type SelectOption = {
  value: string;
  label: string;
};

export type FormSelectProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: SelectOption[];
  error?: boolean;
  helperText?: string;
  sx?: SxProps<Theme>;
};

export function FormSelect<T extends FieldValues>({
  name,
  control,
  label,
  options,
  error,
  helperText,
  sx,
}: FormSelectProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          error={error}
          fullWidth
          sx={[
            (theme) => ({
              "& .MuiOutlinedInput-root": {
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                borderRadius: 2,

                "& fieldset": {
                  borderColor: theme.palette.divider,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.divider,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                },
              },
              "& .MuiInputLabel-root": {
                color: theme.palette.text.secondary,
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: theme.palette.primary.main,
              },
            }),
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
        >
          <InputLabel>{label}</InputLabel>
          <Select label={label} {...field}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
