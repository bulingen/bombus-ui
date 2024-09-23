import {
  formatHex,
  toGamut,
  interpolate,
  wcagContrast,
  oklch,
  Oklch,
} from "culori";

const stepsFromWhiteToBlack = [
  0.04, 0.1, 0.18, 0.24, 0.34, 0.44, 0.52, 0.56, 0.62, 0.68, 0.76,
];

const stepsFromBlackToWhite = [...stepsFromWhiteToBlack].reverse();

type Hex = `#${string}`;
type OklchString = `${number} ${number} ${number}`;

type AlertColors = {
  border: OklchString;
  background: OklchString;
};
const hexToOklch = (hex: string) => {
  const converted = oklch(hex);
  if (!converted) {
    throw new Error(`Could not convert to oklch: ${hex}`);
  }
  return converted;
};
const oklchToHex = (oklchColor: Oklch): Hex => formatHex(oklchColor) as Hex;

export const generatePalette5 = (hex: string, steps: number[]): Hex[] => {
  const stuff = interpolate(["white", hex, "black"], "oklch");

  const results = steps.map((step) => {
    return stuff(step);
  });

  const hexes = results.map((aHex) => {
    return oklchToHex(aHex);
  });
  return hexes;
};

const isColorDark = (color: any) => {
  if (wcagContrast(color, "black") < wcagContrast(color, "white")) {
    return true;
  }

  return false;
};

const roundTo3Decimals = (input: number) => {
  return Math.round(input * 1000) / 1000;
};

const toOklchString = (oklchColor: Oklch): OklchString => {
  const l = roundTo3Decimals(oklchColor.l);
  const c = roundTo3Decimals(oklchColor.c);
  const h = roundTo3Decimals(oklchColor.h || 0);
  return `${l} ${c} ${h}`;
};

export const generateAlertColorsFromBase = (
  base: Hex,
  isThemeDark: boolean
): AlertColors => {
  const steps = isThemeDark ? stepsFromBlackToWhite : stepsFromWhiteToBlack;
  const palette = generatePalette5(base, steps);
  const borderColorHex = palette[2];
  const backgroundColorHex = palette[0];
  const borderColorOklch = hexToOklch(borderColorHex);
  const backgroundColorOklch = hexToOklch(backgroundColorHex);
  return {
    border: toOklchString(borderColorOklch),
    background: toOklchString(backgroundColorOklch),
  };
};
