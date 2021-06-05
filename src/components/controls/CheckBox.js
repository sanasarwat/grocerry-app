import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

export default function CheckBox(props) {
  const { label, name, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <div>
      <FormControl>
        <FormControlLabel
          control={
            <MuiCheckbox
              checked={value}
              name={name}
              color="primary"
              onChange={(e) =>
                onChange(convertToDefEventPara(name, e.target.checked))
              }
            />
          }
          label={label}
        />
      </FormControl>
    </div>
  );
}
