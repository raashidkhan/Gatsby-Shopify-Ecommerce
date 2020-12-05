const size = {
  mobileS: "420px",
  mobile: "680px",
  tab: "900px",
  tabL: "1024px",
  desktop: "1440px",
  desktopLarge: "2560px",
}
export const Devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  tab: `(max-width: ${size.tab})`,
  tabL: `(max-width: ${size.tabL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopLarge})`,
}
