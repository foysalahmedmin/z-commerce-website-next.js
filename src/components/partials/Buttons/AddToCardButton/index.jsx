"use client";

import { Button } from "@/components/ui/Button";
import { forwardRef } from "react";

const AddToCardButton = forwardRef((props, ref) => {
  return <Button {...props} ref={ref} />;
});

AddToCardButton.displayName = "AddToCardButton";

export default AddToCardButton;
