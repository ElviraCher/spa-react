import React, { useState } from "react";
import useValidation from "./useValidation.tsx";
import { formValidations } from "./useValidation.tsx";

const useInput = (initialValue: string, validations: formValidations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  const onInputBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    isDirty,
    onInputChange,
    onInputBlur,
    ...valid,
  };
};

export default useInput;

