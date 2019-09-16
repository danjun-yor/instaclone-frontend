import { useState, ChangeEvent } from "react";

export default (defaultValues: any) => {
  const [value, setValue] = useState(defaultValues);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    }: Pick<ChangeEvent<HTMLInputElement>, "target"> = e;

    setValue(value);
  };

  return { value, onChange };
};
