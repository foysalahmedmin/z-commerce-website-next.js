import { forwardRef } from "react";

const Parallax = forwardRef(
  ({ backgroundImageURL, children, ...props }, ref) => {
    return (
      <div className="parallax-container" {...props} ref={ref}>
        <div
          style={{ backgroundImage: `url(${backgroundImageURL})` }}
          className="parallax"
        />
        <div className="bg-dark/15 backdrop-blur-[2px]">{children}</div>
      </div>
    );
  },
);
Parallax.displayName = "Parallax";

export default Parallax;
