import { CSSProperties } from "react";
import TextStyle from "./TextFieldStyle.module.css";

export interface ITextFieldProps
  extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  multiline?: boolean;
  styles?: {
    root?: CSSProperties;
    label?: CSSProperties;
    input?: CSSProperties;
  };
  inputRenderer?: (data: ITextFieldProps) => React.ReactNode;
}

const TextFieldBase = (props: ITextFieldProps) => {
  const { label, required, errorMessage, multiline, styles, inputRenderer } =
    props;

  const labelProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: required ? TextStyle.required : "",
    style: styles?.label,
  };

  const errorLabelProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
    className: TextStyle["label-error"],
  };

  const inputElement = () => {
    const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
      type: "text",
      className: `${TextStyle.input} ${
        errorMessage && TextStyle["input-error"]
      }`,
      ...props,
      style: styles?.input,
    };
    return <input {...inputProps} />;
  };

  const textareaElement = () => {
    const textareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
      className: `${TextStyle.textarea} ${
        errorMessage && TextStyle["input-error"]
      }`,
      ...props,
      style: styles?.input,
    };
    return <textarea {...textareaProps}></textarea>;
  };

  return (
    <div className={TextStyle.root} style={styles?.root}>
      {label && <label {...labelProps}>{label}</label>}
      {inputRenderer
        ? inputRenderer(props)
        : multiline
        ? textareaElement()
        : inputElement()}
      {errorMessage && <label {...errorLabelProps}>{errorMessage}</label>}
    </div>
  );
};

export const TextField = TextFieldBase;
