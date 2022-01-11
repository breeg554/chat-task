export type ThemeType = typeof theme;

export const theme = {
  colors: {
    core: {
      primary: "#2C3E50",
      secondary: "#555555",
      tertiary: "rgba(0,0,0,0.25)",
      success: "#74DD88",
    },
    hover: {
      primary: "#222",
      secondary: "#444",
      tertiary: "rgba(0,0,0,0.4)",
      success: "#95ee99",
    },
  },
  gradients: {
    core: {
      primary: "linear-gradient(to right, #00c6ff, #0072ff)",
    },
    hover: {
      primary: "linear-gradient(to right, #00a5dd, #0061dd)",
    },
  },
};
