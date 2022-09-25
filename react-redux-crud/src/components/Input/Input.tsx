import { ChangeEvent } from "react";
import Style from "./InputStyle.module.css";

export interface IProps {
  label: string;
  value: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IProps) => {
  const { label, value, type = "text", onChange } = props;
  return (
    <div className={Style.container}>
      <label>{label} : </label>
      <div>
        <input
          type={type}
          value={value}
          className={Style.input}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
