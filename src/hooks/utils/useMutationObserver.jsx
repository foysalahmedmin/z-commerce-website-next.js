import { useEffect } from "react";

export function useMutationObserver(ref, callback, options) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new MutationObserver(callback);
    observer.observe(ref.current, options);

    return () => observer.disconnect();
  }, [ref, callback, options]);
}
