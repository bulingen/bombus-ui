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
