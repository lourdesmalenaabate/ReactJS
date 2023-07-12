import { useEffect, useState } from "react";

export function useTimerCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    if (isStopped) return;

    const intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isStopped, counter]); //Siempre recordar que los efectos se ejecutan cuando se monta el componente y cuando cambia el valor de la dependencia

  const start = () => setIsStopped(false);

  return {
    value: counter,
    isStopped,
    start,
    stop() {
      setIsStopped(true);
    },
    reset() {
      setCounter(initialValue);
    },
  };
}
