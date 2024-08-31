"use client";

import { Button } from "@/components/ui/Button";
import { forwardRef } from "react";

const BayNowButton = forwardRef((props, children = <span>
    Bay Now
  </span>, ref) => {
  return (
    <Button {...props} ref={ref}>
      {children}
    </Button>
  );
});

BayNowButton.displayName = "AddToCardButton";

export default BayNowButton;
