import {
  CSSRuleObject,
  CustomThemeConfig,
  PluginCreator,
} from "tailwindcss/types/config";

type ButtonVariant = "primary" | "secondary";

type Button = {
  padding: string;
  border: string;
};

const buttonToCss = (button: Button, variant: ButtonVariant): CSSRuleObject => {
  const defaultBackground =
    variant === "primary" ? "bg-primary" : "bg-secondary";

  return {
    ".btn": {
      [`@apply transition-all ${defaultBackground} text-white`]: {},
      padding: button.padding,
      border: button.border,
    },
  };
};

// const button = {
//   ".btn": {
//     padding
//   }
// }

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
