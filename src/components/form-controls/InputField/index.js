import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
function InputField(props) {
  const { form, name, label, disabled } = props;
  console.log("form", form);
  return (
    <Controller
      name={name}
      control={form.control}
      render={(renderProp) => {
        const {
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, error },
        } = renderProp;
        console.log("renderProp", renderProp);
        return (
          <TextField
            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            error={invalid}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disabled}
          />
        );
      }}
    />
  );
}
export default InputField;
