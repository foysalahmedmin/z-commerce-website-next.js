import { useEffect } from "react";

const useRippleEffect = (ref, disabled) => {
  useEffect(() => {
    if (!ref?.current || disabled) return;

    const element = ref.current;

    const createRipple = (e) => {
      const rippleContainer = document.createElement("span");
      const ripple = document.createElement("span");

      const diameter = Math.max(element.clientWidth, element.clientHeight);
      const radius = diameter / 2;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - radius;
      const y = e.clientY - rect.top - radius;

      rippleContainer.style.pointerEvents = "none";
      rippleContainer.style.overflow = "hidden";
      rippleContainer.style.position = "absolute";
      rippleContainer.style.inset = "0px";

      ripple.style.pointerEvents = "none";
      ripple.style.borderRadius = "50%";
      ripple.style.position = "absolute";
      ripple.style.backgroundColor = "hsla(var(--title) / 0.5)";
      ripple.style.transform = "scale(0)";
      ripple.style.opacity = "1";
      ripple.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      ripple.style.width = diameter + "px";
      ripple.style.height = diameter + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";

      rippleContainer.appendChild(ripple);
      element.appendChild(rippleContainer);

      requestAnimationFrame(() => {
        ripple.style.transform = "scale(2)";
        ripple.style.opacity = "0";
      });

      setTimeout(() => {
        ripple.remove();
        rippleContainer.remove();
      }, 1000);
    };

    element.addEventListener("click", createRipple);

    return () => {
      element.removeEventListener("click", createRipple);
    };
  }, [ref, disabled]);
};

export default useRippleEffect;
