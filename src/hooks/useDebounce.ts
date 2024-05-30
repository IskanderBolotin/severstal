import { useRef, useEffect } from "react";

export default function useDebounce(fn: any, delay: number, cleanUp: boolean = false) {
  const timeoutRef = useRef<any>();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

  return (...args: any) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => fn(...args), delay);
  };
}