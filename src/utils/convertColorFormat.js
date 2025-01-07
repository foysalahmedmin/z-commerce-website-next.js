export const convertColorFormat = (color, toFormat) => {
  // Convert Hex to RGB
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
  }

  // Convert RGB to Hex
  function rgbToHex(r, g, b) {
    return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
  }

  // Convert RGB to HSL
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  }

  // Convert HSL to RGB
  function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;

    let r, g, b;
    if (0 <= h && h < 60) {
      [r, g, b] = [c, x, 0];
    } else if (60 <= h && h < 120) {
      [r, g, b] = [x, c, 0];
    } else if (120 <= h && h < 180) {
      [r, g, b] = [0, c, x];
    } else if (180 <= h && h < 240) {
      [r, g, b] = [0, x, c];
    } else if (240 <= h && h < 300) {
      [r, g, b] = [x, 0, c];
    } else if (300 <= h && h < 360) {
      [r, g, b] = [c, 0, x];
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
  }

  // Convert HSL to Hex
  function hslToHex(h, s, l) {
    const { r, g, b } = hslToRgb(h, s, l);
    return rgbToHex(r, g, b);
  }

  // Main conversion logic
  if (typeof color === "string") {
    if (color.startsWith("#")) {
      // Hex format
      if (toFormat === "rgb") {
        const { r, g, b } = hexToRgb(color);
        return `rgb(${r}, ${g}, ${b})`;
      } else if (toFormat === "hsl") {
        const { r, g, b } = hexToRgb(color);
        return rgbToHsl(r, g, b);
      }
    } else if (color.startsWith("rgb")) {
      // RGB format
      let [r, g, b] = color.match(/\d+/g).map(Number);
      if (toFormat === "hex") {
        return rgbToHex(r, g, b);
      } else if (toFormat === "hsl") {
        return rgbToHsl(r, g, b);
      }
    } else if (color.startsWith("hsl")) {
      // HSL format
      let [h, s, l] = color.match(/\d+/g).map(Number);
      if (toFormat === "rgb") {
        const { r, g, b } = hslToRgb(h, s, l);
        return `rgb(${r}, ${g}, ${b})`;
      } else if (toFormat === "hex") {
        return hslToHex(h, s, l);
      }
    } else {
      throw new Error("Unsupported color format.");
    }
  } else {
    throw new Error("Color must be a string.");
  }
};
