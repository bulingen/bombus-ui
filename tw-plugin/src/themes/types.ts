import {
  generateAlertColorsFromBase,
  generateAlertColorsFromBaseHex,
  toOklchString,
  hexToOklch,
  generateButtonContent,
} from "../colors";
import { type OklchString, type Hex } from "../colors";

// export type Hex = `#${string}`;
// type OklchString = `${number} ${number} ${number}`;
type NumberString = `${number}`;

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

type AlertColors = {
  border: Hex;
  background: Hex;
  foreground: Hex;
};

type Alerts = {
  info: Partial<AlertColors>;
  success: Partial<AlertColors>;
  warning: Partial<AlertColors>;
  danger: Partial<AlertColors>;
};

type WellDefinedAlerts = {
  info: AlertColors;
  success: AlertColors;
  warning: AlertColors;
  danger: AlertColors;
};

type Overrides = {
  alerts?: Partial<Alerts>;
  buttonPressedScale?: number;
  outline?: Hex;
  outlineContent?: Hex;
  infoBackground?: Hex;
  infoBorder?: Hex;
  primaryContent?: Hex;
  dangerContent?: Hex;
};

export type FullThemeHex = {
  primary: Hex;
  primaryContent: Hex;
  outline: Hex;
  outlineContent: Hex;
  page: Hex;
  buttonPressedScale: number;
  textColor: Hex;
  info: Hex;
  infoBorder: Hex;
  infoBackground: Hex;
  infoForeground: Hex;
  danger: Hex;
  dangerContent: Hex;
  warning: Hex;
  success: Hex;
  // alerts: WellDefinedAlerts;
};

export type ThisIsTheThemeWeNeed = {
  isDarkish: boolean;
  primary: Hex;
  info: Hex;
  danger: Hex;
  warning: Hex;
  success: Hex;
  page: Hex;
  textColor: Hex;
  overrides?: Overrides;
};

const createAlertColors = (
  overrides: Partial<AlertColors> | undefined,
  fallbackColor: Hex,
  isDarkish: boolean
): AlertColors => {
  const fallback = generateAlertColorsFromBaseHex(fallbackColor, isDarkish);
  const alert: AlertColors = {
    background: overrides?.background || fallback.background,
    border: overrides?.border || fallback.border,
    foreground: overrides?.foreground || fallback.foreground,
  };
  return alert;
};

const createAlerts = (inputTheme: ThisIsTheThemeWeNeed): WellDefinedAlerts => {
  const info = createAlertColors(
    inputTheme.overrides?.alerts?.info,
    inputTheme.info,
    inputTheme.isDarkish
  );
  const success = createAlertColors(
    inputTheme.overrides?.alerts?.success,
    inputTheme.success,
    inputTheme.isDarkish
  );
  const warning = createAlertColors(
    inputTheme.overrides?.alerts?.warning,
    inputTheme.warning,
    inputTheme.isDarkish
  );
  const danger = createAlertColors(
    inputTheme.overrides?.alerts?.danger,
    inputTheme.danger,
    inputTheme.isDarkish
  );

  return {
    info,
    success,
    warning,
    danger,
  };
};

// page --> required
// button pressed scale --> override, use 0.97 by default
// text color --> required
// outline --> override, use text color by default
// outline content --> override, use text color by default
// info border --> override, use generateAlertColorsFromBase
// info background --> override, use generateAlertColorsFromBase

// primary content --> override, generate color based on primary, but on the opposite scale
// danger content --> override, generate color based on danger, but on the opposite scale

export const createTheme = (inputTheme: ThisIsTheThemeWeNeed): FullThemeHex => {
  const alerts = createAlerts(inputTheme);
  return {
    ...inputTheme,
    // alerts,
    buttonPressedScale: inputTheme.overrides?.buttonPressedScale || 0.97,
    outline: inputTheme.overrides?.outline || inputTheme.textColor,
    outlineContent:
      inputTheme.overrides?.outlineContent || inputTheme.textColor,
    infoBackground: alerts.info.background,
    infoBorder: alerts.info.border,
    infoForeground: alerts.info.foreground,
    primaryContent:
      inputTheme.overrides?.primaryContent ||
      generateButtonContent(inputTheme.primary),
    dangerContent:
      inputTheme.overrides?.dangerContent ||
      generateButtonContent(inputTheme.danger),
  };
};

type CssVariablesTheme = {
  "--primary": OklchString;
  "--primary-content": OklchString;
  "--outline": OklchString;
  "--outline-content": OklchString;
  "--page": OklchString;
  "--btn-pressed-scale": NumberString;
  "--danger": OklchString;
  "--danger-content": OklchString;
  "--text-color": OklchString;
  "--info": OklchString;
  "--info-bg": OklchString;
  "--info-bd": OklchString;
  "--info-fg": OklchString;
  "--success": OklchString;
  // color: "oklch(var(--text-color))",
};

export const themeToCssVariables = (
  themeHex: FullThemeHex
): CssVariablesTheme => {
  return {
    "--primary": toOklchString(hexToOklch(themeHex.primary)),
    "--primary-content": toOklchString(hexToOklch(themeHex.primaryContent)),
    "--outline": toOklchString(hexToOklch(themeHex.outline)),
    "--outline-content": toOklchString(hexToOklch(themeHex.outlineContent)),
    "--page": toOklchString(hexToOklch(themeHex.page)),
    "--btn-pressed-scale": `${themeHex.buttonPressedScale}`,
    "--danger": toOklchString(hexToOklch(themeHex.danger)),
    "--danger-content": toOklchString(hexToOklch(themeHex.dangerContent)),
    "--text-color": toOklchString(hexToOklch(themeHex.textColor)),
    "--info": toOklchString(hexToOklch(themeHex.info)),
    "--info-bg": toOklchString(hexToOklch(themeHex.infoBackground)),
    "--info-bd": toOklchString(hexToOklch(themeHex.infoBorder)),
    "--info-fg": toOklchString(hexToOklch(themeHex.infoForeground)),
    "--success": toOklchString(hexToOklch(themeHex.success)),
  };
};

// TODO: strukturera om lite, så filer ligger rätt så att säga
// TODO: refaktorisera demogrejerna så jag kan lägga dom på en och samma sida
// TODO: gör färdigt ett tema så jag kan visa det på temageneratorn
// TODO: generera textfärg på knapparna
// TODO: ta in textfärg som prop
// TODO: kanske räkna ut om temat är dark eller light baserat på om textfärgen som valts är ljus eller mörk?

// const defaultLightTheme = createTheme({
//   isDarkish: false,

// })
