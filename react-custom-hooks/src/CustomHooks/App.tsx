import useCount from "./useCount";
import useInput from "./useInput";
import usePrevious from "./usePrevious";

const App = () => {
  const input1 = useInput("1");
  const [count1, onIncrement1, onDecrement1] = useCount(
    1,
    parseInt(input1.value)
  );

  const input2 = useInput("1");
  const [count2, onIncrement2, onDecrement2] = useCount(
    100,
    parseInt(input2.value)
  );

  let previousCount1 = usePrevious(count1);
  let previousCount2 = usePrevious(count2);

  return (
    <div style={{ margin: 20 }}>
      <p>I am Custom hook App</p>
      <hr />
      <div>
        <p>Previous Count : {previousCount1}</p>
        <p>Count 1 : {count1}</p>
        <input type="number" {...input1} />
        <button onClick={onIncrement1}>Increment</button>
        <button onClick={onDecrement1}>Decrement</button>
      </div>
      <hr />
      <div>
        <p>Previous Count : {previousCount2}</p>
        <p>Count 2 : {count2}</p>
        <input type="number" {...input2} />
        <button onClick={onIncrement2}>Increment</button>
        <button onClick={onDecrement2}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
