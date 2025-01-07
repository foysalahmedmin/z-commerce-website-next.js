import { useEffect, useState } from "react";

const useScrollPosition = (ref = null) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollBottom, setScrollBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const target = ref ? ref.current : document.documentElement;
      if (target) {
        const scrollTop = target.scrollTop || 0;
        const scrollHeight = target.scrollHeight || 0;
        const clientHeight = target.clientHeight || 0;
        const scrollBottom = scrollHeight - scrollTop - clientHeight;
        setScrollTop(scrollTop);
        setScrollBottom(scrollBottom);
      }
    };

    const target = ref ? ref.current : window;
    if (target) {
      target.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (target) {
        target.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  return { scrollTop, scrollBottom };
};

export default useScrollPosition;
