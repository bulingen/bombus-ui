import type { Config } from "tailwindcss";
import {
  CSSRuleObject,
  CustomThemeConfig,
  PluginCreator,
} from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";
import postcssJs from "postcss-js";
// import componentsCss from "./components/alerts.css";
const components = require("../dist/components");

type Hex = `#${string}`;
type RGB = { r: number; g: number; b: number };
type ComplexColor = { hex: Hex; rgb: RGB };
type RGBString = `${number}, ${number}, ${number}`;

type Shades = {
  50: ComplexColor;
  100: ComplexColor;
  200: ComplexColor;
  300: ComplexColor;
  400: ComplexColor;
  500: ComplexColor;
  600: ComplexColor;
  700: ComplexColor;
  800: ComplexColor;
  900: ComplexColor;
};

type ColorPrimitives = {
  emerald: Shades;
  cyan: Shades;
  fuchsia: Shades;
};

// 50: 'rgba(var(--color-warning-50), <alpha-value>)',
type ThemableColor =
  `rgba(var(--color-${keyof ColorAliases}-${keyof Shades}), <alpha-value>)`;

type ThemableShades = {
  50: ThemableColor;
  100: ThemableColor;
  200: ThemableColor;
  300: ThemableColor;
  400: ThemableColor;
  500: ThemableColor;
  600: ThemableColor;
  700: ThemableColor;
  800: ThemableColor;
  900: ThemableColor;
};

type ColorAliases = {
  primary: ThemableShades;
};

const palette: ColorPrimitives = {
  emerald: {
    50: { hex: "#ecfdf5", rgb: { r: 236, g: 253, b: 245 } },
    100: { hex: "#d1fae5", rgb: { r: 209, g: 250, b: 229 } },
    200: { hex: "#a7f3d0", rgb: { r: 167, g: 243, b: 208 } },
    300: { hex: "#6ee7b7", rgb: { r: 110, g: 231, b: 183 } },
    400: { hex: "#34d399", rgb: { r: 52, g: 211, b: 153 } },
    500: { hex: "#10b981", rgb: { r: 16, g: 185, b: 129 } },
    600: { hex: "#059669", rgb: { r: 5, g: 150, b: 105 } },
    700: { hex: "#047857", rgb: { r: 4, g: 120, b: 87 } },
    800: { hex: "#065f46", rgb: { r: 6, g: 95, b: 70 } },
    900: { hex: "#064e3b", rgb: { r: 6, g: 78, b: 59 } },
  },
  cyan: {
    50: { hex: "#ecfeff", rgb: { r: 236, g: 254, b: 255 } },
    100: { hex: "#cffafe", rgb: { r: 207, g: 250, b: 254 } },
    200: { hex: "#a5f3fc", rgb: { r: 165, g: 243, b: 252 } },
    300: { hex: "#67e8f9", rgb: { r: 103, g: 232, b: 249 } },
    400: { hex: "#22d3ee", rgb: { r: 34, g: 211, b: 238 } },
    500: { hex: "#06b6d4", rgb: { r: 6, g: 182, b: 212 } },
    600: { hex: "#0891b2", rgb: { r: 8, g: 145, b: 178 } },
    700: { hex: "#0e7490", rgb: { r: 14, g: 116, b: 144 } },
    800: { hex: "#155e75", rgb: { r: 21, g: 94, b: 117 } },
    900: { hex: "#164e63", rgb: { r: 22, g: 78, b: 99 } },
  },
  fuchsia: {
    50: { hex: "#fdf4ff", rgb: { r: 253, g: 244, b: 255 } },
    100: { hex: "#fae8ff", rgb: { r: 250, g: 232, b: 255 } },
    200: { hex: "#f5d0fe", rgb: { r: 245, g: 208, b: 254 } },
    300: { hex: "#f0abfc", rgb: { r: 240, g: 171, b: 252 } },
    400: { hex: "#e879f9", rgb: { r: 232, g: 121, b: 249 } },
    500: { hex: "#d946ef", rgb: { r: 217, g: 70, b: 239 } },
    600: { hex: "#c026d3", rgb: { r: 192, g: 38, b: 211 } },
    700: { hex: "#a21caf", rgb: { r: 162, g: 28, b: 175 } },
    800: { hex: "#86198f", rgb: { r: 134, g: 25, b: 143 } },
    900: { hex: "#701a75", rgb: { r: 112, g: 26, b: 117 } },
  },
};

type TailwindPrimitiveShades = Record<keyof ThemableShades, Hex>;
type TailwindPrimitives = {
  emerald: TailwindPrimitiveShades;
  cyan: TailwindPrimitiveShades;
  fuchsia: TailwindPrimitiveShades;
};

const createPrimitiveShades = (
  primitive: keyof ColorPrimitives
): TailwindPrimitiveShades => {
  const primitivePalette = palette[primitive];
  return {
    50: primitivePalette[50].hex,
    100: primitivePalette[100].hex,
    200: primitivePalette[200].hex,
    300: primitivePalette[300].hex,
    400: primitivePalette[400].hex,
    500: primitivePalette[500].hex,
    600: primitivePalette[600].hex,
    700: primitivePalette[700].hex,
    800: primitivePalette[800].hex,
    900: primitivePalette[900].hex,
  };
};

const createTailwindPrimitives = (): TailwindPrimitives => {
  const emerald: TailwindPrimitiveShades = createPrimitiveShades("emerald");
  const cyan = createPrimitiveShades("cyan");
  const fuchsia = createPrimitiveShades("fuchsia");
  return {
    cyan,
    fuchsia,
    emerald,
  };
};

const tailwindPrimitives = createTailwindPrimitives();

type ThemeName = ":root" | ".dark" | ".christmas" | ".toony";

type GunnelTheme = {
  primary: keyof ColorPrimitives;
};
type GunnelOtherTheme = {
  interactionScaleFactor: number;
};

const lightTheme: GunnelTheme = {
  primary: "emerald",
};
const boringOther: GunnelOtherTheme = {
  interactionScaleFactor: 0.97,
};
const toonyOther: GunnelOtherTheme = {
  interactionScaleFactor: 1.5,
};

const darkTheme: GunnelTheme = {
  primary: "cyan",
};

const christmasTheme: GunnelTheme = {
  primary: "fuchsia",
};
const toonyTheme: GunnelTheme = {
  primary: "fuchsia",
};

const themes: Record<
  ThemeName,
  { colorTheme: GunnelTheme; other: GunnelOtherTheme }
> = {
  ":root": { colorTheme: lightTheme, other: boringOther },
  ".dark": { colorTheme: darkTheme, other: boringOther },
  ".christmas": { colorTheme: christmasTheme, other: boringOther },
  ".toony": { colorTheme: toonyTheme, other: toonyOther },
};

const tailwindAliases: ColorAliases = {
  primary: {
    50: "rgba(var(--color-primary-50), <alpha-value>)",
    100: "rgba(var(--color-primary-100), <alpha-value>)",
    200: "rgba(var(--color-primary-200), <alpha-value>)",
    300: "rgba(var(--color-primary-300), <alpha-value>)",
    400: "rgba(var(--color-primary-400), <alpha-value>)",
    500: "rgba(var(--color-primary-500), <alpha-value>)",
    600: "rgba(var(--color-primary-600), <alpha-value>)",
    700: "rgba(var(--color-primary-700), <alpha-value>)",
    800: "rgba(var(--color-primary-800), <alpha-value>)",
    900: "rgba(var(--color-primary-900), <alpha-value>)",
  },
};

type CSSVariableKey = `--color-${keyof GunnelTheme}-${keyof ThemableShades}`;
type CSSVariableVal = RGBString;

type CSSTheme = {
  [key in ThemeName]: Record<CSSVariableKey, CSSVariableVal>;
};

const toRgbStr = (rgb: RGB): RGBString => {
  return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
};

type Korv = {
  [P in CSSVariableKey]: CSSVariableVal;
};

const createColorTheme = (theme: ThemeName): Korv => {
  const theTheme = themes[theme];
  return {
    "--color-primary-50": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["50"].rgb
    ),
    "--color-primary-100": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["100"].rgb
    ),
    "--color-primary-200": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["200"].rgb
    ),
    "--color-primary-300": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["300"].rgb
    ),
    "--color-primary-400": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["400"].rgb
    ),
    "--color-primary-500": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["500"].rgb
    ),
    "--color-primary-600": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["600"].rgb
    ),
    "--color-primary-700": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["700"].rgb
    ),
    "--color-primary-800": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["800"].rgb
    ),
    "--color-primary-900": toRgbStr(
      palette[theTheme.colorTheme["primary"]]["900"].rgb
    ),
  };
};

type OtherThemeStuff = {
  "--interaction-active-scale-factor": string;
};

const createOtherTheme = (theme: ThemeName): OtherThemeStuff => {
  const theTheme = themes[theme].other;

  return {
    "--interaction-active-scale-factor": `${theTheme.interactionScaleFactor}`,
  };
};

const createPrimaryButton = (): CSSRuleObject => {
  return {
    ".btn-primary": {
      padding: "1rem",
      border: "1px solid grey",
      "@apply bg-primary-500 transition-all text-white rounded": {},
      // backgroundColor: tailwindAliases.primary[500],
      // backgroundColor: "rgb(var(--color-primary-500))",
      "&:hover": {
        // backgroundColor: tailwindAliases.primary[400],
        "@apply bg-primary-600": {},
        // backgroundColor: "rgb(var(--color-primary-400))",
      },
      "&:active": {
        // backgroundColor: tailwindAliases.primary[600],
        // "@apply bg-primary-700": {},
        transform: "scale(var(--interaction-active-scale-factor))",
        // backgroundColor: "rgb(var(--color-primary-600))",
      },
    },
  };
};

const containerPlugin: PluginCreator = ({
  addBase,
  addComponents,
  addUtilities,
  addVariant,
}) => {
  // TODO: set color-scheme: light and dark. for browsers to know?
  // TODO: also support [data-theme=christmas] and so on.
  // so you can choose whether to use class or attribute
  // NOTE: okay, so the data-theme isn't tree shook at all.

  // TODO: probably need DEFAULT for all alias colors. info, danger, primary etc.. not the primitives
  addBase({
    ":root, .light, [data-theme=light]": {
      ...createColorTheme(":root"),
      ...createOtherTheme(":root"),
    },
    ".dark, [data-theme=dark]": {
      ...createColorTheme(".dark"),
      ...createOtherTheme(".dark"),
    },
    // ".christmas": createColorTheme(".christmas"),
    ".christmas, [data-theme=christmas]": {
      ...createColorTheme(".christmas"),
      ...createOtherTheme(".christmas"),
    },
    ".toony, [data-theme=toony]": {
      ...createColorTheme(".toony"),
      ...createOtherTheme(".toony"),
    },
  });

  // TODO: do we need a variant for this??
  addVariant("christmas", ["&:is(.christmas *)"]);
  addVariant("toony", ["&:is(.toony *)"]);
  // addVariant("dark", ["&:is(.dark *)"]);
  // console.log("RAW", componentsCss);

  // const resp = postcssJs.parse(componentsCss);

  // console.log("RESP", resp);
  // console.log("COMPOENTNS", components);

  addComponents({
    ".test-class": {
      maxWidth: "1480px",
      margin: "auto",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    ...createPrimaryButton(),
  });
  addComponents(components);
  addUtilities({
    ".force-blue": {
      "background-color": "blue",
    },
  });
};

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}'
//   ],
//   theme: {},
//   corePlugins: {
//     container: false
//   },
//   plugins: [containerPlugin]
// };
// export default containerPlugin;

type TailwindTheme = Partial<
  CustomThemeConfig & { extend: Partial<CustomThemeConfig> }
>;

type MyColors = TailwindPrimitives & ColorAliases;

type Theme = TailwindTheme & {
  // colors: MyColors;
  extend: {
    colors: MyColors;
  };
};

const createTheme = (): Theme => {
  return {
    extend: {
      colors: { ...tailwindPrimitives, ...tailwindAliases },
      spacing: {},
    },
  };
};
// your selector must contain `&`
const config: Partial<Config> = {
  // prefix: "gunlizz-",
  theme: createTheme(),
  darkMode: ["variant", [".dark &", "[data-theme=dark] &"]],
  // TODO: can we do this differently?
  // if you set christmas:some-bg-color the christmas things will be there.
  // assuming that we have a variant for it. but just dynamically setting the theme could
  // possibly mean that those variables won't be there, since it wasn't when the document
  // was built. don't know if tailwind can magically insert those classes when we dynamically
  // change the theme. need to test that.
  // safelist: ["christmas"],
  safelist: ["dark"],
};

// console.log("CONFIG", JSON.stringify(config));

export default plugin(containerPlugin, config);

// const plugin = require('tailwindcss/plugin')

// module.exports = plugin(function({ matchUtilities, theme }) {
//   matchUtilities(
//     {
//       tab: (value) => ({
//         tabSize: value
//       }),
//     },
//     { values: theme('tabSize') }
//   )
// }, {
//   theme: {
//     tabSize: {
//       1: '1',
//       2: '2',
//       4: '4',
//       8: '8',
//     }
//   }
// })
