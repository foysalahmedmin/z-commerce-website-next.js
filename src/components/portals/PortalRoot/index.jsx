"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PortalRoot = ({ children, id = "portal-root" }) => {
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    let element = document.getElementById(id);

    if (!element) {
      element = document.createElement("div");
      element.id = id;
      document.body.appendChild(element);
    }

    setPortalElement(element);
  }, [id]);

  if (!portalElement) return null;

  return createPortal(children, portalElement);
};

export default PortalRoot;
