import React from "react";
import { Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

type AutocompleteComponentProps = {
  name: string;
  control: any;
  options: string[];
  label: string;
  rules?: any;
};

const SelectProductType: React.FC<AutocompleteComponentProps> = ({ 
  name, control, options, label, rules 
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          options={options}
          onChange={(_, value) => field.onChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error ? error.message : ""}
              variant="outlined"
            />
          )}
        />
      )}
    />
  );
};

export default SelectProductType;