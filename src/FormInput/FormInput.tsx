import React, { useState } from "react";
import "./FormInput.css";

interface formInputProps {
  onChange: () => {};
  label: string;
  id: number;
  errorMassage: string;
  required: boolean;
  value: string;
  name: string;
  edit: boolean;
}

const FormInput = (props: formInputProps) => {
  const [dirty, setDirty] = useState(false);
  const {
    onChange,
    label,
    id,
    errorMassage,
    required,
    value,
    name,
    edit,
    ...restProps
  } = props;

  const handleOnFocus = () => {
    setDirty(true);
  };

  return (
    <div className="input">
      <label className="input__label">
        {label}
        {dirty && required && !value && (
          <p className="input__label--error">{errorMassage}</p>
        )}
      </label>

      <input
        required
        name={name}
        className={`input__field input__field--${
          edit ? "active" : "inactive"
        } input__field--${
          dirty && required && !value ? "invalid" : "valid"
        } input__field--${name === "comment" ? "textarea" : "input"}`}
        {...restProps}
        onChange={onChange}
        onFocus={handleOnFocus}
      />
    </div>
  );
};
export default FormInput;
