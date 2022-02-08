import { useEffect, useState } from "react";

export interface formValidations {
  isEmpty: boolean;
  minLengthError: number;
}

const useValidation = (value: string, validations: formValidations) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          if (value.length > validation[validations]) {
            setMinLengthError(true);
          } else {
            setMinLengthError(false);
          }
          break;
        case "isEmpty":
          if (value) {
            setIsEmpty(false);
          } else {
            setIsEmpty(true);
          }
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);

  return { isEmpty, minLengthError, inputValid };
};

export default useValidation;
