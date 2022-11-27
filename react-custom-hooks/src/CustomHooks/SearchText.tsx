import useDebounce from "./useDebounce";
import useInput from "./useInput";

const SearchTextbox = () => {
  const input = useInput("");

  const debounceValue = useDebounce(input.value, 1000);

  return (
    <div style={{ margin: 20 }}>
      <input type="text" placeholder="Search" {...input} />
      <p>{debounceValue}</p>
    </div>
  );
};

export default SearchTextbox;
