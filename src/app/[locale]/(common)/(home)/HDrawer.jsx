"use client";

import { Drawer } from "@/components/ui/Drawer";
import { useState } from "react";

const HDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>hello</button>
      <Drawer isOpen={open} closeHandler={() => setOpen(false)} />
    </div>
  );
};

export default HDrawer;
