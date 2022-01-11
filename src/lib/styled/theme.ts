export type ThemeType = typeof theme;

export const theme = {
  colors: {
    core: {
      primary: "#2C3E50",
      secondary: "#555555",
      tertiary: "rgba(0,0,0,0.35)",
      success: "#74DD88",
    },
    hover: {
      primary: "#222",
      secondary: "#444",
      tertiary: "rgba(0,0,0,0.5)",
      success: "#95ee99",
    },
  },
  gradients: {
    core: {
      primary:
        "transparent linear-gradient(122deg, #3394CE 0%, #437CD4 62%, #4686D6 85%, #4D98D9 100%) 0% 0% no-repeat padding-box",
    },
    hover: {
      primary:
        "transparent linear-gradient(122deg, #2294CE 0%, #327CD4 62%, #3586D6 85%, #3a98D9 100%) 0% 0% no-repeat padding-box",
    },
  },
};
