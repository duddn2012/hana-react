import { useState } from "react";

export function useTrottle() {
  const [isTrottling, setTrottling] = useState(false);

  function trottle(cb: () => void, delay: number) {
    if (isTrottling) return;
    setTrottling(true);
    setTimeout(() => {
      cb();
      setTrottling(false);
    }, delay);
  }
  return trottle;
}
