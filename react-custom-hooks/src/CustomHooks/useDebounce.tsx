import { useEffect, useState } from "react";

const useDebounce = (initialValue: string, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [initialValue]);

  return debounceValue;
};

export default useDebounce;
