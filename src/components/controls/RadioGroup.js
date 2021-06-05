import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  FormLabel,
  Radio,
} from "@material-ui/core";

export default function RadioGroup(props) {
  const { label, name, value, onChange, items } = props;
  return (
    <div>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <MuiRadioGroup row name={name} value={value} onChange={onChange}>
          {items.map((item) => (
            <FormControlLabel
              key={item.id}
              label={item.title}
              value={item.id}
              control={<Radio />}
            />
          ))}
        </MuiRadioGroup>
      </FormControl>
    </div>
  );
}
