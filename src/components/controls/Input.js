import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const { label, name, value, onChange, error = null, ...other } = props;
  return (
    <div>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
}
