"use client";

import { Button } from "@/components/ui/Button";
import { forwardRef } from "react";

const BayNowButton = forwardRef((props, ref) => {
  return <Button {...props} ref={ref} />;
});

BayNowButton.displayName = "AddToCardButton";

export default BayNowButton;
