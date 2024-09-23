export type Hex = `#${string}`;

export type InteractionStates = {
  base: Hex;
  hover: Hex;
  pressed: Hex;
};

export type ThemeColor =
  | {
      isHex: true;
      hex: Hex;
    }
  | ({ isHex: false } & InteractionStates);

export type Theme = {
  colorScheme: "light" | "dark";
  primary: ThemeColor;
};

type OptionalAlertColors = {
  border: Hex;
  background: Hex;
};

type Overrides = {
  alertColors?: {
    info?: OptionalAlertColors;
    success?: OptionalAlertColors;
    warning?: OptionalAlertColors;
    danger?: OptionalAlertColors;
  };
};

export type ThisIsTheThemeWeNeed = {
  primary: Hex;
  info: Hex;
  danger: Hex;
  warning: Hex;
  success: Hex;
  overrides: OverridesFunction;
  alertColors?: null;
};
