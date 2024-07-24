export type Colors =
  | "white"
  | "black"
  | "richBlack"
  | "graniteGray"
  | "darkVanilla"
  | "cultured"
  | "deepJungleGreen"
  | "khaki"
  | "gainsboro"
  | "chamoisee"
  | "transparent";

export const colors: Record<Colors, string> = {
  white: "#fff",
  black: "#000",

  richBlack: "#00363D",
  graniteGray: "#656565",
  darkVanilla: "#CCBDA5",
  cultured: "#F9F7F3",
  deepJungleGreen: "#00474D",
  khaki: "#BCA68A",
  gainsboro: "#DCDCDC",
  chamoisee: "#9A785C",
  transparent: "transparent",
};
