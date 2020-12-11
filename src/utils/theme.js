import { orange, green, red, yellow, neutral } from "./colors"

export const defaultTheme = {
  textColor: neutral[700],

  primaryColor: orange[400],
  textOnPrimary: neutral[100],
  primaryHoverColor: orange[300],
  textOnPrimaryHoverColor: neutral[200],
  primaryActiveColor: orange[300],
  textOnPrimaryActiveColor: neutral[900],

  secondaryColor: green[400],
  textOnSecondary: neutral[900],
  secondaryHoverColor: green[300],
  textOnSecondaryHoverColor: neutral[200],
  secondaryActiveColor: green[300],
  textOnSecondaryActiveColor: neutral[800],

  disabled: neutral[500],
  textOnDisabled: neutral[100],
  white: "#fff",
  background: neutral[100],
  surface: neutral[200],
  levelOne: neutral[300],
  levelTwo: neutral[400],

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[200],
    errorColor: red[200],
    errorColorHover: red[100],
    errorColorActive: red[100],
    successColor: green[300],
    successColorHover: green[200],
    successColorActive: green[200],
  },
}
