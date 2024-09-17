import { Hex, Theme } from "./types";
import { converter, Rgb } from "culori";

const rgb = converter("rgb");

// color-mix(in oklab, oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%, black);

type ColorMix =
  `color-mix(in oklab, oklch(${Hex} / var(--tw-bg-opacity, 1)) 90%, ${
    | "black"
    | "white"})`;

// TODO: the valie should possibly be a rgb tuple? and with hex fallback?
// hex fallback might be useless? was thinking it could help with inspecting colors
// but don't know if it helps.
// but in any case, we should convert hex to rgb so that we can use alpha channel
type JssBaseTheme = {
  // "--primary-base": RGBTupleString | ColorMix;
  "--primary-base": RGBTupleString;
  // "--primary-hover": RGBTupleString | ColorMix;
  "--primary-hover"?: RGBTupleString;
  // "--primary-pressed": RGBTupleString | ColorMix;
  "--primary-pressed"?: RGBTupleString;
};

type RGB = { r: number; g: number; b: number };

const toRGB = (hex: Hex): RGB => {
  const converted = rgb(hex);
  if (converted) {
    return {
      r: Math.round(converted.r * 255),
      g: Math.round(converted.g * 255),
      b: Math.round(converted.b * 255),
    };
  }
  throw new Error(`Could not convert to RGB from ${hex}`);
};

type RGBTupleString = `${number} ${number} ${number}`;
const getHoverColor = (hex: Hex): ColorMix => {
  return `color-mix(in oklab, oklch(${hex} / var(--tw-bg-opacity, 1)) 90%, ${"white"})`;
};
const getPressedColor = (hex: Hex): ColorMix => {
  return `color-mix(in oklab, oklch(${hex} / var(--tw-bg-opacity, 1)) 90%, ${"black"})`;
};

const toRGBTupleString = (hex: Hex): RGBTupleString => {
  const converted = toRGB(hex);
  return `${converted.r} ${converted.g} ${converted.b}`;
};

export const createBaseTheme = (theme: Theme): JssBaseTheme => {
  // color-mix(in oklch, currentColor 35%, transparent)
  if (theme.primary.isHex) {
    return {
      "--primary-base": toRGBTupleString(theme.primary.hex),
      // "--primary-hover": getHoverColor(theme.primary.hex),
      // "--primary-pressed": getPressedColor(theme.primary.hex),
    };
  } else {
    return {
      "--primary-base": toRGBTupleString(theme.primary.base),
      "--primary-hover": toRGBTupleString(theme.primary.hover),
      "--primary-pressed": toRGBTupleString(theme.primary.pressed),
    };
  }
};
