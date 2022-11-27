import { useEffect, useMemo, useRef } from "react";

const usePrevious = (initialValue: number) => {
  let previousCount = useRef(initialValue);

  console.log("UsePrevious : ", initialValue);

  useEffect(() => {
    previousCount.current = initialValue;
  }, [initialValue]);

  return useMemo(() => {
    return previousCount.current;
  }, [initialValue]);
};

export default usePrevious;
