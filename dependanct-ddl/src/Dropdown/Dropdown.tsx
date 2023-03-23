import DropdownStyle from "./DropdownStyle.module.css";

interface IDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any[];
  label?: string;
  value?: string;
  customKeys?: {
    key?: string;
    value?: string;
  };
}

export const Dropdown = (props: IDropdownProps) => {
  const { options, label, value, onChange, customKeys } = props;
  return (
    <div className={DropdownStyle.container}>
      <label>{label}</label>
      <select value={value} id={value} onChange={onChange}>
        <option>Select {label}</option>
        {options.map((option) => {
          if (typeof option === "string") {
            return (
              <option key={option} id={option}>
                {option}
              </option>
            );
          } else {
            const key = customKeys?.key || "id";
            const value = customKeys?.value || "value";
            return (
              <option key={option[key]} id={option[key]}>
                {option[value]}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};
