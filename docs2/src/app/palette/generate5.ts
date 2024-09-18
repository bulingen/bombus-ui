import { interpolate, formatHex, oklch } from "culori";

// const stuff = interpolate(["white", "black"], "oklch")
const hexToOklch = (hex: string) => oklch(hex);

// const lightnessScale = [
//     0.98, 0.96, 0.92, 0.86, 0.71, 0.6, 0.5, 0.42, 0.35, 0.25, 0.19,
//   ];

const stepsFromWhiteToBlack = [
  0.04, 0.1, 0.18, 0.24, 0.34, 0.44, 0.52, 0.56, 0.62, 0.68, 0.76,
];

export const generatePalette5 = (hex: string) => {
  const theColorInOklch = hexToOklch(hex);
  console.log("the color in oklch", theColorInOklch);
  const stuff = interpolate(["white", hex, "black"], "oklab");

  const results = stepsFromWhiteToBlack.map((step) => {
    return stuff(step);
  });

  const hexes = results.map((aHex) => {
    return formatHex(aHex);
  });

  //   const stuffs = stuff(0.1);
  //   const stuffs2 = stuff(0.2);
  //   const stuffs3 = stuff(0.3);
  //   const stuffs4 = stuff(0.4);
  //   const stuffs5 = stuff(0.5);
  //   const stuffs6 = stuff(0.6);
  //   const stuffs7 = stuff(0.7);
  //   const stuffs8 = stuff(0.8);
  //   const stuffs9 = stuff(0.9);

  console.log("results", results);
  console.log("hexes", hexes);
  return hexes;
};

// let grays = interpolate(["#fff", "#000"]);
