import clsx from "clsx";

export const getInputClass = (isDirty: boolean, isValid: boolean) => {
  return clsx(
    "input max-w-full",
    !isDirty && "input-solid",
    !isValid && isDirty && "input-solid-error",
    isValid && isDirty && "input-solid-success",
  );
};
