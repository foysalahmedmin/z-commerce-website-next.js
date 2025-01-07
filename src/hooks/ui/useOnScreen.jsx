import { useCallback, useEffect, useState } from "react";

export function useOnScreen(ref, options = { rootMargin: "0px" }) {
  const [entry, setEntry] = useState(false);

  const handleIntersection = useCallback(
    ([entry]) =>
      setEntry({
        isVisible: entry.isIntersecting,
        ratio: entry.intersectionRatio,
        width: entry.intersectionRect.width,
        height: entry.intersectionRect.height,
        target: entry.target,
      }),
    [],
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, options, handleIntersection]);

  return entry;
}
