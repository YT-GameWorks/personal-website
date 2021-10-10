import { ColorScheme, colors } from "@vechaiui/react";

export const pale: ColorScheme = {
  id: "pale",
  type: "dark",
  colors: {
    bg: {
      base: colors.blueGray["800"],
      fill: colors.blueGray["900"],
    },
    text: {
      foreground: colors.blueGray["100"],
      muted: colors.blueGray["300"],
    },
    primary: colors.violet,
    neutral: colors.blueGray,
  },
};
