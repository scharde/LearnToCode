import { useCallback, useState } from "react";

const useCount = (initialValue: number, changeCountBy: number = 1) => {
  const [count, setCount] = useState(initialValue);

  console.log("UseCount : ", initialValue);

  const onIncrement = useCallback(
    () => setCount(count + changeCountBy),
    [count, changeCountBy]
  );
  const onDecrement = useCallback(
    () => setCount(count - changeCountBy),
    [count, changeCountBy]
  );

  return [count, onIncrement, onDecrement] as [number, () => void, () => void];
};

export default useCount;
