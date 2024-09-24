import type { Config } from "tailwindcss";
import {
  CSSRuleObject,
  CustomThemeConfig,
  PluginCreator,
} from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";
import { createTheme, themeToCssVariables, type Hex } from "./themes/types";
import { light as importedLightTheme } from "./themes/themes";
import { createBaseTheme } from "./themes/functions";
import { generateAlertColorsFromBase } from "./colors";
// import postcssJs from "postcss-js";
// import componentsCss from "./components/alerts.css";
const components = require("../dist/components");

type RGB = { r: number; g: number; b: number };
type ComplexColor = { hex: Hex; rgb: RGB };

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

// TODO: we need to add these to the tailwind config colors if we want to expose them
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

type InteractionShades = {
  // base: `rgba(var(--color-${InteractionComponent}-base), <alpha-value>)`
  // hover: `rgba(var(--color-${InteractionComponent}-hover), <alpha-value>)`
  // pressed: `rgba(var(--color-${InteractionComponent}-pressed), <alpha-value>)`
  base: `rgba(var(--color-interaction-base), <alpha-value>)`;
  hover: `rgba(var(--color-interaction-hover), <alpha-value>)`;
  pressed: `rgba(var(--color-interaction-pressed), <alpha-value>)`;
};

type ColorAliases = {
  primary: ThemableShades;
  interaction: InteractionShades;
};

const containerPlugin: PluginCreator = ({
  addBase,
  addComponents,
  addUtilities,
  addVariant,
  //   theme,
}) => {
  // TODO: set color-scheme: light and dark. for browsers to know?
  // TODO: also support [data-theme=christmas] and so on.
  // so you can choose whether to use class or attribute
  // NOTE: okay, so the data-theme isn't tree shook at all.

  const lightAlertInfo = generateAlertColorsFromBase("#1cb1f3", false);
  const darkAlertInfo = generateAlertColorsFromBase("#0185c8", true);
  const christmasAlertInfo = generateAlertColorsFromBase("#0891b2", true);

  const generatedChristmasTheme = createTheme({
    textColor: "#f0e7d2",
    page: "#386741",
    danger: "#bc484a",
    info: "#15b1f5",
    isDarkish: true,
    primary: "#ef9d7b",
    success: "#A1DD70",
    warning: "#FF9800",
  });

  // TODO: probably need DEFAULT for all alias colors. info, danger, primary etc.. not the primitives
  addBase({
    // ":root, .light, [data-theme=light]": {
    //   ...createColorTheme(":root"),
    //   ...createOtherTheme(":root"),
    // },
    html: {
      "font-size": "14px",
      // color: "oklch(var(--text-color))", // the text-color variable is apparently undefined here
    },
    body: {
      color: "oklch(var(--text-color))",
    },

    // TODO: need to pass in color-scheme or whatever so that we can set prefers color scheme or how it works?
    // NOTE: we could generate the oklch values! so that you would only have to pass in hex values
    ".light, [data-theme=light]": {
      "--primary": "0.59 0.14 241.97",
      "--primary-content": "0.98 0.01 236.74", // we could generate this?
      "--outline": "0.21 0.04 265.77",
      "--outline-content": "0.21 0.04 265.77", // is this unnecessary? just use outline. could be optional?
      "--page": "0.9731 0 0", // either we need more levels of this, or we do some sort of interpolation or opacity for elements on top
      "--btn-pressed-scale": "0.97", // let's keep this, but perhaps set to zero to start with?
      "--danger": "0.5557 0.194 19.84",
      "--danger-content": "1 0 0",
      "--text-color": "0 0 0",
      "--info": "0.72 0.15 235.34",
      "--success": "0.65 0.18 146.65",
      // "--info-bg": "0.9771 0.012 236.62",
      // "--info-bd": "0.9014 0.055 230.9",
      "--info-bg": lightAlertInfo.background,
      "--info-bd": lightAlertInfo.border,
      color: "oklch(var(--text-color))",
    },
    ".dark, [data-theme=dark]": {
      "--primary": "0.7189 0.148 235.34",
      "--primary-content": "0 0 0",
      "--outline": "0.98 0 0",
      "--outline-content": "0.98 0 0",
      "--page": "0.18 0 0",
      "--btn-pressed-scale": "0.97",
      "--danger": "0.6553 0.23187 20.207",
      "--danger-content": "1 0 0",
      "--text-color": "1 0 0",
      "--info": "0.72 0.15 235.34",
      "--info-bg": darkAlertInfo.background,
      "--info-bd": darkAlertInfo.border,
      "--success": "0.65 0.18 146.65",
      color: "oklch(var(--text-color))",
    },
    "[data-theme=christmas]": {
      "--primary": "0.77 0.11 43.06",
      "--primary-content": "0 0 0",
      "--outline": "0.93 0.03 88.71",
      "--outline-content": "0.93 0.03 88.71",
      "--page": "0.47 0.08 148.93",
      "--btn-pressed-scale": "0.97",
      "--danger": "0.56 0.15 22.42",
      "--danger-content": "0.93 0.03 88.71",
      "--text-color": "0.93 0.03 88.71",
      "--info": "0.72 0.15 235.34",
      "--info-bg": christmasAlertInfo.background,
      "--info-bd": christmasAlertInfo.border,

      color: "oklch(var(--text-color))",
    },
    "[data-theme=christmas2]": themeToCssVariables(generatedChristmasTheme),
    // },
  });

  // addBase()

  // TODO: do we need a variant for this??
  addVariant("christmas", ["&:is(.christmas *)"]);
  addVariant("toony", ["&:is(.toony *)"]);

  addComponents(components);
  addUtilities({
    ".force-blue": {
      "background-color": "blue",
    },
  });
};

type TailwindTheme = Partial<
  CustomThemeConfig & { extend: Partial<CustomThemeConfig> }
>;

// TODO: probably we don't need all of these?
// TODO: but we should provide a color scheme which is inverted in dark mode or something
const createTheme2 = (): TailwindTheme => {
  return {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        primary: "oklch(var(--primary)/<alpha-value>)",
        "primary-content": "oklch(var(--primary-content)/<alpha-value>)",
        outline: "oklch(var(--outline)/<alpha-value>)",
        "outline-content": "oklch(var(--outline-content)/<alpha-value>)",
        page: "oklch(var(--page)/<alpha-value>)",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "8rem",
      },
    },
    // extend: {
    //   primary: "oklch(var(--primary)/<alpha-value>)",
    //   "primary-content": "oklch(var(--primary-content)/<alpha-value>)",
    // },
  };
};

// your selector must contain `&`
const config: Partial<Config> = {
  // prefix: "gunlizz-",
  // theme: createTheme(),
  theme: createTheme2(),
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
