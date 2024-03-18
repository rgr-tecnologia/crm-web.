import { FormHelperText, TextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
};

export function FormTextField<T extends FieldValues>(props: FormFieldProps<T>) {
  const { control, name, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            {...field}
            error={Boolean(error)}
            fullWidth
            label={label}
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </>
      )}
    />
  );
}
