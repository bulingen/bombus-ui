import {
  generateAlertColorsFromBase,
  generateAlertColorsFromBaseHex,
} from "../colors";

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

type AlertColors = {
  border: Hex;
  background: Hex;
};

type Alerts = {
  info: Partial<AlertColors>;
  success: Partial<AlertColors>;
  warning: Partial<AlertColors>;
  danger: Partial<AlertColors>;
};

type Overrides = {
  alerts?: Partial<Alerts>;
};

export type FullThemeHex = {
  primary: Hex;
  info: Hex;
  danger: Hex;
  warning: Hex;
  success: Hex;
  alerts: Alerts;
};

export type ThisIsTheThemeWeNeed = {
  isDarkish: boolean;
  primary: Hex;
  info: Hex;
  danger: Hex;
  warning: Hex;
  success: Hex;
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
  };
  return alert;
};

const createAlerts = (inputTheme: ThisIsTheThemeWeNeed): Alerts => {
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

const createTheme = (inputTheme: ThisIsTheThemeWeNeed): FullThemeHex => {
  const alerts = createAlerts(inputTheme);
  return {
    ...inputTheme,
    alerts,
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
