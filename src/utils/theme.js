import { orange, green, red, yellow, neutral } from "./colors"

export const defaultTheme = {
  textColor: neutral[700],

  primaryColor: orange[400],
  textOnPrimary: neutral[900],
  primaryHoverColor: orange[500],
  textOnPrimaryHoverColor: neutral[800],
  primaryActiveColor: orange[300],
  textOnPrimaryActiveColor: neutral[900],

  secondaryColor: green[400],
  textOnSecondary: neutral[900],
  secondaryHoverColor: green[500],
  textOnSecondaryHoverColor: neutral[800],
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
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
}
