import { oklch, formatHex, converter } from "culori";

// Convert hex to OKLCH
const hexToOklch = (hex: string) => oklch(hex);

// Predefined lightness values for shades 50 to 900
// const lightnessScale = [0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.15];
const lightnessScale = [
  0.98, 0.96, 0.92, 0.86, 0.71, 0.6, 0.5, 0.42, 0.35, 0.25, 0.19,
];

// Function to find the closest lightness index in the palette scale
const findClosestIndex = (lightness: number) => {
  return lightnessScale.reduce(
    (closestIndex, current, index) =>
      Math.abs(current - lightness) <
      Math.abs(lightnessScale[closestIndex] - lightness)
        ? index
        : closestIndex,
    0
  );
};

// Generate a palette around the input color's lightness
export const generatePalette2 = (baseHex: string) => {
  const baseColor = hexToOklch(baseHex);
  const baseLightness = baseColor.l;

  // Find the closest index in the predefined lightness scale
  const closestIndex = findClosestIndex(baseLightness);
  console.log("CLOSEST", closestIndex);

  const scaleBelow = lightnessScale.slice(0, closestIndex);
  const scaleAbove = lightnessScale.slice(
    closestIndex + 1,
    lightnessScale.length
  );

  console.log(scaleBelow);
  console.log(scaleAbove);

  // Generate palette with respect to the closest index
  const paletteBelow = scaleBelow.map((lightness) => {
    // const adjustedLightness = lightnessScale[index];
    console.log("BELOW adjusted lightness", lightness);

    // Adjust the color lightness based on the palette's lightness scale
    const adjustedColor = {
      ...baseColor,
      l: lightness,
    };

    return formatHex(adjustedColor);
  });
  const paletteAbove = scaleAbove.map((lightness) => {
    // const adjustedLightness = lightnessScale[index];
    console.log("ABOVE adjusted lightness", lightness);

    // Adjust the color lightness based on the palette's lightness scale
    const adjustedColor = {
      ...baseColor,
      l: lightness,
    };

    return formatHex(adjustedColor);
  });
  const complete = [...paletteBelow, baseHex, ...paletteAbove];
  console.log("COMPLETE", complete);

  return complete;
};

// Example: Generate a palette from a dark blue
// const paletteBlue = generatePalette("#2563eb"); // HEX for dark blue
// console.log("Blue shades:", paletteBlue);

// // Example: Generate a palette from a light yellow
// const paletteYellow = generatePalette("#facc15"); // HEX for light yellow
// console.log("Yellow shades:", paletteYellow);
