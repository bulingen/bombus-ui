import { interpolate, formatHex, oklch } from "culori";

// const stuff = interpolate(["white", "black"], "oklch")
const hexToOklch = (hex: string) => oklch(hex);

export const generatePalette4 = (hex: string) => {
  const theColorInOklch = hexToOklch(hex);
  console.log("the color in oklch", theColorInOklch);
  const stuff = interpolate(["white", hex, "black"], "oklch");
  const stuffs = stuff(0.1);
  const stuffs2 = stuff(0.2);
  const stuffs3 = stuff(0.3);
  const stuffs4 = stuff(0.4);
  const stuffs5 = stuff(0.5);
  const stuffs6 = stuff(0.6);
  const stuffs7 = stuff(0.7);
  const stuffs8 = stuff(0.8);
  const stuffs9 = stuff(0.9);

  console.log("STUFFS", stuffs);
  const toReturn = [
    formatHex(stuffs),
    formatHex(stuffs2),
    formatHex(stuffs3),
    formatHex(stuffs4),
    formatHex(stuffs5),
    formatHex(stuffs6),
    formatHex(stuffs7),
    formatHex(stuffs8),
    formatHex(stuffs9),
  ];
  console.log("to return", toReturn);
  return toReturn;
};

// let grays = interpolate(["#fff", "#000"]);
