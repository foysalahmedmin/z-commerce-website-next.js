"use client";

import { createPortal } from "react-dom";

const PortalRoot = ({ children, id = "portal-root" }) => {
  const portalElement = document.getElementById(id);

  if (!portalElement) {
    const newPortalElement = document.createElement("div");
    newPortalElement.id = id;
    document.body.appendChild(newPortalElement);
    return createPortal(children, newPortalElement);
  }

  return createPortal(children, portalElement);
};

export default PortalRoot;
