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

export type Hex = `#${string}`;
export type OklchString = `${number} ${number} ${number}`;

type AlertColors = {
  border: OklchString;
  background: OklchString;
};
export const hexToOklch = (hex: string) => {
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

const isColorDarkish = (color: Hex) => {
  if (wcagContrast(color, "black") < wcagContrast(color, "white")) {
    return true;
  }

  return false;
};

const getColorWithHighestContrast = (
  myColor1: Hex,
  myColor2: Hex,
  againstColor: Hex
): Hex => {
  if (
    wcagContrast(myColor1, againstColor) > wcagContrast(myColor2, againstColor)
  ) {
    return myColor1;
  }
  return myColor2;
};

const roundTo3Decimals = (input: number) => {
  return Math.round(input * 1000) / 1000;
};

export const toOklchString = (oklchColor: Oklch): OklchString => {
  const l = roundTo3Decimals(oklchColor.l);
  const c = roundTo3Decimals(oklchColor.c);
  const h = roundTo3Decimals(oklchColor.h || 0);
  return `${l} ${c} ${h}`;
};

type AlertColorsHex = {
  border: Hex;
  background: Hex;
};

export const generateAlertColorsFromBaseHex = (
  base: Hex,
  isThemeDark: boolean
): AlertColorsHex => {
  const steps = isThemeDark ? stepsFromBlackToWhite : stepsFromWhiteToBlack;
  const palette = generatePalette5(base, steps);
  const borderColorHex = palette[2];
  const backgroundColorHex = palette[0];
  return {
    border: borderColorHex,
    background: backgroundColorHex,
  };
};
export const generateAlertColorsFromBase = (
  base: Hex,
  isThemeDark: boolean
): AlertColors => {
  const hexColors = generateAlertColorsFromBaseHex(base, isThemeDark);
  const borderColorOklch = hexToOklch(hexColors.border);
  const backgroundColorOklch = hexToOklch(hexColors.background);
  return {
    border: toOklchString(borderColorOklch),
    background: toOklchString(backgroundColorOklch),
  };
};

export const generateContrastColor = (color: Hex): Hex => {
  const shade = 0;
  const palette1 = generatePalette5(color, stepsFromWhiteToBlack);
  const palette2 = generatePalette5(color, stepsFromBlackToWhite);
  const color1 = palette1[shade];
  const color2 = palette2[shade];
  return getColorWithHighestContrast(color1, color2, color);
};

export const generateButtonContent = (base: Hex): Hex => {
  const isBaseDarkish = isColorDarkish(base);
  const contrastColor = generateContrastColor(base);
  return contrastColor;
};
